import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Users, TrendingUp, Sparkles, Target } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "Servicios | Delanoe Growth",
  description: "Servicios de adquisición de clientes, tráfico pago (Meta/TikTok Ads), gestión de redes y optimización de procesos comerciales.",
};

export default function ServiciosPage() {
  const services = [
    {
      title: "Consultoría Comercial",
      desc: "Diagnóstico completo del proceso de adquisición y ventas de tu negocio.",
      price: "Diagnóstico Inicial",
      icon: Target,
      badge: "Auditoría",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
      features: [
        "Auditoría de campañas de anuncios",
        "Análisis de embudo de ventas actual",
        "Detección de cuellos de botella",
        "Revisión de la velocidad de respuesta",
        "Recomendaciones concretas priorizadas",
        "Reunión de diagnóstico individual",
      ],
      whatsappMsg: "Hola! Me interesa el servicio de Consultoría Comercial.",
      cta: "Solicitar Diagnóstico"
    },
    {
      title: "Gestión de Redes & Orgánico",
      desc: "Construcción de marca y confianza para generar un flujo de consultas orgánicas.",
      price: "Posicionamiento",
      icon: Users,
      badge: "Marca",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      features: [
        "Estrategia mensual de contenidos",
        "Guiones detallados para videos",
        "Planificación y optimización de perfiles",
        "Edición de videos cortos (Reels/TikTok)",
        "Análisis mensual de métricas orgánicas",
        "Alineación con tu estrategia comercial",
      ],
      whatsappMsg: "Hola! Me interesa el servicio de Gestión de Redes y Crecimiento Orgánico.",
      cta: "Quiero más visibilidad"
    },
    {
      title: "Adquisición de Clientes",
      desc: "Tráfico pago y landings de alta conversión para captar leads calificados.",
      price: "Tráfico + Contenido",
      icon: TrendingUp,
      badge: "Recomendado",
      badgeColor: "bg-cta-50 text-cta-600 border-cta-400/30",
      isFeatured: true,
      features: [
        "Campañas pagas (Meta Ads & TikTok Ads)",
        "Diseño y desarrollo de Landing Pages",
        "Planificación de anuncios publicitarios",
        "Guiones y copys para máxima conversión",
        "Edición avanzada de videos de anuncios",
        "Optimización constante de costos de pauta",
      ],
      whatsappMsg: "Hola! Me interesa el servicio de Adquisición de Clientes (Ads + Landing).",
      cta: "Escalar mi adquisición"
    },
    {
      title: "Growth Partner",
      desc: "Sistema integral de adquisición, CRM, automatizaciones y optimización comercial.",
      price: "Socio de Crecimiento",
      icon: Sparkles,
      badge: "Todo en Uno",
      badgeColor: "bg-primary-50 text-primary-700 border-primary-200",
      features: [
        "Sistema completo de adquisición (Ads + Orgánico)",
        "Implementación e integración de CRM",
        "Automatizaciones de contacto y WhatsApp",
        "Calificación automatizada de prospectos",
        "Definición y seguimiento de KPIs internos",
        "Capacitación para tu equipo de ventas",
      ],
      whatsappMsg: "Hola! Me interesa el servicio de Growth Partner (Sistema Completo).",
      cta: "Aplicar como partner"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 min-h-screen bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight mb-6">
              Servicios de Adquisición y Crecimiento Comercial
            </h1>
            <p className="text-lg text-slate-600">
              Elegí el nivel de acompañamiento que tu negocio necesita para multiplicar sus consultas y estructurar su proceso de venta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl items-stretch">
            {services.map((service, i) => (
              <Card 
                key={i} 
                className={`flex flex-col relative overflow-hidden transition-all duration-300 bg-white ${
                  service.isFeatured 
                    ? "border-cta-400 shadow-xl md:-translate-y-2 ring-2 ring-cta-400/20" 
                    : "hover:border-primary-200 hover:shadow-md"
                }`}
              >
                {service.isFeatured && (
                  <div className="absolute top-0 left-0 w-full h-2 bg-cta-500" />
                )}
                
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border ${service.badgeColor}`}>
                  {service.badge}
                </div>

                <CardHeader className="pt-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                    service.isFeatured ? "bg-cta-50 text-cta-600" : "bg-primary-50 text-primary-600"
                  }`}>
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm h-14 leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow pb-8">
                  <div className="mb-6">
                    <span className="text-lg font-bold text-primary-900">{service.price}</span>
                  </div>
                  <ul className="space-y-3.5">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-600 text-sm leading-tight">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${
                          service.isFeatured ? "text-cta-500" : "text-primary-600"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2">
                  <a
                    href={`https://wa.me/5492996736980?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      size="lg" 
                      className={`w-full text-base font-semibold shadow-sm transition-all duration-200 ${
                        service.isFeatured 
                          ? "bg-cta-500 hover:bg-cta-600 text-white" 
                          : "bg-primary-900 hover:bg-primary-800 text-white"
                      }`}
                    >
                      {service.cta}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Waitlist Form */}
          <div id="waitlist" className="mt-32 w-full max-w-2xl scroll-m-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Postulá tu Negocio</h2>
              <p className="text-slate-600 leading-relaxed">
                Trabajamos con capacidad limitada para asegurar resultados en cada cliente. Si estás interesado en el servicio de Adquisición o Growth Partner, dejanos tus datos y nos pondremos en contacto para evaluar la viabilidad de tu caso.
              </p>
            </div>
            <Card className="p-8 shadow-lg border-primary-100 bg-white">
              <WaitlistForm />
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
