import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight, Clock, Wrench } from "lucide-react";
import { metodologiaData } from "@/lib/metodologia-data";

// ── SSG: Generación Estática de Rutas ──────────────────────────────────────────
export async function generateStaticParams() {
  return metodologiaData.map((discipline) => ({
    slug: discipline.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const discipline = metodologiaData.find((d) => d.slug === slug);

  if (!discipline) {
    return {};
  }

  return {
    title: `${discipline.title} | Metodología Delanoe Growth`,
    description: discipline.summary,
    openGraph: {
      title: discipline.title,
      description: discipline.summary,
      url: `https://delanoegrowth.com/metodologia/${discipline.slug}`,
      type: "article",
    },
  };
}

// ── COMPONENTE DE PÁGINA ───────────────────────────────────────────────────────
export default async function MetodologiaDisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = metodologiaData.find((d) => d.slug === slug);

  if (!discipline) {
    notFound();
  }

  // Generar un ID simple para la tabla de contenidos basado en el texto del heading
  const generateId = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  // Filtrar solo los headings para la TOC
  const tocItems = discipline.content
    .filter((block) => block.type === "heading2")
    .map((block) => ({
      id: block.id,
      text: block.content || "",
    }));

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-24 bg-slate-50/30">
        
        {/* ── HERO ── */}
        <header className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-x-clip border-b border-slate-200 bg-white">
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
            <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-primary-100/40 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center text-xs font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
              <Link href="/metodologia" className="hover:text-primary-600 transition-colors">
                Metodología
              </Link>
              <ChevronRight size={14} className="mx-2 text-slate-300" />
              <span className="text-slate-400 cursor-default">{discipline.category}</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6">
              {discipline.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-light">
              {discipline.summary}
            </p>

            <div className="flex items-center gap-6 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <Clock size={16} className="text-primary-500" />
                {discipline.readingTime} min de lectura
              </div>
            </div>
          </div>
        </header>

        {/* ── CONTENIDO PRINCIPAL ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* TOC (Sticky Sidebar) - visible in lg+ */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                En esta guía
              </div>
              <nav className="flex flex-col gap-3">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors leading-snug border-l-2 border-transparent hover:border-primary-300 pl-3 py-1"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>

              <div className="mt-12 p-6 bg-primary-50/50 rounded-2xl border border-primary-100">
                <div className="text-sm font-bold text-navy mb-2">¿Necesitás ayuda?</div>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Podemos aplicar esto directamente en tu negocio.
                </p>
                <Link href="/#contact">
                  <Button size="sm" className="w-full text-xs shadow-sm">
                    Solicitar diagnóstico
                  </Button>
                </Link>
              </div>
            </aside>

            {/* Artículo */}
            <article className="lg:col-span-9 max-w-3xl">
              <div className="prose prose-lg prose-slate prose-headings:text-navy prose-a:text-primary-600 hover:prose-a:text-primary-700 max-w-none">
                
                {discipline.content.map((block, index) => {
                  switch (block.type) {
                    case "heading2":
                      return (
                        <h2 key={block.id} id={block.id} className="text-2xl sm:text-3xl font-bold mt-16 mb-6 scroll-mt-28">
                          {block.content}
                        </h2>
                      );
                    case "heading3":
                      return (
                        <h3 key={block.id} id={block.id} className="text-xl sm:text-2xl font-bold mt-10 mb-4 scroll-mt-28">
                          {block.content}
                        </h3>
                      );
                    case "paragraph":
                      return (
                        <p key={block.id} className="text-slate-600 leading-relaxed mb-6">
                          {block.content}
                        </p>
                      );
                    case "list":
                      return (
                        <ul key={block.id} className="space-y-3 my-6 list-none pl-0">
                          {block.items?.map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                              <span className="text-primary-500 mt-1 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    case "callout":
                      return (
                        <div key={block.id} className="my-10 p-6 md:p-8 bg-white border-l-4 border-primary-500 rounded-r-2xl shadow-sm italic text-slate-700 text-lg leading-relaxed">
                          "{block.calloutText}"
                          {block.calloutSource && (
                            <div className="mt-4 text-sm not-italic font-semibold text-slate-500 flex items-center gap-2">
                              <span className="w-4 h-px bg-slate-300" />
                              {block.calloutSource}
                            </div>
                          )}
                        </div>
                      );
                    case "tools":
                      return (
                        <div key={block.id} className="my-8 p-6 bg-slate-100/50 rounded-2xl border border-slate-200">
                          <div className="flex items-center gap-2 text-sm font-bold text-navy mb-4">
                            <Wrench size={16} className="text-slate-500" />
                            Herramientas que utilizamos
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {block.tools?.map((tool, i) => (
                              <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    case "highlight":
                      return (
                        <div key={block.id} className="my-8 p-5 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3">
                          <span className="text-emerald-500 text-xl leading-none mt-0.5">↑</span>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                              {block.highlightLabel}
                            </div>
                            <p className="text-sm font-medium text-emerald-900 m-0">
                              {block.highlightText}
                            </p>
                          </div>
                        </div>
                      );
                    default:
                      return null;
                  }
                })}

              </div>

              {/* ── CTA FINAL DEL ARTÍCULO ── */}
              <div className="mt-24 p-8 sm:p-12 bg-navy rounded-3xl text-center text-white relative overflow-hidden shadow-xl border border-primary-800">
                <div className="absolute inset-0 bg-primary-600/10" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    ¿Querés aplicar estos principios en tu empresa?
                  </h3>
                  <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                    Realizamos un diagnóstico completo de tu embudo comercial para identificar cuellos de botella y oportunidades de crecimiento.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg">
                      Solicitar Diagnóstico CRO <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

            </article>

          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
