import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PanelEvidencia, type Captura } from "@/components/casos/PanelEvidencia";
import { VideoMuestra } from "@/components/casos/VideoMuestra";
import { RevealOnScroll } from "@/components/casos/RevealOnScroll";
import { Contador } from "@/components/casos/Contador";
import { ExpandOnScroll } from "@/components/casos/ExpandOnScroll";
import { Calculadora } from "@/components/casos/Calculadora";

const URL = "https://delanoegrowth.com/casos-de-exito";
const DESCRIPTION =
  "Mapaal Automotores vende entre 3 y 6 autos por mes desde los anuncios. Kevin Pérez (RE/MAX) captó 15 propiedades en tres meses y medio. Cómo lo hicimos y con qué negocios trabajamos.";

export const metadata: Metadata = {
  title: "Casos de éxito: publicidad medida en ventas",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Casos de éxito | Delanoe Growth",
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [
      {
        url: "/branding/banner.png",
        width: 1200,
        height: 630,
        alt: "Delanoe Growth — Casos de éxito en Neuquén y el Alto Valle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de éxito | Delanoe Growth",
    description: DESCRIPTION,
    images: ["/branding/banner.png"],
  },
};

const WHATSAPP =
  "https://wa.me/5492996736980?text=" +
  encodeURIComponent("Hola! Vi los casos de éxito y quiero agendar un diagnóstico para mi negocio.");

// ─── Contenido ───────────────────────────────────────────────────────────────
// Cifras tomadas de los documentos "Caso de éxito" de cada cliente.
// No sumar métricas entre sí: pueden superponerse.

const SENALES = [
  {
    texto: "Dependes de referidos o de portales.",
    destino: "Caso Kevin Pérez",
    href: "#kevin-perez",
  },
  {
    texto: "Haces publicidad y te escriben curiosos.",
    destino: "Caso Mapaal",
    href: "#mapaal",
  },
  {
    texto: "Te llegan consultas que no terminan en ventas.",
    destino: "Cómo trabajamos",
    href: "#metodo",
  },
];

const CAPTURAS_MAPAAL: Captura[] = [
  {
    src: "/metrics/meta-ads-mapaal.png",
    alt: "Administrador de anuncios de Meta de Mapaal Automotores con las métricas de rendimiento",
    caption: "Administrador de anuncios de Meta · Métricas de rendimiento",
    width: 1366,
    height: 609,
  },
  {
    src: "/metrics/metaads-mapaal.png",
    alt: "Costo por resultado de los conjuntos de anuncios de Mapaal Automotores",
    caption: "Administrador de anuncios de Meta · Costo por resultado",
    width: 1363,
    height: 605,
  },
  {
    src: "/metrics/metricas-tiktok-mapaal.png",
    alt: "Estadísticas de la cuenta de TikTok de Mapaal Automotores",
    caption: "TikTok · Alcance orgánico de la cuenta",
    width: 1366,
    height: 561,
  },
];

const CAPTURAS_KEVIN: Captura[] = [
  {
    src: "/metrics/dptojuani-metricas-kevin.png",
    alt: "Administrador de anuncios de Meta con una campaña de compradores de Kevin Pérez",
    caption: "Administrador de anuncios de Meta · Campaña de compradores",
    width: 1366,
    height: 572,
  },
  {
    src: "/metrics/j.newberydplx-kevin.png",
    alt: "Desglose por conjunto de anuncios de una campaña de Kevin Pérez",
    caption: "Administrador de anuncios de Meta · Desglose por conjunto de anuncios",
    width: 1366,
    height: 569,
  },
];

const REGLAS_ANUNCIO = [
  {
    titulo: "Arranca en el primer cuadro.",
    texto:
      "Con sonido y hablando desde el segundo cero. La primera impresión se forma en segundos y define cómo se mira el resto.",
  },
  {
    titulo: "Le habla a un comprador.",
    texto: "No al público. Lo que dice solo le interesa a quien puede comprar.",
  },
  {
    titulo: "La oferta va adelante.",
    texto: "Precio y ubicación primero. El dato que espanta al curioso retiene al comprador.",
  },
  {
    titulo: "Sin relleno.",
    texto: "La palabra que no califica ni vende, se va.",
  },
];

const CRITERIOS = [
  {
    titulo: "Ticket",
    texto: "Cada venta deja lo suficiente para justificar la inversión. No trabajamos con tickets bajos.",
  },
  {
    titulo: "Rentabilidad",
    texto: "El margen sostiene la publicidad sin ahogar al negocio.",
  },
  {
    titulo: "Estructura",
    texto: "El negocio hoy se sostiene solo. La publicidad no resuelve un problema financiero.",
  },
  {
    titulo: "Oferta",
    texto: "Un buen producto, a un precio que el mercado paga.",
  },
];

/** Retraso escalonado para `hero-in` y `data-reveal` */
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// ─── Piezas de presentación ──────────────────────────────────────────────────

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${className}`}>{children}</p>
  );
}

function Ficha({ items }: { items: string[] }) {
  return (
    <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-3">
          {i > 0 && <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />}
          <span className={i === 0 ? "font-semibold text-navy" : ""}>{item}</span>
        </span>
      ))}
    </p>
  );
}

/** Barra de comparación antes / después. `pct` es el ancho relativo (0–100). */
function Comparacion({
  titulo,
  antes,
  despues,
}: {
  titulo: string;
  antes: { valor: number; pct: number };
  despues: { valor: number; pct: number };
}) {
  const formato = new Intl.NumberFormat("es-AR");
  return (
    <div>
      <p className="text-sm font-semibold text-navy mb-3">{titulo}</p>
      <dl className="space-y-2">
        <div className="grid grid-cols-[4.5rem_1fr_4.5rem] items-center gap-3">
          <dt className="text-xs text-slate-500">Antes</dt>
          <div className="h-2.5 rounded-full bg-slate-100" aria-hidden="true">
            <div className="barra h-full rounded-full bg-slate-400" style={{ width: `${antes.pct}%` }} />
          </div>
          <dd className="text-right text-base font-bold tabular-nums text-slate-500">
            {formato.format(antes.valor)}
          </dd>
        </div>
        <div className="grid grid-cols-[4.5rem_1fr_4.5rem] items-center gap-3">
          <dt className="text-xs text-slate-500">Después</dt>
          <div className="h-2.5 rounded-full bg-slate-100" aria-hidden="true">
            <div
              className="barra h-full rounded-full bg-navy"
              style={{ width: `${despues.pct}%`, ...d(150) }}
            />
          </div>
          <dd className="text-right text-base font-bold tabular-nums text-navy">
            <Contador desde={antes.valor} hasta={despues.valor} />
          </dd>
        </div>
      </dl>
    </div>
  );
}

/** Fondo decorativo de las bandas azules: cuadrícula tenue y dos luces en movimiento. */
function FondoBanda() {
  return (
    <div className="banda-fondo" aria-hidden="true">
      <div className="banda-luz banda-luz-1" />
      <div className="banda-luz banda-luz-2" />
      <div className="banda-grilla" />
    </div>
  );
}

// Puntos del filtro: fila (y), retraso y duración en segundos. Los `pasa` cruzan la línea.
const PUNTOS_FILTRO = [
  { y: 22, d: 0, t: 6 },
  { y: 40, d: 2.4, t: 7, pasa: true },
  { y: 58, d: 1.1, t: 6.5 },
  { y: 76, d: 3.6, t: 6 },
  { y: 94, d: 0.6, t: 7.5, pasa: true },
  { y: 112, d: 4.4, t: 6.5 },
  { y: 130, d: 2, t: 6 },
  { y: 148, d: 5.2, t: 7, pasa: true },
  { y: 31, d: 3.1, t: 7 },
  { y: 67, d: 5, t: 6.5 },
  { y: 103, d: 2.9, t: 6 },
  { y: 139, d: 0.3, t: 7.5 },
  { y: 49, d: 4.6, t: 6 },
  { y: 121, d: 1.6, t: 7 },
];

/** "El anuncio filtra": muchos llegan a la línea, pocos la cruzan. Solo CSS, sin JavaScript. */
function FiltroAnimado() {
  return (
    <svg
      viewBox="0 0 400 190"
      className="filtro hidden lg:block w-[25rem] shrink-0"
      aria-hidden="true"
    >
      <line x1="200" y1="6" x2="200" y2="164" stroke="rgb(255 255 255 / 0.35)" strokeWidth="1" />
      {PUNTOS_FILTRO.map((punto, i) => (
        <circle
          key={i}
          cx="10"
          cy={punto.y}
          r={punto.pasa ? 4.5 : 3.5}
          fill={punto.pasa ? "var(--color-cta-400)" : "var(--color-primary-300)"}
          data-pasa={punto.pasa ? "" : undefined}
          style={{ "--d": `${punto.d}s`, "--t": `${punto.t}s` } as React.CSSProperties}
        />
      ))}
      <g fill="var(--color-primary-300)" fontSize="10" fontWeight="600" letterSpacing="2">
        <text x="10" y="186">CURIOSOS</text>
        <text x="390" y="186" textAnchor="end" fill="var(--color-cta-400)">
          COMPRADORES
        </text>
      </g>
    </svg>
  );
}

// ─── Página ──────────────────────────────────────────────────────────────────

export default function CasosDeExitoPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-clip">
        <RevealOnScroll />
        <ExpandOnScroll />
        {/* ── 1. Apertura ── */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Eyebrow className="hero-in text-cta-500 mb-6">Casos de éxito</Eyebrow>
            <h1 style={d(60)} className="hero-in text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-navy max-w-4xl">
              Vendes bien cuando el cliente llega. El problema es que no decides{" "}
              <span className="subrayado text-primary-500">cuándo llega.</span>
            </h1>
            <p style={d(180)} className="hero-in mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Dos negocios de Neuquén y el Alto Valle dejaron de esperar. Esto es lo que hicimos y
              lo que vendieron.
            </p>

            <div className="mt-16 md:mt-20">
              <p style={d(320)} className="hero-in text-sm font-semibold text-navy mb-5">¿Te pasa alguna?</p>
              <ul className="grid md:grid-cols-3 gap-x-8">
                {SENALES.map((s, i) => (
                  <li key={s.href} style={d(400 + i * 90)} className="hero-in">
                    <a
                      href={s.href}
                      className="group flex h-full flex-col justify-between gap-6 border-t-2 border-navy py-5 transition-colors hover:border-primary-500"
                    >
                      <span className="text-lg font-semibold text-navy leading-snug">{s.texto}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:text-primary-600 transition-colors">
                        {s.destino}
                        <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-1" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 2. Mapaal ── */}
        <section
          id="mapaal"
          aria-labelledby="mapaal-titulo"
          className="scroll-mt-28 border-t border-slate-200 py-20 md:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal>
            <Ficha
              items={[
                "Mapaal Automotores",
                "Agencia de vehículos",
                "Neuquén Capital",
                "Abril a junio de 2026",
              ]}
            />
            <h2
              id="mapaal-titulo"
              className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-navy max-w-3xl"
            >
              La publicidad se mide en autos vendidos.
            </h2>
            </div>

            <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div data-reveal className="lg:col-span-5 space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  La obra de la ex Ruta 22 complicó el acceso a los comercios de la Av. Mosconi y
                  las ventas de la zona cayeron hasta más de un 50%.
                </p>
                <p>
                  Mapaal ya hacía publicidad: le traía mensajes caros y pocos compradores.
                </p>
                <p>
                  Rearmamos las campañas para que escriba quien quiere comprar, abrimos su TikTok
                  desde cero y acompañamos las consultas por WhatsApp hasta el cierre.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div data-reveal style={d(120)} className="border-l-4 border-navy pl-6 sm:pl-8 py-1">
                  <Eyebrow className="text-slate-500 mb-3">El resultado</Eyebrow>
                  <p className="text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-tight">
                    Hoy, entre <span className="text-cta-500">3 y 6</span> de los 10 a 15 autos que
                    vende por mes salen de los anuncios.
                  </p>
                </div>

                <div data-reveal className="mt-10 grid sm:grid-cols-2 gap-8">
                  <Comparacion
                    titulo="Consultas por mes"
                    antes={{ valor: 472, pct: 54 }}
                    despues={{ valor: 868, pct: 100 }}
                  />
                  <Comparacion
                    titulo="Costo por consulta (ARS)"
                    antes={{ valor: 1901, pct: 100 }}
                    despues={{ valor: 786, pct: 41 }}
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-navy">Con menos inversión publicitaria.</p>

                <div data-reveal className="mt-8 border-t border-slate-300 pt-5">
                  <Eyebrow className="text-slate-500 mb-2">Una campaña</Eyebrow>
                  <p className="text-lg font-bold text-navy tracking-tight">
                    7 autos publicados. Una semana. 4 vendidos.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-3">
                  <PanelEvidencia
                    label="Ver el panel de Meta Ads"
                    title="Mapaal Automotores · Paneles de Meta Ads y TikTok"
                    capturas={CAPTURAS_MAPAAL}
                  />
                  <p className="text-xs text-slate-500 leading-relaxed sm:max-w-sm">
                    Estas cifras miden el mismo trabajo desde distintos ángulos y pueden
                    superponerse. No se suman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Kevin Pérez ── */}
        <section
          id="kevin-perez"
          aria-labelledby="kevin-titulo"
          className="scroll-mt-28 bg-slate-50 border-y border-slate-200 py-20 md:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal>
            <Ficha
              items={[
                "Kevin Pérez",
                "Agente de RE/MAX Confluencia",
                "Cipolletti y Neuquén",
                "Agosto a noviembre de 2026",
              ]}
            />
            <h2
              id="kevin-titulo"
              className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-navy max-w-4xl"
            >
              Los referidos llegan cuando quieren. Los anuncios, cuando los necesitas.
            </h2>
            </div>

            <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div data-reveal className="lg:col-span-5 space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  Kevin dependía de referidos, clientes antiguos y portales. Funcionan, pero no se
                  pueden acelerar.
                </p>
                <p>
                  Armamos dos campañas: una para que los propietarios de la zona le escriban a él,
                  otra para llevar compradores a propiedades concretas.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div data-reveal style={d(120)} className="border-l-4 border-navy pl-6 sm:pl-8 py-1">
                  <Eyebrow className="text-slate-500 mb-3">El resultado</Eyebrow>
                  <p className="text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-tight">
                    <span className="text-cta-500">
                      <Contador desde={0} hasta={15} /> propiedades
                    </span> captadas en tres meses y
                    medio. Tres operaciones cerradas por U$S 377.500.
                  </p>
                </div>

                <dl className="mt-10 grid sm:grid-cols-3 gap-x-8 gap-y-6">
                  {[
                    { valor: "U$S 2,04 M", texto: "en cartera nueva" },
                    { valor: "+4 por mes", texto: "ritmo de captación" },
                    { valor: "~1 mes", texto: "de la captación a la venta, en el caso más rápido" },
                  ].map((m, i) => (
                    <div
                      key={m.texto}
                      data-reveal
                      style={d(i * 100)}
                      className="border-t border-slate-300 pt-4"
                    >
                      <dd className="text-2xl font-bold text-navy tracking-tight tabular-nums">
                        {m.valor}
                      </dd>
                      <dt className="mt-1 text-sm text-slate-500 leading-snug">{m.texto}</dt>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-3">
                  <PanelEvidencia
                    label="Ver el panel de Meta Ads"
                    title="Kevin Pérez · Paneles de Meta Ads"
                    capturas={CAPTURAS_KEVIN}
                  />
                  <p className="text-xs text-slate-500 leading-relaxed sm:max-w-sm">
                    Las 15 son captaciones, no ventas. Valores de publicación o tasación
                    informados por el agente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Lo que hicieron después ── */}
        <section aria-labelledby="despues-titulo" className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div data-reveal className="lg:col-span-4">
              <Eyebrow className="text-cta-500 mb-5">Clientes</Eyebrow>
              <h2
                id="despues-titulo"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-navy"
              >
                Lo que hicieron después.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-10">
              <p data-reveal className="text-xl sm:text-2xl font-semibold text-navy tracking-tight leading-snug">
                Kevin Pérez dependía de referidos. Después de trabajar con nosotros, nos recomendó
                a Potenza Motors.
              </p>
              <figure data-reveal style={d(120)} className="border-l-2 border-navy pl-6">
                <blockquote className="text-lg text-slate-700 leading-relaxed">
                  “Un genio Tomy, muy bueno todo.”
                </blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">
                  <span className="font-semibold text-navy">Juan Gallo</span> · Potenza Motors
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── 5. El método ── */}
        <section
          id="metodo"
          aria-labelledby="metodo-titulo"
          data-expand
          className="banda scroll-mt-20 text-white py-24 md:py-32"
        >
          <FondoBanda />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="flex items-center justify-between gap-12">
            <div>
            <Eyebrow className="text-cta-400 mb-5">Por qué funcionó</Eyebrow>
            <h2
              id="metodo-titulo"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl"
            >
              El anuncio filtra. El contenido atrae.
            </h2>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed max-w-2xl">
              Son dos herramientas con dos trabajos distintos. Mezclarlas es lo que llena un
              WhatsApp de curiosos.
            </p>
            </div>
            <FiltroAnimado />
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-16 lg:gap-12">
              {/* Anuncio */}
              <div data-reveal className="grid sm:grid-cols-[13rem_1fr] gap-8 items-start">
                <div className="w-52 sm:w-full">
                  <VideoMuestra
                    src="/videos/casos/kevin-captacion.mp4"
                    poster="/videos/casos/posters/kevin-captacion.jpg"
                    title="anuncio de captación de propietarios de Kevin Pérez"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">El anuncio</h3>
                  <p className="mt-1 text-sm text-primary-300">Para el que ya quiere comprar.</p>
                  <ul className="mt-6 space-y-5">
                    {REGLAS_ANUNCIO.map((r) => (
                      <li key={r.titulo} className="border-l-2 border-cta-400 pl-4">
                        <p className="font-semibold">{r.titulo}</p>
                        <p className="mt-1 text-sm text-primary-200 leading-relaxed">{r.texto}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contenido */}
              <div data-reveal className="grid sm:grid-cols-[13rem_1fr] gap-8 items-start">
                <div className="w-52 sm:w-full">
                  <VideoMuestra
                    src="/videos/casos/mapaal-review.mp4"
                    poster="/videos/casos/posters/mapaal-review.jpg"
                    title="review de un Toyota Yaris 2024 para Mapaal Automotores"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">El contenido</h3>
                  <p className="mt-1 text-sm text-primary-300">Para el que todavía no te conoce.</p>
                  <ul className="mt-6 space-y-5">
                    <li className="border-l-2 border-primary-400 pl-4">
                      <p className="font-semibold">Llega a quien no estaba buscando.</p>
                      <p className="mt-1 text-sm text-primary-200 leading-relaxed">
                        Reviews y recorridos que muestran el producto sin pedir nada a cambio.
                      </p>
                    </li>
                    <li className="border-l-2 border-primary-400 pl-4">
                      <p className="font-semibold">Abre zonas que el local no alcanza.</p>
                      <p className="mt-1 text-sm text-primary-200 leading-relaxed">
                        En Mapaal trajo compradores de otras localidades: 3 autos vendidos.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p data-reveal className="mt-20 pt-10 border-t border-white/15 text-xl sm:text-2xl font-bold tracking-tight leading-snug max-w-3xl">
              Una consulta barata que nunca compra sale más cara que una costosa que sí compra.
            </p>
          </div>
        </section>

        {/* ── Calculadora: la idea del método, con los números del visitante ── */}
        <section
          id="calculadora"
          aria-labelledby="calculadora-titulo"
          className="scroll-mt-20 py-20 md:py-28"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="max-w-3xl">
              <Eyebrow className="text-cta-500 mb-5">Tu número</Eyebrow>
              <h2
                id="calculadora-titulo"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-navy"
              >
                ¿Cuánto puedes pagar por una consulta?
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Depende de lo que te deja una venta y de cuántas consultas necesitas para
                cerrarla. Carga tus números.
              </p>
            </div>
            <div data-reveal style={d(120)} className="mt-14 pt-12 border-t border-slate-300">
              <Calculadora />
            </div>
          </div>
        </section>

        {/* ── 6. Con quién trabajamos ── */}
        <section
          aria-labelledby="criterios-titulo"
          className="bg-slate-50 border-y border-slate-200 py-20 md:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div data-reveal className="lg:col-span-5">
                <Eyebrow className="text-cta-500 mb-5">Con quién trabajamos</Eyebrow>
                <h2
                  id="criterios-titulo"
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-navy"
                >
                  Mejoramos negocios que ya funcionan.
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  La publicidad amplifica lo que hay. Si el negocio vende, vende más. Si tiene un
                  problema de fondo, lo deja más a la vista.
                </p>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  Por eso, antes de proponer nada, miramos cuatro cosas.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ol className="grid sm:grid-cols-2 gap-x-10">
                  {CRITERIOS.map((c, i) => (
                    <li key={c.titulo} data-reveal style={d(i * 90)} className="border-t border-slate-300 py-6">
                      <p className="flex items-baseline gap-3">
                        <span className="text-xs font-semibold text-slate-400 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-bold text-navy">{c.titulo}</span>
                      </p>
                      <p className="mt-2 text-slate-600 leading-relaxed">{c.texto}</p>
                    </li>
                  ))}
                </ol>
                <p data-reveal className="border-t-2 border-navy pt-6 text-lg font-bold text-navy">
                  Si no se dan, no tomamos el proyecto.
                </p>
                <p className="mt-3 text-slate-600">
                  Las cuentas publicitarias, la página y los datos quedan a tu nombre.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── 7. La decisión ──
          El cierre y el footer comparten un mismo fondo: la banda azul sigue
          hasta el final de la página, sin corte ni línea entre los dos. */}
      <div data-expand="entrada" className="banda">
        <FondoBanda />
        <section
          aria-labelledby="decision-titulo"
          className="text-white pt-24 md:pt-32 pb-20 md:pb-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal>
              <h2
                id="decision-titulo"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl"
              >
                El primer paso es un diagnóstico, no una propuesta.
              </h2>
              <p className="mt-6 text-lg text-primary-200 leading-relaxed max-w-2xl">
                Una reunión para entender de dónde vienen hoy tus clientes, qué pasa después de
                cada consulta y cuánto te deja un cliente nuevo. La reunión termina con una
                respuesta clara: si un sistema así tiene sentido en tu negocio.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-cta-500 text-white text-lg font-semibold hover:bg-cta-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  Agendar diagnóstico{" "}
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
            <p className="mt-12 pt-6 border-t border-white/15 text-sm text-primary-300 max-w-2xl">
              Los resultados de esta página son de estos clientes, en su contexto. No son una
              promesa para el tuyo.
            </p>
          </div>
        </section>
        <Footer integrado />
      </div>
      <WhatsAppButton />
    </>
  );
}
