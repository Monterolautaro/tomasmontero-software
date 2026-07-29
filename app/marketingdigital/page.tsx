import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, HelpCircle, ShieldCheck, Check, Minus } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQSection } from "@/components/FAQSection";

export const metadata = {
  title: "Marketing Digital para Empresas y Profesionales | Delanoe Growth",
  description:
    "Implementamos un sistema de adquisición de clientes adaptado a cada negocio. Conocé nuestros dos niveles de acompañamiento: Plan Crecimiento y Plan Full.",
  openGraph: {
    title: "Marketing Digital para Empresas y Profesionales | Delanoe Growth",
    description:
      "Implementamos un sistema de adquisición de clientes adaptado a cada negocio. Plan Crecimiento y Plan Full en Neuquén.",
    url: "https://delanoegrowth.com/marketingdigital",
    type: "website",
    images: [
      {
        url: "/branding/banner.png",
        width: 1200,
        height: 630,
        alt: "Planes de Marketing Digital — Delanoe Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Digital para Empresas | Delanoe Growth",
    description:
      "Plan Crecimiento y Plan Full: sistemas de adquisición de clientes con Google Ads, Meta Ads y landing pages.",
    images: ["/branding/banner.png"],
  },
};

export default function MarketingDigitalPage() {
  const commonFeatures = [
    "Diagnóstico comercial inicial",
    "Investigación de competidores",
    "Meta Ads o Google Ads",
    "Landing Page con SEO optimizado",
    "Creativos para anuncios",
    "Guiones para anuncios",
    "Optimización continua de campañas",
    "Reportes mensuales",
    "Reuniones de seguimiento",
  ];

  const fullExclusiveFeatures = [
    "Estrategia de contenido orgánico",
    "Guiones para redes sociales",
    "Edición de Reels y TikToks",
    "Gestión de redes sociales",
    "Optimización del contenido",
    "Construcción de marca",
    "Calendario de publicaciones",
  ];

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-24 min-h-screen bg-slate-50/60 overflow-x-clip">
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-15%] w-[50rem] h-[50rem] bg-primary-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-slate-200/60 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy tracking-tight mb-4 leading-tight">
              Descubrí cómo podemos ayudarte
            </h1>
            
            <p className="text-xl sm:text-2xl font-bold text-primary-600 mb-6">
              Marketing Digital para Empresas y Profesionales
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Implementamos un sistema de adquisición de clientes adaptado a cada negocio. Elegí el nivel de acompañamiento que mejor se adapte a tus objetivos de crecimiento.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* Card Plan Crecimiento */}
            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    Recomendado para comenzar
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Publicidad + Landings</span>
                </div>

                <h2 className="text-3xl font-extrabold text-navy mb-3">Plan Crecimiento</h2>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 min-h-[4.5rem]">
                  Implementamos nuestro sistema de adquisición de clientes enfocado en campañas publicitarias para atraer prospectos calificados y maximizar el retorno de la inversión.
                </p>

                <div className="mb-8">
                  <a
                    href="https://wa.me/5492996736980?text=Hola!%20Me%20interesa%20aplicar%20al%20Plan%20Crecimiento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full h-14 text-base font-semibold border-primary-800 text-primary-900 hover:bg-primary-50 shadow-sm"
                    >
                      Aplicar al Plan Crecimiento
                    </Button>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Incluido en Plan Crecimiento
                  </h3>

                  <ul className="space-y-3.5 mb-8">
                    {commonFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Estrategia Orgánica
                    </h4>
                    <ul className="space-y-2.5">
                      {fullExclusiveFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-400 text-xs">
                          <Minus className="w-4 h-4 shrink-0 text-slate-300" />
                          <span className="line-through opacity-70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Plan Full */}
            <div className="relative bg-white rounded-3xl border-2 border-primary-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-8 sm:p-10 ring-4 ring-primary-500/10">
              <div>
                <div className="flex items-right gap-4 mb-6">
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">Ads + Redes + Marca</span>
                </div>

                <h2 className="text-3xl font-extrabold text-navy mb-3">Plan Full</h2>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 min-h-[4.5rem]">
                  Además del sistema completo de publicidad, desarrollamos una estrategia de contenido orgánico para aumentar autoridad, confianza y generar un crecimiento sostenible.
                </p>

                <div className="mb-8">
                  <a
                    href="https://wa.me/5492996736980?text=Hola!%20Me%20interesa%20aplicar%20al%20Plan%20Full."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full h-14 text-base font-bold bg-cta-500 hover:bg-cta-600 text-white shadow-md"
                    >
                      Aplicar al Plan Full <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-4">
                    Todo lo del Plan Crecimiento
                  </h3>

                  <ul className="space-y-3.5 mb-8">
                    {commonFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary-50/60 rounded-2xl p-5 border border-primary-100/80">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-primary-600" />
                      <h4 className="text-xs font-bold text-primary-900 uppercase tracking-wider">
                        Exclusivo del Plan Full (Orgánico & Marca)
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {fullExclusiveFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-primary-950 text-sm font-semibold">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Middle Section: ¿No sabés cuál es el plan ideal? */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <Card className="p-8 sm:p-12 text-center bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/40 rounded-full blur-2xl -z-0" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <HelpCircle className="w-7 h-7" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                ¿No sabés cuál es el plan ideal para tu negocio?
              </h2>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
                Analizamos tu situación actual, tus objetivos y tu presupuesto para recomendarte el plan más adecuado. No buscamos venderte el plan más caro, sino el que realmente genere mejores resultados para tu negocio.
              </p>

              <a
                href="https://wa.me/5492996736980?text=Hola!%20Quisiera%20solicitar%20un%20diagnóstico%20para%20saber%20qué%20plan%20se%20adapta%20mejor%20a%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-semibold shadow-md">
                  Solicitar diagnóstico
                </Button>
              </a>
            </div>
          </Card>
        </section>

        {/* Bottom Section: Postulación / ¿Estás listo para comenzar? */}
        <section id="diagnostico" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-m-24 mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              ¿Estás listo para comenzar?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Completá tus datos a continuación y analizaremos la factibilidad de tu caso para coordinar una reunión de inicio.
            </p>
          </div>

          <Card className="p-8 sm:p-10 shadow-xl border-slate-200 bg-white">
            <WaitlistForm />
          </Card>
        </section>

        {/* FAQ Section sobre Planes */}
        <FAQSection
          title="Preguntas Frecuentes sobre nuestros Planes"
          subtitle="Resolvemos tus dudas sobre el Plan Crecimiento, Plan Full y nuestra metodología de trabajo."
          items={[
            {
              question: "¿Qué diferencia hay entre el Plan Crecimiento y el Plan Full?",
              answer: "El Plan Crecimiento se enfoca en adquisición paga (Meta/Google Ads + Landing Page de alta conversión) para captar clientes de forma inmediata. El Plan Full incluye todo lo del Plan Crecimiento y suma una estrategia completa de contenido orgánico (Reels/TikToks, guiones, gestión de redes y construcción de marca) para maximizar confianza y autoridad a largo plazo.",
            },
            {
              question: "¿Se necesita una inversión en publicidad?",
              answer: "Sí. El presupuesto publicitario es independiente de nuestros honorarios y se invierte directamente en las plataformas como Google Ads o Meta Ads.",
            },
            {
              question: "¿Cuál de los dos planes es el recomendable para comenzar?",
              answer: "Si querés conseguir clientes de forma más rápida mediante publicidad paga, el Plan Crecimiento es la mejor opción para empezar. Si tu objetivo es dominar tu sector combinando publicidad con presencia activa de marca en redes sociales, el Plan Full es la solución integral perfecta a largo plazo.",
            },
            {
              question: "¿La inversión en anuncios publicitarios está incluida en el precio del plan?",
              answer: "No. El costo del plan cubre la estrategia, diseño, desarrollo de landing page, redacción de copys, edición de anuncios y optimización continua. La pauta publicitaria la abonás directamente a Meta o Google desde tu propia cuenta.",
            },
            {
              question: "¿Puedo cambiar de plan más adelante?",
              answer: "Sí, podés comenzar con el Plan Crecimiento y migrar al Plan Full cuando desees incorporar la producción de contenido orgánico y la gestión de redes sociales.",
            },
            {
              question: "¿Los planes tienen contrato de permanencia obligatoria?",
              answer: "No requerimos contratos de permanencia a largo plazo. Trabajamos con renovaciones mensuales basadas en el rendimiento y los resultados generados para tu negocio.",
            },
          ]}
          className="bg-transparent border-t border-slate-200/60"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
