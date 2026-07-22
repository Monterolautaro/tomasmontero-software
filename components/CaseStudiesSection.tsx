"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

interface DocImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LinkedInVerification {
  screenshot: string;
  alt: string;
  note: string;
}

interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  heroMetric: string;
  heroMetricLabel: string;
  summary: string;
  // Modal fields
  context: string;
  challenge: string;
  metrics: Metric[];
  docImages: DocImage[];
  linkedInVerification?: LinkedInVerification;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CASES: CaseStudy[] = [
  {
    id: "mapaal-automotriz",
    slug: "automotriz-meta-ads",
    client: "Mapaal Automotores",
    industry: "Sector Automotriz",
    services: ["Meta Ads", "Optimización de Embudo", "Seguimiento de Conversiones"],
    heroMetric: "+83%",
    heroMetricLabel: "Incremento en consultas",
    summary:
      "Rediseño del embudo de captación en Meta Ads. Incremento de +83.89% en consultas durante el primer período de campaña optimizada.",
    context:
      "Concesionaria automotriz con presencia local buscaba incrementar el volumen de prospectos calificados mediante publicidad en redes sociales, sin escalar el presupuesto publicitario.",
    challenge:
      "Alto costo por consulta y segmentación deficiente generaban tráfico de baja intención. El formulario de contacto presentaba fricciones que reducían la tasa de conversión.",
    metrics: [
      { value: "+83.89%", label: "Consultas recibidas", sublabel: "Variación período vs. período anterior" },
      { value: "De 472 → 868", label: "Conversaciones iniciadas", sublabel: "En 30 días de campaña" },
      { value: "−58%", label: "Costo por consulta", sublabel: "De $1.374 a $573 ARS" },
    ],
    docImages: [
      {
        src: "/metrics/meta-ads-mapaal.png",
        alt: "Panel de Meta Ads — Mapaal Automotores — Métricas de rendimiento",
        caption: "Administrador de Anuncios · Métricas de rendimiento · Período comparado",
      },
      {
        src: "/metrics/metaads-mapaal.png",
        alt: "Detalle de costos — Mapaal Automotores",
        caption: "Desglose de costo por resultado · Conjunto de anuncios activos",
      },
    ],
  },
  {
    id: "mapaal-organico",
    slug: "automotriz-contenido-organico",
    client: "Mapaal Automotores",
    industry: "Sector Automotriz — Alcance Orgánico",
    services: ["Contenido Estratégico", "TikTok & Reels", "Distribución Orgánica"],
    heroMetric: "400K+",
    heroMetricLabel: "Reproducciones orgánicas",
    summary:
      "Estrategia de contenido en video sin inversión publicitaria. Más de 400.000 reproducciones acumuladas y 3 vehículos vendidos de forma directa mediante redes sociales.",
    context:
      "Con el mismo cliente automotriz, se ejecutó una estrategia complementaria de contenido orgánico en TikTok e Instagram Reels para generar notoriedad de marca sin costo adicional en pauta.",
    challenge:
      "La dependencia exclusiva de la publicidad pagada generaba un costo de adquisición elevado. El objetivo era construir una audiencia propia y generar ventas directas desde el canal orgánico.",
    metrics: [
      { value: "400.000+", label: "Reproducciones acumuladas", sublabel: "TikTok e Instagram Reels" },
      { value: "3", label: "Vehículos vendidos", sublabel: "De forma directa mediante redes sociales" },
      { value: "$0", label: "Inversión publicitaria", sublabel: "Para este volumen de alcance" },
    ],
    docImages: [
      {
        src: "/metrics/metricas-tiktok-mapaal.png",
        alt: "Métricas de TikTok — Mapaal Automotores — Alcance orgánico",
        caption: "Panel de analítica · TikTok Creator Studio · Alcance orgánico acumulado",
      },
    ],
  },
  {
    id: "sector-inmobiliario",
    slug: "inmobiliario-cipolletti",
    client: "Kevin Perez - Remax",
    industry: "Sector Inmobiliario",
    services: ["Meta Ads", "Funnel de Conversión", "Captación de Propiedades"],
    heroMetric: "5",
    heroMetricLabel: "Propiedades captadas",
    summary:
      "Con campañas de publicidad logramos agendar visitas calificadas de forma predecible, además de conseguir propiedades para captar",
    context:
      "Agente inmobiliario que entendía desde el principio la importancia de publicidad pautada para movilizar su cartera de propiedades en la ciudad de Cipolletti.",
    challenge:
      "El desafío fue generar un flujo constante de prospectos calificados con intención de compra, reduciendo la cantidad de leads no calificados y aumentando la cartera de propiedades para la venta.",
    metrics: [
      { value: "5", label: "Nuevas propiedades captadas", sublabel: "Referidos directos del proceso" },
      { value: "USD 95K", label: "Venta cruzada adicional", sublabel: "Segunda propiedad del mismo propietario" },
    ],
    docImages: [
      {
        src: "/metrics/dptojuani-metricas-kevin.png",
        alt: "Métricas de campaña — Sector Inmobiliario Cipolletti",
        caption: "Administrador de Anuncios · Resultados de campaña inmobiliaria",
      },
      {
        src: "/metrics/j.newberydplx-kevin.png",
        alt: "Métricas adicionales — Campaña inmobiliaria",
        caption: "Panel de rendimiento · Desglose por conjunto de anuncios",
      },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [docExpanded, setDocExpanded] = useState(false);
  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and handle keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
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
    setDocExpanded(false);
    setActiveDocIndex(0);
  };

  const closeModal = () => setActiveCase(null);

  return (
    <>
      <section
        id="proyectos"
        aria-labelledby="case-studies-heading"
        className="relative pt-24 overflow-x-clip"
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
              Trabajo seleccionado
            </p>
            <h1
              id="case-studies-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.05] max-w-2xl"
            >
              Nuestro
              <br />
              <span className="text-primary-600">Trabajo</span>
            </h1>
            <p className="mt-6 text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed">
              Estos son algunos de los trabajos que hemos realizado en Neuquén capital y Cipolletti.
            </p>
          </div>

          {/* ── Cases List ── */}
          <div className="space-y-0">
            {CASES.map((c, idx) => (
              <article
                key={c.id}
                className={`group grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6 lg:gap-16 py-10 border-t border-slate-100 transition-all duration-300 ${
                  idx === CASES.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Left: content */}
                <div>
                  {/* Industry label */}
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-3">
                    {c.industry}
                  </p>

                  {/* Client name as H2 */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 group-hover:text-primary-600 transition-colors duration-200">
                    {c.client}
                  </h2>

                  {/* Service chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide bg-slate-100 text-slate-500 border border-slate-200/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
                    {c.summary}
                  </p>
                </div>

                {/* Right: hero metric + CTA */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-end gap-5 lg:gap-4">
                  {/* Metric display */}
                  <div className="text-right">
                    <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-none group-hover:text-primary-600 transition-colors duration-200 tabular-nums">
                      {c.heroMetric}
                    </span>
                    <span className="block text-xs font-medium text-slate-400 mt-1 max-w-[12rem] text-right">
                      {c.heroMetricLabel}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => openModal(c)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold tracking-wide hover:border-navy hover:text-navy hover:bg-slate-50 transition-all duration-200 whitespace-nowrap shrink-0"
                    aria-label={`Ver detalle ${c.client}`}
                  >
                    Ver detalle
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal / Lightbox ── */}
      {activeCase && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 backdrop-blur-sm p-4 sm:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl border border-slate-100/80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Modal inner scroll */}
            <div className="p-6 sm:p-10">

              {/* ── A. Contexto & Servicios ── */}
              <div className="mb-10">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">
                  {activeCase.industry}
                </p>
                <h2
                  id="modal-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-2"
                >
                  {activeCase.client}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeCase.services.map((s) => (
                    <span
                      key={s}
                      className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-500 border border-slate-200/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <h3 className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-3">
                  Contexto
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {activeCase.context}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-10" />

              {/* ── B. Métricas de Impacto ── */}
              <div className="mb-10">
                <h3 className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-6">
                  Métricas de impacto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {activeCase.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="group/metric border border-slate-100 rounded-2xl p-5 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-200"
                    >
                      <span className="block text-3xl sm:text-4xl font-black text-navy tracking-tight leading-none mb-2 tabular-nums">
                        {m.value}
                      </span>
                      <span className="block text-xs font-semibold text-slate-700 mb-0.5 leading-snug">
                        {m.label}
                      </span>
                      {m.sublabel && (
                        <span className="block text-[11px] text-slate-400 leading-snug">
                          {m.sublabel}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-8" />

              {/* ── C. Ver más ── */}
              <div className="mb-8">
                <button
                  type="button"
                  onClick={() => setDocExpanded((v) => !v)}
                  className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 hover:text-navy transition-colors mb-4 group/doc"
                >
                  <span>Ver más</span>
                  <span
                    className={`inline-flex w-4 h-4 items-center justify-center rounded-full bg-slate-100 transition-transform duration-200 ${
                      docExpanded ? "rotate-90" : ""
                    }`}
                  >
                    <ArrowRight size={9} />
                  </span>
                </button>

                {docExpanded && (
                  <div className="animate-fadeIn">
                    {/* Carousel navigation (if multiple images) */}
                    {activeCase.docImages.length > 1 && (
                      <div className="flex gap-2 mb-4">
                        {activeCase.docImages.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveDocIndex(i)}
                            className={`h-1 rounded-full transition-all duration-200 ${
                              i === activeDocIndex
                                ? "bg-navy w-8"
                                : "bg-slate-200 w-4 hover:bg-slate-300"
                            }`}
                            aria-label={`Ver imagen ${i + 1} de documentación`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Doc image */}
                    <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                      <img
                        src={activeCase.docImages[activeDocIndex].src}
                        alt={activeCase.docImages[activeDocIndex].alt}
                        className="w-full h-auto max-h-[380px] object-contain object-top"
                        loading="lazy"
                      />
                    </div>
                    {activeCase.docImages[activeDocIndex].caption && (
                      <p className="mt-2.5 text-[11px] text-slate-400 text-center leading-relaxed">
                        {activeCase.docImages[activeDocIndex].caption}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ── D. Verificación Externa (LinkedIn) ── */}
              {activeCase.linkedInVerification && (
                <>
                  <div className="h-px bg-slate-100 mb-8" />
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">
                      Verificación pública
                    </p>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      {/* LinkedIn icon */}
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#0077B5] flex items-center justify-center">
                        <svg
                          className="w-4 h-4 fill-white"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z" />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {activeCase.linkedInVerification.note}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Modal footer */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-xl bg-navy text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
