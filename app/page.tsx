import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, TrendingUp, CheckCircle2, ArrowRight, Target, Search, Layers, Rocket, BarChart3, TrendingUp as ScaleUp } from "lucide-react";
import { ScrollDown } from "@/components/ScrollDown";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FAQSection } from "@/components/FAQSection";

export const metadata = {
  title: "Agencia de Marketing Digital | Delanoe Growth",
  description:
    "Ayudamos a empresas y profesionales a conseguir más clientes mediante Google Ads, Meta Ads, contenido orgánico y landing pages optimizadas para convertir visitas en ventas.",
  openGraph: {
    title: "Marketing Digital Neuquén | Delanoe Growth",
    description:
      "Conseguí más clientes y convertí más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.",
    url: "https://tomasmontero.com",
    type: "website",
    images: [
      {
        url: "/branding/banner.png",
        width: 1200,
        height: 630,
        alt: "Delanoe Growth — Agencia de Marketing Digital en Neuquén",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delanoe Growth | Adquisición de Clientes",
    description:
      "Conseguí más clientes y convertí más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.",
    images: ["/branding/banner.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-x-clip">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-15%] w-[55rem] h-[55rem] bg-primary-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-15%] w-[50rem] h-[50rem] bg-slate-200/70 rounded-full blur-3xl" />
          <div className="absolute top-[35%] left-[55%] w-[25rem] h-[25rem] bg-primary-50 rounded-full blur-2xl" />
        </div>
 
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-32 pb-16 md:pt-40 md:pb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mb-6 leading-tight">
            Te ayudamos a aumentar tu flujo de <span className="text-primary-600">clientes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            Tener un buen producto o servicio ya no alcanza si tus clientes no te encuentran en internet. Te ayudamos a construir una presencia digital que transmita confianza y facilite la comunicación con ellos.
          </p>
          <div className="align: flex; flex-direction: column">
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
            <div className="flex items-center justify-center gap-2">
              <ScrollDown targetId="value" className="mt-8" />
            </div>
          </div>
        
        </div>
      </section>
 
      {/* Value Section / El problema */}
      <section id="value" className="relative pt-12 pb-6 overflow-x-clip bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="/mirando el celular.png" 
                alt="Persona mirando el celular"
                className="w-full max-w-md h-auto object-cover shadow-xl rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-none rounded-br-none border border-slate-100/50"
              />
            </div>
            {/* Right Column: Text */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                ¿Por qué tu negocio no consigue más clientes?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                El mayor problema es no invertir en publicidad en una era donde las personas pasan en promedio 6 horas al día usando dispositivos móviles, no aparecer ahí es como poner un local fisico en una calle sin tránsito; Nadie te ve y por lo tanto nadie te compra. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative pt-6 overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Te ayudamos a solucionarlo implementando un sistema de adquisición de clientes</h2>
            <p className="text-slate-600 text-lg">Trabajamos con procesos definidos, adaptando nuestra metodología de 5 pasos a tu negocio para obtener los mejores resultados llegando a tu público objetivo</p>
          </div>

          {/* 5-Step Visual Timeline */}
          <div className="relative">
            {/* Horizontal connector line (desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                { step: 1, title: "Diagnóstico", desc: "Analizamos tu negocio, competencia y cliente ideal para diseñar una estrategia.", icon: Search },
                { step: 2, title: "Construcción", desc: "Creamos landing pages, creativos publicitarios y presencia orgánica en redes.", icon: Layers },
                { step: 3, title: "Activación", desc: "Lanzamos campañas en Google Ads o Meta Ads atrayendo clientes calificados.", icon: Rocket },
                { step: 4, title: "Optimización", desc: "Analizamos las métricas y estadisticas para escalar lo que mejor funciona y eliminar lo que no.", icon: BarChart3 },
                { step: 5, title: "Escalado", desc: "Incrementamos volumen ampliando campañas, creativos y presupuesto de forma controlada.", icon: TrendingUp },
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="w-20 h-20 bg-white rounded-2xl border-2 border-primary-100 text-primary-600 flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md group-hover:border-primary-300 group-hover:scale-105 transition-all duration-300">
                    <item.icon size={28} strokeWidth={1.8} />
                  </div>
                  {/* Step number badge */}
                  <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-1">Paso {item.step}</span>
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm max-w-[14rem]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      {/* Contact Section */}
      <section id="contact" className="relative py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-clip">
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

      {/* Business FAQ Section */}
      <FAQSection
        title="Preguntas Frecuentes sobre la Agencia"
        subtitle="Conocé más sobre nuestra metodología, enfoque técnico y forma de trabajo."
        items={[
          {
            question: "¿Qué es Delanoe Growth y a qué se dedica?",
            answer: "Somos una agencia de marketing digital y adquisición de clientes radicada en Neuquén Capital. Combinamos desarrollo de software, tecnologías emergentes como generación de imagenes y video con IA, publicidad estratégica (Google Ads y Meta Ads) y contenido orgánico para ayudar a empresas y profesionales a aumentar sus ventas, a través de nuestro sistema de 5 pasos.",
          },
          {
            question: "¿Con qué tipo de empresas o profesionales trabajan?",
            answer: "Trabajamos con pymes, prestadores de servicios, profesionales e instituciones que necesitan estructurar su proceso de venta y generar una entrada constante de prospectos calificados.",
          },
          {
            question: "¿Cómo sé si mi negocio puede obtener buenos resultados?",
            answer: "El Marketing no es magia, es darle visibilidad a un producto o servicio. Si lo que ofreces está desalineado con las expectativas del mercado, por ejemplo, sobre precios o productos de mala calidad a un alto costo, difícilmente puedas obtener buenos resultados. Pero si tu propuesta tiene valor, un producto alineado al mercado, o de buena calidad, la visibilidad te garantiza resultados.",
          },
          {
            question: "¿Trabajan únicamente en Neuquén o en todo el país?",
            answer: "Si bien trabajamos de forma presencial para la creación de creativos publicitario y contenido orgánico, podemos trabajar de forma remota ofreciendo un plan personalizado, sujeto a evaluar el caso.",
          },
          {
            question: "¿Por qué elegir Delanoe Growth sobre otra agencia?",
            answer: "No nos enfocamos en métricas como 'seguidores' o 'me gustas', y no ofrecemos una lista de tareas a realizar. Trabajamos sobre la única métrica / estadística que le importa a un dueño de negocio: las ventas. Por eso, medimos la cantidad de contactos que te llegan, su calidad, y por último cuanto de ellos se convierten en clientes.",
          },
          {
            question: "¿Cómo es el proceso para empezar a trabajar juntos?",
            answer: "Primero agendamos una llamada de diagnóstico sin costo para conocer tu negocio. Analizamos tu embudo comercial actual, definimos los objetivos y hablamos sobre el plan que se ajuste a tu caso.",
          },
          {
            question: "¿Cuánto tiempo se tarda en ver resultados?",
            answer: "Desde el primer día ya estamos trabajando en tu proyecto. No hay una única respuesta ya que depende mucho de tu industria, la competencia, el producto o servicio que ofrezcas y su costo. Lo que si podemos asegurar desde antes de comenzar, es que invertir en publicidad tiene un retorno mucho más rápido que generar contenido orgánico. El contenido orgánico es una estrategia a mediano / largo plazo, mientras que la publicidad tiene un retorno más inmediato.",
          },
        ]}
        className="bg-slate-50/50 border-t border-slate-100"
      />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
