import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Code, Heart } from "lucide-react";

export const metadata = {
  title: "Quién Soy | Tomas Montero Software",
  description: "Conocé más sobre mí y mi pasión por el desarrollo de software.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-primary-50 border-8 border-white shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-400">
                <div className="w-24 h-24 mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-4xl text-primary-500 font-bold">TM</span>
                </div>
                <p className="font-medium">Espacio para tu foto</p>
                <p className="text-sm mt-1 opacity-70">(800x1000px recomendado)</p>
              </div>
            </div>

            <div>
        
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight mb-8">
                Hola, soy Tomas Montero.
              </h1>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                <p>
                  Soy desarrollador de software pero sobre todo, emprendedor. Me encanta combinar las distintas disciplinas para obtener
                  resultados que integren lo mejor de ambos mundos; Ventas y IT. 
                </p>
                <p>
                  A lo largo de mi carrera, he manejado negocios, trabajado en empresas y también cerrado contratos para desarrollar aplicaciones web.
                  En todo este proceso, entendí algo importante: No importa el rubro, ni lo que hagas, 
                </p>
                <p>
                  Mi filosofía es clara:{" "}
                  <strong className="font-semibold text-primary-900">
                    la tecnología debe trabajar para vos, no al revés
                  </strong>
                  . Por eso me enfoco en entender a fondo las necesidades de cada proyecto antes de
                  escribir la primera línea de código.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12 border-y border-primary-100 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                    <Code size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-primary-900 text-2xl">+4 años</div>
                    <div className="text-sm text-slate-500 font-medium">de experiencia</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                    <Heart size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-primary-900 text-2xl">100%</div>
                    <div className="text-sm text-slate-500 font-medium">dedicación</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg h-14 px-8 shadow-md">
                    Trabajemos juntos
                  </Button>
                </Link>
                <Link href="/servicios" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full text-lg h-14 px-8">
                    Ver mis servicios <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
