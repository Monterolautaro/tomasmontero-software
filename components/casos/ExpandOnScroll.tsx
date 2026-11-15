"use client";

import { useEffect } from "react";

const limitar = (n: number) => Math.min(Math.max(n, 0), 1);

/**
 * Bandas que se abren con el scroll: cada elemento con `data-expand` recibe
 * --p (avance de entrada, 0→1) y --q (avance de salida, 0→1), y el CSS de
 * `.banda` las usa para llevar el fondo de panel con márgenes a ancho completo.
 * `data-expand="entrada"` anima solo la entrada.
 *
 * - Solo mide las bandas que están en pantalla (IntersectionObserver).
 * - Un cálculo por cuadro como máximo (requestAnimationFrame), scroll pasivo.
 * - Sin JavaScript o con "reducir movimiento": la banda queda a ancho completo.
 */
export function ExpandOnScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const bandas = Array.from(document.querySelectorAll<HTMLElement>("[data-expand]"));
    const activas = new Set<HTMLElement>();
    let frame = 0;

    const medir = () => {
      frame = 0;
      const tramo = window.innerHeight * 0.6;
      activas.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = limitar((window.innerHeight - r.top) / tramo);
        el.style.setProperty("--p", (1 - Math.pow(1 - p, 3)).toFixed(3));
        if (el.dataset.expand !== "entrada") {
          const q = limitar(1 - r.bottom / tramo);
          el.style.setProperty("--q", (q * q * q).toFixed(3));
        }
      });
    };
    const pedir = () => {
      if (!frame) frame = requestAnimationFrame(medir);
    };

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          activas.add(el);
          delete el.dataset.fuera;
        } else {
          activas.delete(el);
          // Pausa las animaciones en bucle de la banda (ver globals.css)
          el.dataset.fuera = "";
        }
      }
      pedir();
    });
    bandas.forEach((el) => io.observe(el));
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", pedir);
      window.removeEventListener("resize", pedir);
      cancelAnimationFrame(frame);
      bandas.forEach((el) => {
        el.style.removeProperty("--p");
        el.style.removeProperty("--q");
        delete el.dataset.fuera;
      });
    };
  }, []);

  return null;
}
