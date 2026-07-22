import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Code, 
  Heart, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Award, 
  Users, 
  RefreshCw, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Nosotros | Delanoe Growth",
  description: "Conocé a Delanoe Growth y a Tomas Montero. Agencia de adquisición de clientes con enfoque técnico y orientada 100% a performance.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20 overflow-x-clip">
        {/* Hero Section with Contact Form */}
        <section className="relative py-12 md:py-20 overflow-x-clip">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-10%] left-[-15%] w-[55rem] h-[55rem] bg-primary-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-15%] w-[45rem] h-[45rem] bg-slate-200/60 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Headline & Intro */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-6">
                  <Sparkles size={14} className="text-primary-600" />
                  Agencia de Marketing Digital y crecimiento, Neuquén.
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight mb-6">
                  Somos una Agencia de Marketing Digital enfocada en <span className="text-primary-600">Adquisición y Crecimiento</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  Ayudamos a pymes y profesionales a adquirir más clientes y generar más ventas a través de sistemas comerciales, embudos de conversión y automatización de procesos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
                  <div className="flex items-center gap-3 text-navy font-semibold text-sm">
                    <CheckCircle2 size={20} className="text-primary-600 shrink-0" />
                    <span>Enfoque 100% en Performance & Resultados</span>
                  </div>
                  <div className="flex items-center gap-3 text-navy font-semibold text-sm">
                    <CheckCircle2 size={20} className="text-primary-600 shrink-0" />
                    <span>Integración de IA y herramientas modernas</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Contact Form Card */}
              <div className="lg:col-span-5">
                <Card className="shadow-2xl border border-slate-100 p-6 md:p-8 bg-white rounded-3xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy mb-2">Envianos tu consulta</h3>
                    <p className="text-slate-500 text-sm">Contanos sobre tu negocio y coordinamos una propuesta personalizada.</p>
                  </div>
                  <ContactForm />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24 overflow-x-clip bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                ¿Por qué elegirnos como tu Agencia?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                En un mercado competitivo, necesitas una agencia que combine tecnologías modernas e inteligencia artificial para optimizar procesos y mejorar la parte comercial de tu negocio. Aplicamos un sistema que ya dio resultados en otros negocios como el tuyo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Formación Técnica",
                  desc: "Combinamos desarrollo de software con estrategias de marketing digital.",
                  icon: Code,
                },
                {
                  title: "Enfoque 100% Orientado a Performance",
                  desc: "Cada estrategia está diseñada con objetivos claros: generar una entrada constante de prospectos calificados para aumentar la facturación.",
                  icon: TrendingUp,
                },
                {
                  title: "Acompañamiento y Optimización Continua",
                  desc: "Monitoreamos e iteramos de forma constante para escalar lo que funciona y eliminar lo que no genera retorno.",
                  icon: ShieldCheck,
                },
              ].map((item, i) => (
                <Card key={i} className="border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white group rounded-2xl">
                  <CardHeader className="pt-6 pb-2">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Nuestros valores</h2>
              <p className="text-slate-600 text-lg">
                Principios fundamentales que guían cada proyecto y la relación con cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Compromiso con resultados",
                  desc: "Tu éxito comercial y el retorno de inversión son nuestra prioridad número uno.",
                  icon: Award,
                },
                {
                  title: "Cercanía y Transparencia",
                  desc: "Construimos relaciones duraderas con comunicación directa sin tecnicismos.",
                  icon: Heart,
                },
                {
                  title: "Trabajo en equipo",
                  desc: "Colaboramos codo a codo como una extensión estratégica de tu propio negocio.",
                  icon: Users,
                },
                {
                  title: "Mejora continua",
                  desc: "Analizamos continuamente métricas e innovamos para superar metas comerciales.",
                  icon: RefreshCw,
                },
              ].map((value, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary-100/60 text-primary-600 flex items-center justify-center mb-4">
                    <value.icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="relative py-24 overflow-x-clip bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-navy p-8 sm:p-12 md:p-16 text-white shadow-2xl overflow-hidden border border-primary-800">
              {/* Background ambient light */}
              <div className="absolute top-[-20%] left-[-10%] w-[30rem] h-[30rem] bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-primary-400/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-200 text-xs font-semibold uppercase tracking-wider mb-6">
                  Nuestra Trayectoria
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                  Nuestra <span className="text-primary-400">historia</span>
                </h2>

                <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                  <p>
                    <strong>Delanoe Growth</strong> nació siendo una agencia de desarrollo de software. Luego de cuatro proyectos cerrados y al ver la dificultad que tenían los emprendedores y empresas en conseguir clientes, nos dimos cuenta no sirve crear software que no se use. Por lo cual decidimos cambiar nuestra propuesta comercial, y mezclar tecnología con marketing digital.
                  </p>
                  <p>
                    Combinamos el rigor analítico con estrategias de marketing digital. Evolucionamos hacia una agencia de Marketing Digital situada en Neuquén capital, que une pauta publicitaria en Meta y Google Ads, landing pages de alta velocidad con optimización de SEO y automatización comercial con herramientas de IA.
                  </p>
                  <p>
                    Hoy ayudamos a marcas y negocios de diversos rubros a escalar su captación de clientes de forma predecible y orientada a resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Conocé a <span className="text-primary-600">nuestro fundador</span>
              </h2>
              <p className="text-slate-600 text-lg">
                Visión estratégica y enfoque técnico al servicio del crecimiento de tu empresa.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
              {/* Founder Image */}
              <div className="md:col-span-5 relative min-h-[320px] md:min-h-[420px] bg-slate-100">
                <Image
                  src="/fundador.jpg"
                  alt="Tomas Montero"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                  <h3 className="text-xl font-bold">Tomas Montero</h3>
                  <p className="text-xs text-primary-200">Fundador & Head of Growth</p>
                </div>
              </div>

              {/* Founder Details */}
              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="hidden md:block mb-4">
                    <h3 className="text-2xl font-bold text-navy">Tomas Montero Delanoe</h3>
                    <p className="text-primary-600 font-semibold text-sm">Fundador</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                    Apasionado por la tecnología, los sistemas comerciales y el crecimiento acelerado de negocios. Lidera la estrategia de adquisición, el diseño de embudos y la implementación técnica de Delanoe Growth. Su prioridad es construir sistemas eficientes que conecten a cada cliente con su público objetivo y maximicen su retorno de inversión.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 mb-6">
                    <div>
                      <div className="text-2xl font-extrabold text-navy">+4 años</div>
                      <div className="text-xs text-slate-500 font-medium">de experiencia en tecnología & mkt</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-navy">100%</div>
                      <div className="text-xs text-slate-500 font-medium">enfoque en resultados</div>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/lautaro-tomas-montero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z"/>
                      </svg>
                    </div>
                    <span>Conectar en LinkedIn</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="relative py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-50/60 border border-primary-100 rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-3xl font-bold text-navy mb-4">
                ¿Listo para escalar la adquisición de clientes en tu negocio?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                Analizamos tu proceso comercial actual y diseñamos una estrategia a medida para maximizar tus ventas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/5492996736980?text=Hola!%20Me%20contacto%20desde%20la%20sección%20Nosotros%20para%20conocer%20los%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-md">
                    Hablar por WhatsApp
                  </Button>
                </a>
                <Link href="/servicios">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-white">
                    Ver servicios <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

