"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play } from "lucide-react";

export interface ClientVideo {
  id: string;
  src: string;
  poster: string;
  client: string;
  title: string;
  format: string;
}

interface VideoCarouselProps {
  videos: ClientVideo[];
}

/**
 * Carrusel horizontal de videos verticales (9:16).
 *
 * Carga diferida:
 * - Las tarjetas muestran una imagen de portada optimizada por next/image (lazy).
 * - Solo existe UN elemento <video> en la página: el de la tarjeta activa.
 *   Se crea recién cuando el carrusel entra en pantalla, así que al abrir la
 *   página no se descarga ningún video.
 * - Al salir de pantalla el video se pausa; al cambiar de tarjeta se descarga
 *   solo el video nuevo.
 * - Con "ahorro de datos" activado en el celular no hay reproducción automática.
 */
export function VideoCarousel({ videos }: VideoCarouselProps) {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollingByCode = useRef(false);

  // Detectar cuándo el carrusel está en pantalla
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Respetar "ahorro de datos": sin reproducción automática
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const autoplayAllowed = !conn?.saveData;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && autoplayAllowed) setStarted(true);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Play / pausa / sonido del video activo
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [active, inView, muted, started]);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    const card = track?.children[i] as HTMLElement | undefined;
    if (!track || !card) return;
    scrollingByCode.current = true;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
    window.setTimeout(() => (scrollingByCode.current = false), 600);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const next = (i + videos.length) % videos.length;
      setActive(next);
      setStarted(true);
      scrollToIndex(next);
    },
    [videos.length, scrollToIndex]
  );

  // Si el usuario desliza a mano, la tarjeta centrada pasa a ser la activa
  const onScroll = () => {
    if (scrollingByCode.current) return;
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
      if (d < best) {
        best = d;
        closest = i;
      }
    });
    if (closest !== active) setActive(closest);
  };

  return (
    <div ref={sectionRef} className="relative">
      {/* Controles */}
      <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <p className="text-sm text-slate-500">
          <span className="font-semibold text-navy tabular-nums">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mx-1.5 text-slate-300">/</span>
          <span className="tabular-nums">{String(videos.length).padStart(2, "0")}</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-slate-200 text-slate-600 text-xs font-semibold hover:border-navy hover:text-navy transition-colors"
            aria-label={muted ? "Activar sonido" : "Silenciar"}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span className="hidden sm:inline">{muted ? "Activar sonido" : "Silenciar"}</span>
          </button>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-navy hover:text-navy transition-colors"
            aria-label="Video anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-navy text-white hover:bg-primary-700 transition-colors"
            aria-label="Video siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Pista */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-[calc(50%-7.5rem)] sm:px-[calc(50%-8.5rem)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v, i) => {
          const isActive = i === active;
          const showVideo = isActive && started;
          return (
            <figure
              key={v.id}
              className={`snap-center shrink-0 w-60 sm:w-[17rem] transition-all duration-500 ${
                isActive ? "opacity-100 scale-100" : "opacity-50 scale-[0.92]"
              }`}
            >
              <button
                type="button"
                onClick={() => (showVideo ? setMuted((m) => !m) : goTo(i))}
                className="relative block w-full aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 shadow-xl ring-1 ring-slate-900/5"
                aria-label={showVideo ? `${muted ? "Activar" : "Silenciar"} sonido de ${v.title}` : `Reproducir ${v.title}`}
              >
                {/* Portada: liviana, optimizada y diferida */}
                <Image
                  src={v.poster}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 272px, 240px"
                  className="object-cover"
                />
                {/* Único video de la página: solo el activo */}
                {showVideo && (
                  <video
                    key={v.id}
                    ref={videoRef}
                    src={v.src}
                    poster={v.poster}
                    muted
                    playsInline
                    autoPlay
                    preload="auto"
                    onEnded={() => goTo(i + 1)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/60 to-transparent text-left">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold tracking-[0.12em] uppercase text-white">
                    {v.client}
                  </span>
                </div>
                {!showVideo && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play size={22} className="text-navy ml-1" fill="currentColor" />
                    </span>
                  </span>
                )}
              </button>
              <figcaption className="mt-4 text-center">
                <span className="block text-sm font-semibold text-navy">{v.title}</span>
                <span className="block text-xs text-slate-400 mt-0.5">{v.format}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-1.5 mt-4">
        {videos.map((v, i) => (
          <button
            key={v.id}
            type="button"
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-navy" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Ir al video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
