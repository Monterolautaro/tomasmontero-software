"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoMuestraProps {
  src: string;
  poster: string;
  /** Descripción para lectores de pantalla, p. ej. "anuncio de captación de Kevin Pérez" */
  title: string;
}

/**
 * Video vertical (9:16) con carga diferida: muestra solo la portada y
 * descarga el video recién cuando la persona toca reproducir.
 */
export function VideoMuestra({ src, poster, title }: VideoMuestraProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-slate-900 ring-1 ring-white/15 shadow-2xl">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir ${title}`}
          className="group absolute inset-0 cursor-pointer"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 640px) 240px, 60vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <Play size={22} className="text-navy ml-1" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
