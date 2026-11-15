"use client";

import { useEffect } from "react";

/**
 * Aparición al hacer scroll de los elementos con `data-reveal`.
 *
 * Se monta una sola vez por página y no envuelve contenido: las secciones
 * siguen siendo Server Components y el HTML llega completo y visible.
 * - Oculta (con `data-oculto`) solo lo que está debajo de la pantalla y pasa a
 *   observar; nada queda oculto sin un observador que lo vaya a mostrar.
 * - Lo que ya está en pantalla al cargar no se toca (sin parpadeos).
 * - Un único IntersectionObserver; cada elemento se deja de observar al aparecer.
 * - Con "reducir movimiento" no hace nada.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const limite = window.innerHeight * 0.92;
    const pendientes = new Set<HTMLElement>();

    const mostrar = (el: HTMLElement) => {
      delete el.dataset.oculto;
      pendientes.delete(el);
      io.unobserve(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        let hubo = false;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          mostrar(entry.target as HTMLElement);
          hubo = true;
        }
        // Tras un salto (ancla, tecla Fin) quedan elementos más arriba que nunca
        // cruzaron la pantalla: se muestran sin animar para que no falte contenido.
        if (hubo) {
          pendientes.forEach((el) => {
            if (el.getBoundingClientRect().bottom < 0) mostrar(el);
          });
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < limite) return;
      el.dataset.oculto = "";
      pendientes.add(el);
      io.observe(el);
    });

    return () => {
      io.disconnect();
      pendientes.forEach((el) => delete el.dataset.oculto);
    };
  }, []);

  return null;
}
