"use client";

import { Button } from "./ui/Button";

export function WaitlistForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por anotarte! Te contactaré pronto.");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
          <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Juan Pérez" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
          <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="+54 9 299 123 4567" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
        <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="juan@ejemplo.com" />
      </div>
      <div>
        <label htmlFor="idea" className="block text-sm font-medium text-slate-700 mb-2">Detalles de tu consulta (opcional)</label>
        <textarea id="idea" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="Contame qué problema buscás resolver o qué procesos querés mejorar..."></textarea>
      </div>
      <Button type="submit" className="w-full" size="lg">Confirmar lugar</Button>
    </form>
  );
}
