"use client";

import { useState, useEffect } from "react";
import { Eye, X, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface EvidenceItem {
  id: string;
  number?: string;
  isCommentCard?: boolean;
  commentBadge?: string;
  commentAuthor?: string;
  commentRole?: string;
  commentText?: string;
  title: string;
  description: string;
  evidenceImage: string;
  modalTag: string;
  modalTitle: string;
  modalContext: string;
  modalResults: string[];
}

const RESULTS_DATA: EvidenceItem[] = [
  {
    id: "card-1",
    number: "+83%",
    title: "Consultas generadas",
    description: "Incremento de consultas durante el primer mes mediante campañas optimizadas de Meta Ads.",
    evidenceImage: "/metrics/meta-ads-mapaal.png",
    modalTag: "Meta Ads Manager — Evidencia Real",
    modalTitle: "+83.89% en Generación de Consultas",
    modalContext: "Optimizamos el embudo de captación en Meta Ads para una agencia automotriz. Se rediseñaron los creativos, se ajustó la segmentación de audiencia y se calificaron los prospectos automáticamente.",
    modalResults: [
      "De 472 a 868 conversaciones iniciadas en 30 días",
      "Costo por lead reducido a menos de la mitad",
      "Retorno positivo desde la primera semana de campaña"
    ]
  },
  {
    id: "card-2",
    number: "-58%",
    title: "Costo por consulta",
    description: "Reducción significativa del costo por resultado manteniendo el volumen de leads.",
    evidenceImage: "/metrics/metaads-mapaal.png",
    modalTag: "Métricas de Anuncios — Optimización CPL",
    modalTitle: "Reducción del 58% en el Costo por Lead",
    modalContext: "Reestructuración técnica del Administrador de Anuncios. Se eliminó la fricción en el formulario y se configuró seguimiento avanzado de conversiones para abaratar el costo por prospecto.",
    modalResults: [
      "Costo por consulta reducido de $1.374 a $573 ARS",
      "Mismo presupuesto publicitario, casi el doble de leads",
      "Tráfico calificado directo a canal de ventas"
    ]
  },
  {
    id: "card-3",
    number: "400.000+",
    title: "Visualizaciones orgánicas",
    description: "Contenido orgánico distribuido en redes sociales con alcance masivo.",
    evidenceImage: "/metrics/metricas-tiktok-mapaal.png",
    modalTag: "TikTok & Organic Reach — Evidencia Real",
    modalTitle: "+400K Reproducciones Orgánicas",
    modalContext: "Estrategia de contenido en video enfocado en mostrar vehículos en formato orgánico para TikTok e Instagram Reels sin inversión publicitaria.",
    modalResults: [
      "Más de 290.000 a 400.000+ visualizaciones acumuladas",
      "3 vehículos vendidos 100% de forma directa por redes",
      "Cero costo adicional en pauta para este volumen de vistas"
    ]
  },
  {
    id: "card-4",
    isCommentCard: true,
    commentBadge: "Comentario real publicado en LinkedIn",
    commentAuthor: "Cliente Verificado",
    commentRole: "Sector Inmobiliario & Comercial",
    commentText: "Excelente trabajo en la estrategia. Logramos vender el departamento de USD 135k en solo 7 días y generamos prospectos continuos para el resto de las propiedades.",
    title: "Comentario del cliente",
    description: "Feedback público en LinkedIn tras la implementación del sistema comercial.",
    evidenceImage: "/metrics/dptojuani-metricas-kevin.png",
    modalTag: "LinkedIn & Caso Real — Sector Inmobiliario",
    modalTitle: "Venta de Inmueble en 7 Días & Captación",
    modalContext: "Campaña de conversión rápida para el sector inmobiliario en Cipolletti. Implementación de embudo directo y seguimiento ágil.",
    modalResults: [
      "Venta de departamento de USD 135.000 en 7 días",
      "Venta cruzada adicional de propiedad de USD 95.000",
      "Captación directa de 3 nuevas propiedades de clientes"
    ]
  }
];

export function ResultsSection() {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section className="relative py-24 overflow-x-clip bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
      {/* Background glowing lights */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-15%] w-[45rem] h-[45rem] bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[40rem] h-[40rem] bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-primary-600" />
            Evidencia & Métricas Comprobadas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Estos son algunos resultados que obtuvimos.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Cada resultado mostrado corresponde a proyectos reales realizados para clientes. Siempre priorizamos mostrar evidencia antes que promesas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-md group relative"
            >
              <div>
                {/* Number or LinkedIn comment card */}
                {item.isCommentCard ? (
                  <div className="mb-6">
                    {/* LinkedIn Tag */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-medium mb-3">
                      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z"/>
                      </svg>
                      <span>{item.commentBadge}</span>
                    </div>
                    {/* Authentic LinkedIn comment visual box */}
                    <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 text-xs text-slate-700 font-sans shadow-inner leading-relaxed relative">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                          CV
                        </div>
                        <div className="truncate">
                          <span className="font-semibold text-navy block text-[11px] leading-tight truncate">{item.commentAuthor}</span>
                          <span className="text-[10px] text-slate-400 block leading-tight truncate">{item.commentRole}</span>
                        </div>
                      </div>
                      <p className="line-clamp-3 text-slate-600 italic text-[11px]">
                        &quot;{item.commentText}&quot;
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-navy tracking-tight block group-hover:text-primary-600 transition-colors">
                      {item.number}
                    </span>
                  </div>
                )}

                {/* Card Title & Description */}
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Evidence Trigger Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all duration-200"
                >
                  <Eye size={15} />
                  <span>Ver evidencia</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/70 backdrop-blur-md transition-all animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white border border-slate-100 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles size={13} className="text-primary-600" />
                {selectedItem.modalTag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                {selectedItem.modalTitle}
              </h3>
            </div>

            {/* Evidence Image Preview Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-6 shadow-inner">
              <img
                src={selectedItem.evidenceImage}
                alt={selectedItem.modalTitle}
                className="w-full h-auto max-h-[420px] object-contain object-top bg-slate-900/5"
              />
            </div>

            {/* Context & Results Description */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Contexto del proyecto
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedItem.modalContext}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Resultados comprobados
                </h4>
                <ul className="space-y-2">
                  {selectedItem.modalResults.map((res, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-navy font-medium">
                      <CheckCircle2 size={18} className="text-primary-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 rounded-xl bg-navy text-white text-xs font-semibold hover:bg-primary-700 transition-colors"
              >
                Cerrar evidencia
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
