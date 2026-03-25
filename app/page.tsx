import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MonitorSmartphone, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { NotebookMockup } from "@/components/ui/NotebookMockup";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-15%] w-[55rem] h-[55rem] bg-primary-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-15%] w-[50rem] h-[50rem] bg-slate-200/70 rounded-full blur-3xl" />
          <div className="absolute top-[35%] left-[55%] w-[25rem] h-[25rem] bg-primary-50 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-32 md:py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mb-6">
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
            <a href="https://wa.me/5492995011237" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full text-lg h-14 px-8">
                Hablar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-[-10%] w-[85%] bg-slate-100 rounded-l-[60%]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">El valor real de tener tu propio sitio web</h2>
            <p className="text-slate-600 text-lg">Más allá de la estética, una plataforma web resuelve problemas concretos del día a día de tu negocio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Visibilidad permanente", desc: "Tu información está disponible 24/7 para quienes buscan lo que hacés.", icon: TrendingUp },
              { title: "Generá confianza", desc: "Un sitio web propio transmite mayor profesionalismo y respaldo.", icon: CheckCircle2 },
              { title: "Mayor alcance", desc: "Podes llegar a clientes de otras ciudades o provincias.", icon: Zap },
              { title: "Creación de marca", desc: "Ayuda a consolidar tu imagen profesional y diferenciarte de la competencia.", icon: MonitorSmartphone },
            ].map((benefit, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow group bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <benefit.icon size={24} />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
  
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-8 left-[-10%] w-[80%] bg-primary-50/50 rounded-r-[60%]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Un proceso claro y transparente</h2>
            <p className="text-slate-600 text-lg">Trabajamos sin tecnicismos innecesarios, enfocados en entender y resolver tu necesidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[2px] bg-slate-200/80 z-0" />
            {[
              { step: 1, title: "Análisis de tu negocio", desc: "Tenemos una charla para conocer cómo trabajás y qué cuellos de botella buscás resolver." },
              { step: 2, title: "Diseño y desarrollo", desc: "Armo una solución, priorizando que sea fácil de usar para vos y tus clientes." },
              { step: 3, title: "Lanzamiento y soporte", desc: "Publicamos el sitio y te enseño a administrarlo para que le saques el máximo provecho." },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full border-[6px] border-primary-100 text-primary-600 font-bold text-2xl flex items-center justify-center mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[5%] bottom-[5%] right-[-8%] w-[80%] bg-slate-100/80 rounded-l-[50%]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-navy mb-4">Proyectos destacados</h2>
              <p className="text-slate-600 text-lg">Conocé cómo ayudé a otros negocios a optimizar su operación y presencia online.</p>
            </div>
            <Link href="/servicios">
              <Button variant="outline" className="hidden md:inline-flex bg-white/80">Ver mis servicios</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rentadoor", desc: "Desarrollamos una aplicación de alquileres en Buenos Aires.", image: "/rentadoor.png" },
              { title: "E-commerce", desc: "Tienda online para vender dispositivos Apple." },
              { title: "Estudio contable", desc: "Un sitio web profesional para estudio contable." },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                {project.title === "Rentadoor" ? (
                  <div className="mb-6 h-[300px] flex items-center justify-center">
                    <NotebookMockup imageSrc={project.image || ""} alt={project.title} />
                  </div>
                ) : (
                  <div className="bg-white aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="absolute inset-0 bg-navy/5 flex items-center justify-center group-hover:bg-navy/0 transition-colors">
                      <span className="text-slate-400 font-medium">Proyecto {i + 1}</span>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-navy mb-2">{project.title}</h3>
                <p className="text-slate-600">{project.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 md:hidden flex justify-center">
            <Link href="/servicios">
              <Button variant="outline" className="w-full">Ver mis servicios</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-primary-100 p-0 overflow-hidden md:p-3 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
            <div className="bg-navy p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Hablemos de tu proyecto</h2>
              <p className="text-slate-300 mb-10 leading-relaxed text-lg">
                Escribime detallando qué necesitás resolver en tu negocio y analizamos juntos la mejor forma de abordarlo con tecnología.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/5492995011237" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-max hover:text-primary-400 transition-colors group">
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
