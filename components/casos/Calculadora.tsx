"use client";

import { useEffect, useId, useRef, useState } from "react";

type Moneda = "ARS" | "USD";

const SIMBOLO: Record<Moneda, string> = { ARS: "$", USD: "U$S" };
const TICKET_MAXIMO = 999_999_999_999;
const formato = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

const dinero = (valor: number, moneda: Moneda) =>
  `${SIMBOLO[moneda]}\u00A0${formato.format(Math.round(valor))}`;

/** Punto de equilibrio: lo máximo que se puede pagar por consulta sin perder. */
export function calcular(ticket: number, margen: number, consultas: number) {
  const ganancia = ticket * (margen / 100);
  return { ganancia, tope: ganancia / Math.max(consultas, 1) };
}

/**
 * Importe que se desliza hasta su nuevo valor en lugar de saltar.
 * Escribe directo en el nodo de texto (sin re-renders por fotograma) y
 * arranca siempre desde lo que se ve en pantalla, así encadena cambios seguidos.
 */
function Importe({ valor, moneda, className }: { valor: number; moneda: Moneda; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const enPantalla = useRef(valor);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const desde = enPantalla.current;
    const pintar = (n: number) => {
      enPantalla.current = n;
      el.textContent = dinero(n, moneda);
    };
    if (desde === valor || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pintar(valor);
      return;
    }
    let frame = 0;
    const inicio = performance.now();
    const paso = (ahora: number) => {
      const t = Math.min((ahora - inicio) / 450, 1);
      pintar(desde + (valor - desde) * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(paso);
    };
    frame = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(frame);
  }, [valor, moneda]);

  return (
    <span ref={ref} aria-hidden className={className}>
      {dinero(valor, moneda)}
    </span>
  );
}

interface DeslizadorProps {
  etiqueta: string;
  ayuda: string;
  valor: number;
  min: number;
  max: number;
  sufijo?: string;
  onChange: (valor: number) => void;
}

function Deslizador({ etiqueta, ayuda, valor, min, max, sufijo = "", onChange }: DeslizadorProps) {
  const id = useId();
  const avance = ((valor - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-navy">
          {etiqueta}
        </label>
        <output htmlFor={id} className="text-2xl font-bold text-navy tabular-nums">
          {valor}
          {sufijo}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={1}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-describedby={`${id}-ayuda`}
        style={{ "--avance": `${avance}%` } as React.CSSProperties}
        className="deslizador mt-4"
      />
      <p id={`${id}-ayuda`} className="mt-3 text-sm text-slate-500 leading-relaxed">
        {ayuda}
      </p>
    </div>
  );
}

/**
 * Calculadora de punto de equilibrio por consulta.
 * Todo se calcula en el navegador: no envía ni guarda los datos.
 */
export function Calculadora() {
  const idTicket = useId();
  const [moneda, setMoneda] = useState<Moneda>("ARS");
  const [ticket, setTicket] = useState(20_000_000);
  const [margen, setMargen] = useState(8);
  const [consultas, setConsultas] = useState(20);

  const { ganancia, tope } = calcular(ticket, margen, consultas);
  const porcion = 100 / consultas;

  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
      {/* ── Datos ── */}
      <form
        className="lg:col-span-5 lg:pr-14 space-y-10"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Datos de tu negocio"
      >
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={idTicket} className="text-sm font-semibold text-navy">
              Ticket promedio
            </label>
            <div role="group" aria-label="Moneda" className="flex gap-4 text-sm font-semibold">
              {(Object.keys(SIMBOLO) as Moneda[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  aria-pressed={moneda === m}
                  onClick={() => setMoneda(m)}
                  className="selector-moneda cursor-pointer pb-1 text-slate-400 transition-colors hover:text-navy aria-pressed:text-navy focus-visible:outline-none focus-visible:text-primary-500"
                >
                  {m === "ARS" ? "Pesos" : "Dólares"}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-3 border-b-2 border-slate-300 transition-colors focus-within:border-navy">
            <span aria-hidden className="text-2xl font-bold text-slate-400">
              {SIMBOLO[moneda]}
            </span>
            <input
              id={idTicket}
              type="text"
              inputMode="numeric"
              autoComplete="off"
              value={ticket ? formato.format(ticket) : ""}
              placeholder="0"
              onChange={(e) => {
                const n = Number(e.target.value.replace(/\D/g, ""));
                setTicket(Math.min(n, TICKET_MAXIMO));
              }}
              aria-describedby={`${idTicket}-ayuda`}
              className="w-full min-w-0 bg-transparent py-2 text-2xl font-bold text-navy tabular-nums placeholder:text-slate-300 focus:outline-none"
            />
          </div>
          <p id={`${idTicket}-ayuda`} className="mt-3 text-sm text-slate-500 leading-relaxed">
            Lo que cobras, en promedio, por cada venta.
          </p>
        </div>

        <Deslizador
          etiqueta="Margen por venta"
          ayuda="Qué parte de esa venta te queda como ganancia."
          valor={margen}
          min={1}
          max={100}
          sufijo="%"
          onChange={setMargen}
        />

        <Deslizador
          etiqueta="Consultas por venta"
          ayuda="Cuántas consultas necesitas, en promedio, para cerrar una venta."
          valor={consultas}
          min={1}
          max={60}
          onChange={setConsultas}
        />
      </form>

      {/* ── Resultado ── */}
      <div className="lg:col-span-7 lg:pl-14 lg:border-l border-slate-200">
        <p className="text-sm font-semibold text-slate-500">
          Lo máximo que puedes pagar por una consulta
        </p>
        <p className="mt-2">
          <Importe
            valor={tope}
            moneda={moneda}
            className="block text-4xl sm:text-5xl font-extrabold tracking-tight text-navy tabular-nums"
          />
        </p>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed max-w-md">
          Por encima de ese número, cada venta que llega por publicidad te cuesta plata.
        </p>

        {/* Lectura accesible: un solo anuncio con el valor final, sin los pasos intermedios */}
        <p className="sr-only" role="status">
          Lo máximo que puedes pagar por una consulta es {dinero(tope, moneda)}. Ganancia por
          venta: {dinero(ganancia, moneda)}.
        </p>

        {/* La cuenta, dibujada: la ganancia de una venta repartida entre las consultas que cuesta */}
        <div className="mt-10" aria-hidden>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className="font-semibold text-navy">Ganancia de una venta</span>
            <Importe valor={ganancia} moneda={moneda} className="font-bold text-navy tabular-nums" />
          </div>
          <div className="reparto mt-3" style={{ "--porcion": `${porcion}%` } as React.CSSProperties}>
            <div className="reparto-una" />
            <div className="reparto-marcas" />
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-cta-500" />
              Una consulta
            </span>
            <span className="tabular-nums">
              {consultas} {consultas === 1 ? "consulta" : "consultas"} por venta
            </span>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-slate-200 text-lg font-semibold text-navy leading-snug max-w-lg">
          {consultas > 1 ? (
            <>
              Si te alcanzara con la mitad de las consultas para cerrar la misma venta, podrías
              pagar el doble por cada una:{" "}
              <Importe valor={tope * 2} moneda={moneda} className="tabular-nums text-cta-500" />.
            </>
          ) : (
            <>Con una consulta por venta, toda la ganancia puede ir a conseguir esa consulta.</>
          )}
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-lg">
          Por eso filtramos en el anuncio: menos consultas, de gente que sí compra.
        </p>

        <p className="mt-8 text-sm text-slate-500 leading-relaxed max-w-lg">
          Es una cuenta de punto de equilibrio con los datos que cargas. No incluye otros costos
          ni es una proyección de resultados. Los datos no se guardan ni se envían.
        </p>
      </div>
    </div>
  );
}
