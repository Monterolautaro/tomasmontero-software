"use client";

import { useEffect, useRef } from "react";

interface ContadorProps {
  /** Valor inicial de la animación */
  desde: number;
  /** Valor final: es el que se renderiza en el servidor */
  hasta: number;
  className?: string;
}

const formato = new Intl.NumberFormat("es-AR");

/**
 * Número que cuenta de `desde` a `hasta` cuando entra en pantalla.
 * El HTML del servidor ya trae el valor final (SEO y sin JavaScript).
 * Escribe directo en el nodo de texto: no provoca re-renders de React.
 */
export function Contador({ desde, hasta, className }: ContadorProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duracion = 1200;
        const inicio = performance.now();
        const paso = (ahora: number) => {
          const t = Math.min((ahora - inicio) / duracion, 1);
          const suave = 1 - Math.pow(1 - t, 3);
          el.textContent = formato.format(Math.round(desde + (hasta - desde) * suave));
          if (t < 1) frame = requestAnimationFrame(paso);
        };
        frame = requestAnimationFrame(paso);
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = formato.format(hasta);
    };
  }, [desde, hasta]);

  return (
    <span ref={ref} className={className}>
      {formato.format(hasta)}
    </span>
  );
}
