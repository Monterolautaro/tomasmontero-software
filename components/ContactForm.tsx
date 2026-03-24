"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el mensaje");

      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 text-primary-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-2">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary-800 mb-2">
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
          placeholder="+54 9 299 123 4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-2">
          Detalles de tu consulta
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Contame sobre tu negocio y qué procesos te gustaría mejorar o qué problema buscás resolver..."
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {status === "success" && (
        <p className="text-success-700 bg-success-100 rounded-lg px-4 py-3 text-sm text-center">
          ¡Mensaje enviado con éxito! Me pondré en contacto a la brevedad.
        </p>
      )}
      {status === "error" && (
        <p className="text-danger-700 bg-danger-100 rounded-lg px-4 py-3 text-sm text-center">
          Hubo un error al enviar el mensaje. Por favor, intentá nuevamente vía WhatsApp.
        </p>
      )}
    </form>
  );
}
