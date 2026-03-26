import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Code2, Rocket, Star } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "Servicios | Tomas Montero Software",
  description: "Desarrollo de landing pages, aplicaciones a medida y marketing digital.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 min-h-screen bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight mb-6">
              Llegá a más clientes con soluciones tecnológicas
            </h1>
            <p className="text-lg text-slate-600">
              Servicios orientados a mejorar tu capacidad de venta. Mientras más alcance tenes, más vendes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">

            {/* Service 1 – Principal (CTA bar + badge destacado) */}
            <Card className="border-primary-200 shadow-xl relative overflow-hidden transform md:-translate-y-4">
              {/* Barra superior: CTA amber para diferenciar el plan destacado */}
              <div className="absolute top-0 left-0 w-full h-2 bg-cta-500" />
              {/* Badge "Más elegido": cta-50 / cta-600 */}
              <div className="absolute top-4 right-4 bg-cta-50 text-cta-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-cta-400/30">
                Más elegido
              </div>
              <CardHeader className="pt-10">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                  <Star size={24} className="fill-primary-100" />
                </div>
                <CardTitle className="text-2xl mb-2">Sitios Web Institucionales</CardTitle>
                <CardDescription className="text-base h-12">
                  Una plataforma profesional para generar confianza y recibir consultas centralizadas.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-primary-900">USD 99</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Lista para publicar en menos de 24h",
                    "Diseño claro y directo",
                    "Estructura orientada al contacto",
                    "Perfecta adaptabilidad a celulares",
                    "Formulario de contacto",
                    "Botón de WhatsApp",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={20} className="text-primary-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-slate-400">
                    <CheckCircle2 size={20} className="text-slate-300 shrink-0" />
                    <span className="line-through">Hosting y dominio</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href="https://wa.me/5492995011237?text=Hola!%20Me%20interesa%20el%20servicio%20de%20Landing%20Pages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button size="lg" className="w-full text-lg shadow-md hover:shadow-lg transition-shadow">
                    Contratar ahora
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card className="flex flex-col hover:border-primary-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                  <Code2 size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Sistemas a Medida</CardTitle>
                <CardDescription className="h-10">
                  Software diseñado para automatizar y organizar tu información.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Ideal para negocios que ya crecieron y necesitan herramientas específicas (gestión de
                  turnos, inventarios o control interno) que las soluciones estándar no cubren.
                </p>
                <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                  <div className="flex items-center gap-2 text-primary-900 font-medium mb-1">
                    <Clock size={16} className="text-cta-500" />
                    Lista de espera abierta
                  </div>
                  <p className="text-xs text-slate-500">Cupos muy limitados para este trimestre.</p>
                </div>
              </CardContent>
              <CardFooter>
                <a href="#waitlist" className="w-full">
                  <Button variant="outline" className="w-full">Anotarme a la lista</Button>
                </a>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card className="flex flex-col hover:border-primary-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                  <Rocket size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Web + Estrategia Digital</CardTitle>
                <CardDescription className="h-10">
                  Desarrollo de plataforma con atracción de público objetivo.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Combinamos la creación de tu sitio con estrategias de posicionamiento para
                  asegurar que tu presencia online genere consultas y resultados sostenibles.
                </p>
                <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                  <div className="flex items-center gap-2 text-primary-900 font-medium mb-1">
                    <Clock size={16} className="text-cta-500" />
                    Lista de espera abierta
                  </div>
                  <p className="text-xs text-slate-500">Solo acepto 2 proyectos por mes.</p>
                </div>
              </CardContent>
              <CardFooter>
                <a href="#waitlist" className="w-full">
                  <Button variant="outline" className="w-full">Anotarme a la lista</Button>
                </a>
              </CardFooter>
            </Card>

          </div>

          {/* Waitlist Form */}
          <div id="waitlist" className="mt-32 w-full max-w-2xl scroll-m-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Unite a la Lista de Espera</h2>
              <p className="text-slate-600">
                Si estás interesado en un desarrollo a medida o el servicio de marketing, dejá tus
                datos. Me contactaré cuando se libere un lugar. Es sin compromiso.
              </p>
            </div>
            <Card className="p-8 shadow-lg border-primary-100">
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
