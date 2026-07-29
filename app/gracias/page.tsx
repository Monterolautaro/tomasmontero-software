import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Search,
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  BookOpen,
  BarChart3,
} from "lucide-react";

// ── SEO: noindex para evitar que esta página rankee,
//    pero sí es rastreable para que GA4/Meta Pixel la detecten.
export const metadata = {
  title: "¡Solicitud Recibida! | Delanoe Growth",
  description:
    "Hemos recibido tu solicitud. Ya estamos analizando tu negocio para preparar tu diagnóstico personalizado.",
  robots: { index: false, follow: false },
};

// ── PROCESS STEPS — escalable: solo agregá objetos a este array
const nextSteps = [
  {
    number: "01",
    label: "Próximas 12 hs",
    title: "Análisis Inicial",
    description:
      "Auditamos tu presencia digital, competencia y embudo actual para tener contexto real antes de contactarte.",
    icon: Search,
  },
  {
    number: "02",
    label: "Próximas 24 hs",
    title: "Contacto Personalizado",
    description:
      "Te contactaremos por correo o WhatsApp con las primeras observaciones y para coordinar los próximos pasos.",
    icon: MessageCircle,
  },
  {
    number: "03",
    label: "A coordinar",
    title: "Sesión de Devolución",
    description:
      "Coordinaremos una llamada breve para presentarte la estrategia de crecimiento recomendada para tu negocio.",
    icon: CalendarCheck,
  },
];

export default function GraciasPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 pb-24 overflow-x-clip">

        {/* ── HERO / CONFIRMACIÓN ── */}
        <section className="relative py-16 md:py-24 text-center overflow-x-clip">
          {/* ambient blobs */}
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
            <div className="absolute top-[-10%] left-[-15%] w-[50rem] h-[50rem] bg-primary-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-slate-200/50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Check icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={1.8} />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight mb-5">
              ¡Solicitud recibida{" "}
              <span className="text-primary-600">correctamente!</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed">
              Hemos recibido tus datos. Ya estamos analizando la información de tu negocio
              para preparar tu{" "}
              <strong className="text-slate-700 font-semibold">Diagnóstico personalizado.</strong>
            </p>
          </div>
        </section>

        {/* ── ¿QUÉ PASA AHORA? ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              ¿Qué pasa ahora?
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Este es el proceso que seguimos con cada cliente nuevo para asegurar
              que la estrategia sea precisa y personalizada.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* connector line (desktop) */}
            <div
              className="hidden md:block absolute top-10 left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px bg-gradient-to-r from-slate-200 via-primary-200 to-slate-200 z-0"
              aria-hidden
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
                    {/* Icon circle */}
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 text-primary-600 flex items-center justify-center mb-5 shadow-sm group-hover:border-primary-300 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      <Icon size={28} strokeWidth={1.6} />
                    </div>

                    <span className="text-[11px] font-bold text-primary-400 uppercase tracking-widest mb-1">
                      Paso {step.number}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 mb-3 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {step.label}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[16rem]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ACELERADOR — CTA de alta intención ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl border border-primary-100 bg-primary-50/50 p-8 sm:p-12 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              ¿Querés coordinar ahora mismo?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Si no querés esperar a nuestro mensaje, podés agendar directamente
              un espacio en nuestra agenda o escribirnos por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/delanoegrowth/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-8 text-base font-bold shadow-md w-full sm:w-auto">
                  <CalendarCheck className="mr-2 w-5 h-5" />
                  Agendar Llamada
                </Button>
              </a>

              <a
                href="https://wa.me/5492996736980?text=Hola!%20Acabo%20de%20completar%20el%20formulario%20en%20la%20web%20y%20quisiera%20coordinar%20una%20llamada."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base font-semibold border-primary-700 text-primary-700 hover:bg-primary-50 w-full sm:w-auto"
                >
                  {/* WhatsApp icon */}
                  <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Chatear por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── RETENCIÓN — enlaces educativos ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-6">
            Mientras tanto, te invitamos a conocer más sobre nuestro enfoque
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/metodologia">
              <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-md transition-all duration-200 text-left">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-200">
                  <BookOpen size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy group-hover:text-primary-600 transition-colors duration-200">
                    Ver nuestra Metodología
                  </p>
                  <p className="text-xs text-slate-400">Cómo convertimos visitas en ventas</p>
                </div>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200 ml-auto shrink-0" />
              </div>
            </Link>

            <Link href="/#proyectos">
              <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-md transition-all duration-200 text-left">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-200">
                  <BarChart3 size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy group-hover:text-primary-600 transition-colors duration-200">
                    Ver Casos de Éxito
                  </p>
                  <p className="text-xs text-slate-400">Resultados reales de clientes</p>
                </div>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200 ml-auto shrink-0" />
              </div>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
