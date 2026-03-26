import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/Card";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Testimonios | Tomas Montero Software",
  description: "Lo que dicen mis clientes sobre mi trabajo y resultados obtenidos.",
};

export default function TestimoniosPage() {
  const testimonials = [
    {
      name: "María Laura Gómez",
      role: "CEO, Estudio Contable ML",
      text: "La página web que nos hizo Tomas superó todas nuestras expectativas. Desde el primer mes notamos un incremento del 40% en las consultas que recibimos. Súper profesional y expeditivo.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Director, Inmobiliaria Sur",
      text: "Necesitábamos un sistema a medida para gestionar nuestros alquileres. Tomas entendió la idea a la perfección y entregó un producto que nos ahorra muchísimas horas a la semana.",
      rating: 5,
    },
    {
      name: "Julieta Fernández",
      role: "Fundadora, Tienda Deco",
      text: "El e-commerce funciona de maravilla. Las ventas automáticas y la velocidad de carga de la página son excelentes. Muy recomendable trabajar con él, siempre predispuesto a ayudar.",
      rating: 5,
    },
    {
      name: "Diego Sánchez",
      role: "Emprendedor",
      text: "Trabajar con Tomas fue muy fácil. Un diseño limpio, moderno y exactamente lo que estábamos buscando para posicionar la marca online.",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 min-h-screen bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight mb-6">
              Experiencias de negocios reales
            </h1>
            <p className="text-lg text-slate-600">
              Mirá cómo el desarrollo de software y una buena presencia web ayudaron a estos clientes a optimizar su trabajo diario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 md:p-10">
                  {/* Estrellas en amarillo: color universal de valoración */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={20} className="fill-yellow-400 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Avatar: primary-100/700 – navy claro para coherencia */}
                    <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-primary-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Banner: navy-900 fondo, blurs en secondary para profundidad */}
          <div className="bg-primary-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-secondary-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-secondary-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Buscás optimizar tu operación o mejorar tus ventas?
              </h2>
              <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Contame sobre los desafíos actuales de tu negocio y veamos cómo la tecnología puede ayudarte a superarlos.
              </p>
              {/* CTA en amber sobre navy – máximo contraste */}
              <Link href="/#contact">
                <Button size="lg" className="h-14 px-10 text-lg shadow-md">
                  Iniciar mi proyecto
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
