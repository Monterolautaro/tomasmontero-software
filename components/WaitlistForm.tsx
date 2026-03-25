"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

      setIsSuccess(true);
    } catch (err) {
      setError("Hubo un problema al enviar tus datos. Por favor, intentá de nuevo o contactame por WhatsApp.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary-900 mb-2">¡Lugar confirmado!</h3>
        <p className="text-slate-600">Gracias por tu interés. Me pondré en contacto con vos a la brevedad.</p>
        <Button 
          variant="outline" 
          className="mt-6" 
          onClick={() => setIsSuccess(false)}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

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
