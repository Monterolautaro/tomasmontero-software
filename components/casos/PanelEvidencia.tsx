"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

export interface Captura {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface PanelEvidenciaProps {
  /** Texto del botón, p. ej. "Ver el panel de Meta Ads" */
  label: string;
  /** Título del diálogo */
  title: string;
  capturas: Captura[];
}

/**
 * Botón que abre las capturas del administrador de anuncios en un <dialog> nativo.
 * Las imágenes solo se descargan al abrirlo (loading="lazy" dentro de un diálogo cerrado).
 */
export function PanelEvidencia({ label, title, capturas }: PanelEvidenciaProps) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-slate-300 underline-offset-4 hover:decoration-navy transition-colors cursor-pointer"
      >
        {label}
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>

      <dialog
        ref={ref}
        aria-label={title}
        onClick={(e) => {
          // Clic sobre el fondo (el propio <dialog>) cierra
          if (e.target === ref.current) ref.current?.close();
        }}
        className="m-auto w-[min(64rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] rounded-3xl p-0 bg-white text-navy shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur border-b border-slate-100">
          <p className="text-sm font-semibold">{title}</p>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Cerrar"
            className="w-9 h-9 -mr-2 flex items-center justify-center rounded-full text-slate-500 hover:text-navy hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 space-y-8">
          {capturas.map((c) => (
            <figure key={c.src}>
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-slate-500">{c.caption}</figcaption>
            </figure>
          ))}
        </div>
      </dialog>
    </>
  );
}
