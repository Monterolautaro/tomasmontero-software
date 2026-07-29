"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

export function WaitlistForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      // Combinamos el email y la idea en el campo message que espera la API
      message: `Email: ${formData.get("email")}\n\nConsulta/Idea: ${formData.get("idea")}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      // Redirige a la Thank You Page (conversión rastreable en GA4 / Meta Pixel)
      router.push("/gracias");
    } catch (err) {
      setError("Hubo un problema al enviar tus datos. Por favor, intentá de nuevo o contactame por WhatsApp.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
          <input 
            type="text" 
            name="name"
            id="name" 
            required 
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50" 
            placeholder="Juan Pérez" 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
          <input 
            type="tel" 
            name="phone"
            id="phone" 
            required 
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50" 
            placeholder="+54 9 299 123 4567" 
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
        <input 
          type="email" 
          name="email"
          id="email" 
          required 
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50" 
          placeholder="juan@ejemplo.com" 
        />
      </div>
      <div>
        <label htmlFor="idea" className="block text-sm font-medium text-slate-700 mb-2">Detalles de tu consulta (opcional)</label>
        <textarea 
          name="idea"
          id="idea" 
          rows={4} 
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none disabled:opacity-50" 
          placeholder="Contame qué problema buscás resolver o qué procesos querés mejorar..."
        ></textarea>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm italic">{error}</p>
      )}

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Confirmar lugar"}
      </Button>
    </form>
  );
}
