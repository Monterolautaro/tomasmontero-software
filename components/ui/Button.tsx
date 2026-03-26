import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      // CTA principal – naranja ámbar: alto contraste sobre cualquier fondo
      primary:
        "bg-cta-500 text-white hover:bg-cta-600 shadow-sm hover:shadow-md active:scale-[0.98]",
      // Acción secundaria importante – navy oscuro
      secondary:
        "bg-primary-800 text-white hover:bg-primary-700 shadow-sm active:scale-[0.98]",
      // Acción terciaria – borde navy, fondo blanco
      outline:
        "border border-primary-700 bg-white text-primary-700 hover:bg-primary-50 hover:border-primary-800 active:scale-[0.98]",
      // Acción mínima / ghost
      ghost:
        "text-slate-600 hover:bg-primary-50 hover:text-primary-700",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
