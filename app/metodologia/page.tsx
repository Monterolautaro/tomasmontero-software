import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Brain,
  MonitorSmartphone,
  Megaphone,
  BarChart3,
  type LucideIcon,
  ChevronRight,
} from "lucide-react";
import { metodologiaData } from "@/lib/metodologia-data";

// ─────────────────────────────────────────────
//  DATA LAYER — Agrega o modifica bloques aquí
//  sin tocar ningún JSX / CSS debajo.
// ─────────────────────────────────────────────
interface MethodologyStep {
  id: string;
  number: string;
  title: string;
  tag: string;
  concepts: string[];
  description: string;
  example?: string;
  icon: LucideIcon;
}

const methodologySteps: MethodologyStep[] = [
  {
    id: "fundamento",
    number: "01",
    title: "El Fundamento — Psicología del Comprador & Diagnóstico",
    tag: "Investigación & Estrategia",
    concepts: [
      "Investigación de mercado",
      "Mapas de empatía",
      "Arquitectura de propuesta de valor",
    ],
    description:
      "Antes de gastar un solo peso en anuncios, desciframos los sesgos de decisión de tu cliente ideal. Definimos su dolor principal, eliminamos sus objeciones y construimos una propuesta de valor irresistible.",
    icon: Brain,
  },
  {
    id: "infraestructura",
    number: "02",
    title: "La Infraestructura — Web & Conversión (CRO + Psicología Visual)",
    tag: "Desarrollo & CRO",
    concepts: [
      "CRO (Optimización de Tasa de Conversión)",
      "Jerarquía visual (T-Pattern, F-Pattern)",
      "Reducción de fricción",
    ],
    description:
      "Una web bonita que no vende es un costo, no una inversión. Aplicamos CRO y patrones de diseño visual basados en neurociencia para guiar el ojo del usuario directamente hacia la acción de compra.",
    example: "+83% de incremento en consultas optimizando la estructura del embudo comercial.",
    icon: MonitorSmartphone,
  },
  {
    id: "captacion",
    number: "03",
    title: "La Captación — SEO & Pauta Digital Calificada",
    tag: "Tráfico & Paid Media",
    concepts: [
      "SEO técnico y posicionamiento orgánico",
      "Google Ads orientado a conversión",
      "Meta Ads con segmentación avanzada",
    ],
    description:
      "Combinamos la velocidad del tráfico pagado (Ads) con la sostenibilidad y autoridad del tráfico orgánico (SEO). Captamos al usuario justo cuando tiene la necesidad activa de comprar.",
    icon: Megaphone,
  },
  {
    id: "retencion",
    number: "04",
    title: "La Retención y Cierre — Sistema Comercial & Métricas",
    tag: "Análisis & Optimización",
    concepts: [
      "Calificación de leads",
      "Seguimiento comercial estructurado",
      "Métricas clave: CAC, LTV, Tasa de Cierre",
    ],
    description:
      "Medimos lo que importa: leads calificados, reuniones agendadas y facturación. Analizamos cada etapa del embudo para eliminar cuellos de botella y maximizar tu retorno de inversión.",
    icon: BarChart3,
  },
];

// ─────────────────────────────────────────────
//  METADATA SEO
// ─────────────────────────────────────────────
export const metadata = {
  title: "Metodología de Marketing de Resultados | Delanoe Growth",
  description:
    "Conocé el sistema integral de Delanoe Growth: psicología del comprador, CRO, SEO, pauta digital y métricas de negocio. Marketing que convierte desconocidos en clientes.",
  openGraph: {
    title: "Metodología | Delanoe Growth",
    description:
      "De la psicología del comprador a la venta final. Conocé los 4 pilares técnicos y psicológicos que aplicamos en cada proyecto.",
    url: "https://delanoegrowth.com/metodologia",
    type: "website",
    images: [
      {
        url: "/branding/banner.png",
        width: 1200,
        height: 630,
        alt: "Metodología Delanoe Growth — Marketing de Resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología | Delanoe Growth",
    description:
      "De la psicología del comprador a la venta final. 4 pilares integrados para convertir más.",
    images: ["/branding/banner.png"],
  },
};

export default function MetodologiaPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 pb-24 overflow-x-clip">

        {/* ── HERO ── */}
        <section className="relative py-16 md:py-24 overflow-x-clip">
          {/* ambient blobs */}
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
            <div className="absolute top-[-10%] left-[-15%] w-[50rem] h-[50rem] bg-primary-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-slate-200/60 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-8">
              Nuestra metodología
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.08] mb-6">
              Marketing de resultados: De la psicología del comprador a la{" "}
              <span className="text-primary-600">venta final.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              No vendemos "visualizaciones" o "me gustas" sin sentido. Diseñamos e integramos los pilares
              técnicos y psicológicos que transforman desconocidos en clientes.
            </p>
          </div>
        </section>

        {/* ── METHODOLOGY STEPS ── */}
        <section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-24"
          aria-label="Pasos de la metodología"
        >
          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <article
                key={step.id}
                id={step.id}
                className="group relative rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 overflow-hidden"
              >
                {/* subtle left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl" />

                <div className="p-8 sm:p-10 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">

                    {/* Step number + icon */}
                    <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 shrink-0">
                      <span className="text-5xl md:text-6xl font-black text-slate-100 leading-none select-none tabular-nums group-hover:text-primary-100 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Tag */}
                      <span className="inline-block text-[11px] font-bold text-primary-500 uppercase tracking-[0.15em] mb-3">
                        {step.tag}
                      </span>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4 leading-snug">
                        {step.title}
                      </h2>

                      {/* Description */}
                      <p className="text-slate-600 text-base leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Concepts */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {step.concepts.map((concept) => (
                          <span
                            key={concept}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/70 group-hover:bg-primary-50 group-hover:border-primary-100 group-hover:text-primary-700 transition-colors duration-300"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>

                      {/* Optional micro-case */}
                      {step.example && (
                        <div className="flex items-start gap-3 mt-4 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100">
                          <span className="text-emerald-500 text-lg leading-none mt-0.5">↑</span>
                          <p className="text-sm text-emerald-800 font-medium leading-relaxed">
                            <span className="font-bold">Ejemplo real:</span> {step.example}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* ── THE HUB: LA CIENCIA DETRÁS DEL CRECIMIENTO ── */}
        <section className="relative py-24 bg-slate-50/50 border-y border-slate-100 mb-24 overflow-hidden">
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                La ciencia detrás del <span className="text-primary-600">crecimiento.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Fundamentos, psicología, tecnología y procesos técnicos con los que construimos sistemas de adquisición y conversión predecibles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {metodologiaData.map((item) => (
                <div key={item.slug} className="flex flex-col h-full bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="inline-block text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.summary}
                    </p>
                    
                    {/* Tools snippet */}
                    <div className="mt-auto mb-8">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Herramientas Clave
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tools.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {tool}
                          </span>
                        ))}
                        {item.tools.length > 3 && (
                          <span className="text-[11px] font-medium text-slate-400 px-1 py-0.5">
                            +{item.tools.length - 3} más
                          </span>
                        )}
                      </div>
                    </div>

                    <Link 
                      href={`/metodologia/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:text-primary-700 transition-colors mt-auto pt-4 border-t border-slate-100"
                    >
                      Leer fundamentación completa
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-navy overflow-hidden shadow-2xl border border-primary-800 p-8 sm:p-12 md:p-16 text-center text-white">
            {/* ambient glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[30rem] h-[30rem] bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-primary-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-200 text-xs font-semibold uppercase tracking-wider mb-6">
                Próximo paso
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                ¿Querés aplicar esta metodología{" "}
                <span className="text-primary-400">en tu empresa?</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Analizamos tu situación actual y diseñamos un sistema a medida para que consigas
                más clientes, más reuniones y más ventas.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/#contact">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-base font-bold shadow-lg w-full sm:w-auto"
                  >
                    Solicitar Diagnóstico CRO <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/marketingdigital">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-base font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 w-full sm:w-auto"
                  >
                    Ver planes y servicios
                  </Button>
                </Link>
              </div>

              {/* micro-copy */}
              <p className="text-xs text-slate-400 mt-6 tracking-wide">
                Sin compromiso · Respuesta en menos de 24 hs
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
