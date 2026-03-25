import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
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
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-primary-100 border-8 border-white shadow-xl">
              <Image
                src="/escritorio_yo.JPG"
                alt="Tomas Montero"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
        
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight mb-8">
                Hola, soy Tomas Montero.
              </h1>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                <p>
                  Soy desarrollador de software y emprendedor, enfocado en ayudar a negocios a crecer combinando tecnología y estrategia comercial.
                </p>
                <p>
                  A lo largo de mi experiencia, trabajé tanto en proyectos propios como en entornos corporativos como Reale Seguros, lo que me llevó a entender algo bastante importante: no alcanza con tener un buen producto, si no llega a las personas correctas.
                </p>
                <p>
                 Hoy me enfoco en resolver ese problema. No solo desarrollo páginas o aplicaciones, sino que analizo cada proyecto para entender a quién está dirigido y cómo hacerlo llegar de forma efectiva.
                 Mi objetivo no es solo crear software, sino ayudarte a conseguir más clientes y mejorar la forma en que tu negocio se presenta y crece.
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
