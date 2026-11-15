"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import { VideoCarousel, type ClientVideo } from "@/components/VideoCarousel";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Metric {
  value: string;
  label: string;
}

interface Highlight {
  tag: string;
  title: string;
  text: string;
}

interface DocImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudy {
  id: string;
  client: string;
  clientDetail: string;
  industry: string;
  location: string;
  period: string;
  services: string[];
  headline: string;
  challenge: string;
  approach: string;
  outcome: string;
  cardMetrics: Metric[];
  // Modal
  context: string;
  work: { title: string; text: string }[];
  metrics: Metric[];
  highlights: Highlight[];
  takeaway: string;
  docImages: DocImage[];
  footnote?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
// Cifras tomadas de los documentos "Caso de éxito" (ficha para la web).
// No sumar métricas entre sí: pueden superponerse.

const CASES: CaseStudy[] = [
  {
    id: "mapaal",
    client: "Mapaal Automotores",
    clientDetail: "Agencia de vehículos",
    industry: "Sector automotor",
    location: "Neuquén Capital",
    period: "Abril – junio 2026",
    services: ["Meta Ads", "Contenido orgánico", "TikTok desde cero", "Gestión de consultas"],
    headline: "La obra de la ex Ruta 22 frenó las ventas del barrio. La venta digital las sostuvo.",
    challenge:
      "La remodelación de la Av. Mosconi (ex Ruta 22) complicó el acceso a todos los comercios frentistas, y sus ventas cayeron hasta más de un 50%. Mapaal no fue la excepción. Buscó vender por canales digitales, pero sus primeras campañas, a cargo de un community manager, no dieron resultado.",
    approach:
      "Tomamos la pauta y la rearmamos para generar conversaciones con compradores reales, sumamos campañas por unidad para mover stock puntual y creamos su TikTok desde cero. Cada consulta pasa a WhatsApp, donde acompañamos el cierre.",
    outcome:
      "Frente a esas primeras campañas, las consultas casi se duplicaron y su costo bajó a menos de la mitad. Hoy entre el 30% y el 40% de los autos que vende cada mes salen de los anuncios: un sostén clave mientras dura la obra.",
    cardMetrics: [
      { value: "30–40%", label: "de las ventas mensuales" },
      { value: "472 → 868", label: "consultas por mes" },
      { value: "−58,7%", label: "costo por consulta" },
      { value: "4 de 7", label: "autos vendidos en una semana de campaña" },
    ],
    context:
      "Mapaal es una agencia de Neuquén Capital sobre la Av. Mosconi (ex Ruta 22). Con la remodelación de la avenida, las ventas de los comercios frentistas cayeron hasta más de un 50% y la agencia empezó a buscar cómo vender de forma digital. Sus primeras campañas, gestionadas por un community manager, generaban consultas caras y pocos compradores.",
    work: [
      {
        title: "Publicidad paga orientada a conversaciones",
        text: "Campañas para generar consultas de compradores, incluidas campañas para promocionar vehículos puntuales del stock.",
      },
      {
        title: "Contenido orgánico",
        text: "Producción de video y una cuenta de TikTok creada desde cero para que más gente descubriera la agencia.",
      },
      {
        title: "Gestión de consultas",
        text: "Derivación a WhatsApp y participación directa en la gestión comercial de algunas ventas.",
      },
    ],
    metrics: [
      { value: "3 a 6", label: "vehículos por mes vendidos desde publicidad" },
      { value: "472 → 868", label: "consultas mensuales (+83,89%)" },
      { value: "ARS 1.901 → 786", label: "costo por consulta (−58,65%)" },
      { value: "+290.000", label: "visualizaciones orgánicas en TikTok, desde cero" },
    ],
    highlights: [
      {
        tag: "Campaña por unidad",
        title: "4 de 7 vehículos vendidos en una semana",
        text: "Una campaña sobre 7 autos publicados generó más de 92 consultas a ARS 527 por mensaje.",
      },
      {
        tag: "Contenido orgánico",
        title: "Compradores del interior",
        text: "Personas de otras localidades descubrieron la agencia por el contenido y viajaron a comprar: 3 vehículos vendidos.",
      },
    ],
    takeaway:
      "La publicidad dejó de ser un gasto de imagen y se convirtió en una fuente estable de ventas.",
    docImages: [
      {
        src: "/metrics/meta-ads-mapaal.png",
        alt: "Panel de Meta Ads de Mapaal Automotores",
        caption: "Administrador de anuncios · Métricas de rendimiento",
      },
      {
        src: "/metrics/metaads-mapaal.png",
        alt: "Detalle de costos de Mapaal Automotores",
        caption: "Costo por resultado · Conjuntos de anuncios",
      },
      {
        src: "/metrics/metricas-tiktok-mapaal.png",
        alt: "Métricas de TikTok de Mapaal Automotores",
        caption: "TikTok · Alcance orgánico acumulado",
      },
    ],
    footnote:
      "Las ventas de la campaña puntual y las del contenido orgánico pueden estar incluidas dentro de las ventas mensuales desde publicidad.",
  },
  {
    id: "remax-kevin-perez",
    client: "Kevin Pérez",
    clientDetail: "Agente de RE/MAX Confluencia",
    industry: "Sector inmobiliario",
    location: "Cipolletti, Neuquén y Alto Valle",
    period: "Agosto – noviembre 2026",
    services: ["Meta Ads", "Captación de propietarios", "Generación de compradores"],
    headline: "Una cartera que crece todos los meses, sin esperar referidos.",
    challenge:
      "Como la mayoría de los agentes, Kevin dependía de referidos, clientes antiguos y portales. Son fuentes que funcionan, pero no se pueden acelerar: la cartera crecía cuando aparecía una oportunidad, no cuando él la necesitaba.",
    approach:
      "Armamos un sistema en Meta con dos frentes: campañas para que propietarios de la zona le escriban directamente y campañas para atraer compradores a propiedades concretas. Cada contacto entra a su proceso de visita y tasación.",
    outcome:
      "En tres meses y medio sumó 15 propiedades a su cartera, más de cuatro por mes. Además ya cerró tres operaciones originadas en los anuncios; una se vendió un mes después de captarla.",
    cardMetrics: [
      { value: "15", label: "propiedades captadas" },
      { value: "U$S 2,04 M", label: "valor de la cartera nueva" },
      { value: "3", label: "operaciones cerradas" },
      { value: "U$S 377.500", label: "volumen operado" },
    ],
    context:
      "Como la mayoría de los agentes, el negocio de Kevin dependía de clientes antiguos, referidos y portales: fuentes que funcionan, pero que no se pueden acelerar. La pregunta fue: ¿se puede usar publicidad para que los propietarios lleguen al agente en lugar de esperar una recomendación?",
    work: [
      {
        title: "Captación de propietarios",
        text: "Campañas para personas con una propiedad para vender en la zona, con foco en una conversación directa con el agente.",
      },
      {
        title: "Generación de compradores",
        text: "Campañas para propiedades concretas de la cartera, pensadas para generar consultas y visitas reales.",
      },
      {
        title: "Seguimiento comercial",
        text: "Cada consulta pasó al proceso del agente: contacto, visita, tasación y autorización de venta.",
      },
    ],
    metrics: [
      { value: "15", label: "propiedades captadas, de 13 propietarios distintos" },
      { value: "+4 / mes", label: "ritmo de captación" },
      { value: "U$S 2.041.000", label: "valor total de la cartera captada" },
      { value: "~1 mes", label: "de la captación a la venta (caso más rápido)" },
    ],
    highlights: [
      {
        tag: "Comprador desde publicidad · Doble punta",
        title: "Departamento en Cipolletti",
        text: "Los anuncios generaron 8 visitas; una terminó en compra, con captación y venta del mismo agente.",
      },
      {
        tag: "Captación desde publicidad",
        title: "Departamento en Neuquén, vendido en ~1 mes",
        text: "El propietario llegó por un anuncio de Facebook; la propiedad se captó y se vendió en alrededor de un mes.",
      },
      {
        tag: "Comprador desde publicidad",
        title: "Lote en Cipolletti",
        text: "El comprador llegó por un anuncio de Facebook. Se reservó en septiembre y se escrituró en noviembre.",
      },
    ],
    takeaway:
      "El resultado no es una venta aislada, sino una cartera que crece todos los meses.",
    docImages: [
      {
        src: "/metrics/dptojuani-metricas-kevin.png",
        alt: "Métricas de campaña inmobiliaria en Cipolletti",
        caption: "Administrador de anuncios · Campaña de compradores",
      },
      {
        src: "/metrics/j.newberydplx-kevin.png",
        alt: "Métricas adicionales de campaña inmobiliaria",
        caption: "Panel de rendimiento · Desglose por conjunto de anuncios",
      },
    ],
    footnote:
      "Las 15 propiedades son captaciones, no ventas. Valores de publicación o tasación informados por el agente.",
  },
];

const CLIENTS = [
  { name: "Mapaal Automotores", detail: "Automotor · Neuquén" },
  { name: "RE/MAX Confluencia", detail: "Kevin Pérez · Inmobiliario" },
  { name: "Potenza Motors", detail: "Automotor" },
  { name: "Piré Rayen Jeep / RAM", detail: "Luca Alberoni" },
];

const v = (id: string, client: string, title: string, format: string): ClientVideo => ({
  id,
  src: `/videos/casos/${id}.mp4`,
  poster: `/videos/casos/posters/${id}.jpg`,
  client,
  title,
  format,
});

// Videos de la carpeta "Videos - carrusel - web"
const VIDEOS: ClientVideo[] = [
  v("mapaal-review", "Mapaal", "Review Toyota Yaris 2024", "Contenido orgánico"),
  v("kevin-captacion", "RE/MAX · Kevin Pérez", "¿Buscás vender tu propiedad?", "Anuncio de captación"),
  v("luca-plan-ahorro", "Luca Alberoni", "Plan de ahorro", "Anuncio"),
  v("potenza-motors", "Potenza Motors", "Presentación de unidad", "Anuncio"),
  v("mapaal-mascota", "Mapaal", "Mascota de marca", "Video generado con IA"),
  v("kevin-captar", "RE/MAX · Kevin Pérez", "El departamento que más rápido vendimos", "Anuncio de captación"),
  v("luca-alberoni", "Luca Alberoni", "Capital inicial", "Anuncio"),
  v("kevin-perez", "RE/MAX · Kevin Pérez", "Recorrido de propiedad", "Video de propiedad"),
  v("luca-alberoni-2", "Luca Alberoni", "Tu próximo 0 km", "Anuncio"),
];

// ─── Component ───────────────────────────────────────────────────────────────

export function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [activeDocIndex, setActiveDocIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCase(null);
    };
    if (activeCase) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeCase]);

  const openModal = (c: CaseStudy) => {
    setActiveCase(c);
    setActiveDocIndex(0);
  };

  return (
    <>
      <section
        id="proyectos"
        aria-labelledby="case-studies-heading"
        className="relative pt-28 pb-8 overflow-x-clip"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Header ── */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-end mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cta-500 mb-4">
                Casos de éxito
              </p>
              <h2
                id="case-studies-heading"
                className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.05]"
              >
                Resultados medidos en <span className="text-primary-600">ventas</span>, no en likes.
              </h2>
            </div>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Negocios de Neuquén y el Alto Valle que hoy consiguen clientes de forma
              predecible. Estas son las cifras reales de su trabajo con nosotros.
            </p>
          </div>

          {/* ── Casos destacados ── */}
          <div className="space-y-8">
            {CASES.map((c, idx) => (
              <article
                key={c.id}
                className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_40px_-12px_rgba(15,23,42,0.12)] overflow-hidden"
              >
                {/* Encabezado */}
                <header className="px-6 sm:px-10 pt-8 sm:pt-10 pb-8 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 text-xs text-slate-400">
                    <span className="font-mono text-slate-300">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="h-3 w-px bg-slate-200" aria-hidden="true" />
                    <span>
                      <span className="font-semibold text-navy">{c.client}</span>
                      <span className="hidden sm:inline"> · {c.clientDetail} · {c.location}</span>
                    </span>
                    <span className="sm:ml-auto">{c.period}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-navy tracking-tight leading-tight max-w-3xl">
                    {c.headline}
                  </h3>
                </header>

                {/* Historia: desafío → estrategia → resultado */}
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  {[
                    { n: "01", label: "El desafío", text: c.challenge },
                    { n: "02", label: "Lo que hicimos", text: c.approach },
                    { n: "03", label: "El resultado", text: c.outcome },
                  ].map((s) => (
                    <div key={s.n} className="px-6 sm:px-10 py-7">
                      <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
                        <span className="text-cta-500">{s.n}</span>
                        <span className="text-slate-400">{s.label}</span>
                      </p>
                      <p className="text-[15px] text-slate-600 leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>

                {/* Métricas */}
                <dl className="grid grid-cols-2 lg:grid-cols-4 bg-slate-50/80 border-t border-slate-100">
                  {c.cardMetrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={`px-6 sm:px-10 py-6 ${i % 2 === 1 ? "border-l border-slate-200/70" : ""} ${
                        i >= 2 ? "border-t lg:border-t-0 border-slate-200/70" : ""
                      } ${i === 2 ? "lg:border-l" : ""}`}
                    >
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <span
                          className={`block text-2xl sm:text-3xl font-bold tracking-tight tabular-nums ${
                            i === 0 ? "text-cta-500" : "text-navy"
                          }`}
                        >
                          {m.value}
                        </span>
                        <span className="block text-xs text-slate-500 mt-1 leading-snug">{m.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Pie */}
                <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-10 py-5 border-t border-slate-100">
                  <p className="text-xs text-slate-400">{c.services.join("  ·  ")}</p>
                  <button
                    type="button"
                    onClick={() => openModal(c)}
                    className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-primary-600 transition-colors"
                    aria-label={`Ver caso completo de ${c.client}`}
                  >
                    Ver caso completo
                    <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* ── Hilera de clientes ── */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6">
            Clientes con los que trabajamos
          </p>
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-label="Clientes">
              {[0, 1].map((copy) =>
                [...CLIENTS, ...CLIENTS].map((cl, i) => (
                  <li
                    key={`${copy}-${i}`}
                    aria-hidden={copy === 1 || i >= CLIENTS.length}
                    className="flex items-center shrink-0 text-xs text-slate-400 whitespace-nowrap"
                  >
                    <span className="px-8">
                      <span className="font-semibold text-slate-500">{cl.name}</span>
                      <span className="mx-1.5">·</span>
                      {cl.detail}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Video carousel ── */}
      <section
        aria-labelledby="videos-heading"
        className="relative pt-20 pb-24 overflow-x-clip bg-gradient-to-b from-transparent via-slate-50 to-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cta-500 mb-4">
            Producción audiovisual
          </p>
          <h2 id="videos-heading" className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Videos que hicimos para nuestros clientes
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Anuncios, reviews y contenido orgánico grabados y editados por nuestro equipo.
            Los mismos formatos que generan las consultas de los casos de arriba.
          </p>
        </div>

        <VideoCarousel videos={VIDEOS} />

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-lg bg-cta-500 text-white font-semibold hover:bg-cta-600 shadow-sm transition-colors"
          >
            Quiero resultados así <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeCase && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setActiveCase(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCase(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="bg-navy text-white p-6 sm:p-10">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-primary-300 mb-3">
                {activeCase.industry} · {activeCase.location} · {activeCase.period}
              </p>
              <h2 id="modal-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 pr-8">
                {activeCase.headline}
              </h2>
              <p className="text-primary-100/80 text-sm">
                {activeCase.client} — {activeCase.clientDetail}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {activeCase.services.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-primary-100/80 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-10">
              {/* Contexto */}
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-3">
                  El punto de partida
                </h3>
                <p className="text-slate-600 leading-relaxed">{activeCase.context}</p>
              </div>

              {/* Trabajo */}
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">
                  Lo que hicimos
                </h3>
                <ol className="space-y-4">
                  {activeCase.work.map((w, i) => (
                    <li key={w.title} className="flex gap-4">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        <strong className="text-navy">{w.title}.</strong> {w.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Métricas */}
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">
                  Resultados
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCase.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-slate-50 p-5">
                      <span className="block text-2xl sm:text-3xl font-black text-navy tracking-tight tabular-nums">
                        {m.value}
                      </span>
                      <span className="block text-xs text-slate-500 mt-1.5 leading-snug">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destacados */}
              <div className="space-y-3">
                {activeCase.highlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-slate-200 p-5">
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-cta-500 mb-1.5">
                      {h.tag}
                    </p>
                    <p className="font-semibold text-navy mb-1">{h.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>

              {/* Conclusión */}
              <blockquote className="flex gap-3 border-l-4 border-cta-400 pl-5 py-1">
                <Quote size={18} className="shrink-0 text-cta-400 mt-1" />
                <p className="text-lg font-semibold text-navy leading-snug">{activeCase.takeaway}</p>
              </blockquote>

              {/* Evidencia */}
              {activeCase.docImages.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">
                    Evidencia
                  </h3>
                  {activeCase.docImages.length > 1 && (
                    <div className="flex gap-2 mb-4">
                      {activeCase.docImages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveDocIndex(i)}
                          className={`h-1 rounded-full transition-all duration-200 ${
                            i === activeDocIndex ? "bg-navy w-8" : "bg-slate-200 w-4 hover:bg-slate-300"
                          }`}
                          aria-label={`Ver captura ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                  <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                    <img
                      src={activeCase.docImages[activeDocIndex].src}
                      alt={activeCase.docImages[activeDocIndex].alt}
                      className="w-full h-auto max-h-[380px] object-contain object-top"
                      loading="lazy"
                    />
                  </div>
                  {activeCase.docImages[activeDocIndex].caption && (
                    <p className="mt-2.5 text-[11px] text-slate-400 text-center">
                      {activeCase.docImages[activeDocIndex].caption}
                    </p>
                  )}
                </div>
              )}

              {activeCase.footnote && (
                <p className="text-[11px] text-slate-400 leading-relaxed">{activeCase.footnote}</p>
              )}

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => setActiveCase(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cerrar
                </button>
                <Link
                  href="#contact"
                  onClick={() => setActiveCase(null)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cta-500 text-white text-sm font-semibold hover:bg-cta-600 transition-colors"
                >
                  Quiero un sistema así <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
