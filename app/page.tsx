import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, TrendingUp, CheckCircle2, ArrowRight, Target } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-15%] w-[55rem] h-[55rem] bg-primary-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-15%] w-[50rem] h-[50rem] bg-slate-200/70 rounded-full blur-3xl" />
          <div className="absolute top-[35%] left-[55%] w-[25rem] h-[25rem] bg-primary-50 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-32 md:py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mb-6 leading-tight">
            Digitalizá tu negocio y dejá de perder <span className="text-primary-600">clientes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            Tener un buen producto ya no alcanza si tus clientes no te encuentran en internet. Te ayudo a construir una presencia digital que transmita confianza y facilite la comunicación con tus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg h-14 px-8 shadow-md">
                Contactame <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/5492996736980?text=Hola!%20Me%20contacto%20desde%20la%20web%20para%20conocer%20los%20servicios%20de%20adquisición." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full text-lg h-14 px-8 bg-white/80 backdrop-blur-sm">
                Hablar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Value Section / El problema */}
      <section className="relative py-24 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">El problema no es solo la publicidad</h2>
            <p className="text-slate-600 text-lg">
              Muchas empresas creen que les falta presupuesto de anuncios, cuando en realidad pierden oportunidades valiosas en distintas etapas de su proceso comercial. Identificamos los puntos de fuga y los resolvemos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Consultoría Comercial", desc: "Diagnosticamos tu sistema actual y el proceso comercial para detectar fugas de prospectos.", icon: Target },
              { title: "Marketing Estratégico", desc: "Campañas dirigidas en Meta Ads y TikTok Ads para atraer leads realmente interesados.", icon: TrendingUp },
              { title: "Adquisición de Clientes", desc: "Generación constante de consultas y diseño de landing pages de alta conversión.", icon: Zap },
              { title: "Optimización y CRM", desc: "Implementación de CRM, automatizaciones y métricas claras para cerrar la venta.", icon: CheckCircle2 },
            ].map((benefit, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all duration-300 group bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <benefit.icon size={24} />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Un sistema de crecimiento estructurado</h2>
            <p className="text-slate-600 text-lg">Trabajamos bajo una metodología clara, enfocándonos en lo que impacta de forma directa en tu facturación.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[2px] bg-slate-200/80 z-0" />
            {[
              { step: 1, title: "1. Diagnóstico y Estrategia", desc: "Analizamos tus campañas actuales, redes y embudo de ventas para identificar cuellos de botella." },
              { step: 2, title: "2. Puesta en marcha", desc: "Producimos contenido enfocado en conversión, diseñamos landing pages y lanzamos las campañas pagas." },
              { step: 3, title: "3. Seguimiento y Cierre", desc: "Configuramos herramientas de seguimiento (CRM), automatizamos respuestas y medimos el retorno." },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full border-[6px] border-primary-100 text-primary-600 font-bold text-2xl flex items-center justify-center mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-navy mb-4">Casos de Éxito y Resultados</h2>
              <p className="text-slate-600 text-lg">Conocé cómo ayudamos a distintos negocios a multiplicar su flujo de consultas y optimizar sus ventas.</p>
            </div>
            <Link href="/servicios">
              <Button variant="outline" className="hidden md:inline-flex bg-white hover:bg-slate-50">Ver nuestros servicios</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agencia Automotriz",
                metric: "+83.89% Consultas",
                desc: "Llevamos la cuenta de 472 a 868 consultas mensuales reduciendo el costo por lead un 58% en Meta Ads. Además, sumamos más de 290k vistas orgánicas en TikTok vendiendo 3 autos directamente.",
                image: "/metrics/meta-ads-mapaal.png",
                badge: "Tráfico y Leads"
              },
              {
                title: "Sector Inmobiliario",
                metric: "Venta en 7 Días",
                desc: "Venta de departamento de USD 135.000 en Cipolletti con una campaña de una semana e inversión mínima. La campaña también derivó en la venta de otra unidad de USD 95k y captación de 3 propiedades.",
                image: "/metrics/dptojuani-metricas-kevin.png",
                badge: "Conversión Rápida"
              },
              {
                title: "Optimización Comercial",
                metric: "CRM e Integración",
                desc: "Rediseño de embudos comerciales y automatización de leads de redes sociales. Evitamos la pérdida de clientes por falta de velocidad de respuesta mediante calificación de prospectos.",
                image: "/metrics/j.newberydplx-kevin.png",
                badge: "Eficiencia de Ventas"
              }
            ].map((caseStudy, i) => (
              <Card key={i} className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-primary-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {caseStudy.badge}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="text-primary-600 font-extrabold text-lg mb-1">{caseStudy.metric}</div>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed">{caseStudy.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 md:hidden flex justify-center">
            <Link href="/servicios" className="w-full">
              <Button variant="outline" className="w-full bg-white">Ver nuestros servicios</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-primary-100 p-0 overflow-hidden md:p-3 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
            <div className="bg-navy p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Hablemos de tu negocio</h2>
              <p className="text-slate-300 mb-10 leading-relaxed text-lg">
                Escribinos detallando qué estás vendiendo y cuál es tu proceso actual. Analizamos tu caso y diseñamos la mejor estrategia para escalar tu adquisición.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/5492996736980?text=Hola!%20Me%20interesa%20realizar%20un%20diagnóstico%20de%20adquisición%20para%20mi%20negocio." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-max hover:text-primary-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </div>
                  <span className="font-medium text-lg">Chatear por WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </Card>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
