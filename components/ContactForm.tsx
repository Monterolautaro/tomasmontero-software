"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";

const COUNTRIES = [
  { code: "+54", name: "Argentina" },
  { code: "+591", name: "Bolivia" },
  { code: "+55", name: "Brasil" },
  { code: "+56", name: "Chile" },
  { code: "+57", name: "Colombia" },
  { code: "+506", name: "Costa Rica" },
  { code: "+53", name: "Cuba" },
  { code: "+593", name: "Ecuador" },
  { code: "+503", name: "El Salvador" },
  { code: "+34", name: "España" },
  { code: "+1", name: "Estados Unidos" },
  { code: "+502", name: "Guatemala" },
  { code: "+504", name: "Honduras" },
  { code: "+52", name: "México" },
  { code: "+505", name: "Nicaragua" },
  { code: "+507", name: "Panamá" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Perú" },
  { code: "+1", name: "Puerto Rico" },
  { code: "+1809", name: "República Dominicana" },
  { code: "+598", name: "Uruguay" },
  { code: "+58", name: "Venezuela" },
].sort((a, b) => a.name.localeCompare(b.name));

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+54",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el dropdown al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = {
        name: formData.name,
        phone: `${formData.countryCode} ${formData.phone}`,
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Error al enviar el mensaje");

      // Redirige a la Thank You Page (conversión rastreable en GA4 / Meta Pixel)
      router.push("/gracias");
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
        <div className="flex gap-2 relative" ref={dropdownRef}>
          {/* Country Code Selector */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between min-w-[90px] px-3 py-3 rounded-lg border border-slate-200 bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all hover:bg-slate-50"
          >
            <span className="font-medium text-sm">{formData.countryCode}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {/* Dropdown Modal */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-slate-100 rounded-xl shadow-xl z-50">
              {COUNTRIES.map((country) => (
                <button
                  key={`${country.name}-${country.code}`}
                  type="button"
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors flex justify-between items-center"
                  onClick={() => {
                    setFormData({ ...formData, countryCode: country.code });
                    setIsDropdownOpen(false);
                  }}
                >
                  <span>{country.name}</span>
                  <span className="text-slate-400 font-medium">{country.code}</span>
                </button>
              ))}
            </div>
          )}

          {/* Phone Input */}
          <input
            id="phone"
            type="tel"
            required
            minLength={8}
            maxLength={11}
            value={formData.phone}
            onChange={(e) => {
              // Permitir solo números
              const onlyNumbers = e.target.value.replace(/\D/g, '');
              if (onlyNumbers.length <= 11) {
                setFormData({ ...formData, phone: onlyNumbers });
              }
            }}
            className={`${inputClass} flex-1`}
            placeholder="11 2345 6789"
          />
        </div>
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
          placeholder="Contanos un poco sobre tu negocio."
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {status === "error" && (
        <p className="text-danger-700 bg-danger-100 rounded-lg px-4 py-3 text-sm text-center">
          Hubo un error al enviar el mensaje. Por favor, intentá nuevamente vía WhatsApp.
        </p>
      )}
    </form>
  );
}

