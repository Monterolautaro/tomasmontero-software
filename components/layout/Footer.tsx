import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4">
            <Link href="/" className="mb-6 block">
              <img 
                src="/branding/logo-principal-sin-fondo.png" 
                alt="Delanoe Growth" 
                className="h-8 w-auto object-contain" 
              />
            </Link>
            <p className="text-primary-300 max-w-sm leading-relaxed mb-6">
              Ayudamos a negocios de ticket medio y alto a conseguir más clientes y convertir más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6 text-primary-100">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-primary-300 hover:text-white transition-colors duration-200">Inicio</Link></li>
              <li><Link href="/servicios" className="text-primary-300 hover:text-white transition-colors duration-200">Servicios</Link></li>
              <li><Link href="/quien-soy" className="text-primary-300 hover:text-white transition-colors duration-200">Nosotros</Link></li>
              {/* <li><Link href="/testimonios" className="text-primary-300 hover:text-white transition-colors duration-200">Testimonios</Link></li> */}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6 text-primary-100">Contacto</h3>
            <ul className="space-y-4 text-primary-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-300 shrink-0 mt-0.5" />
                <span>Neuquén Capital</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-300 shrink-0" />
                <a href="mailto:delanoegrowth@gmail.com" className="hover:text-white transition-colors duration-200 break-all text-xs lg:text-sm">
                  delanoegrowth@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-300 shrink-0" />
                <a href="https://wa.me/5492996736980" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  +54 9 299 673 6980
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6 text-primary-100">Redes</h3>
            <div className="flex flex-col gap-6">
              <a 
                href="https://www.linkedin.com/in/lautaro-tomas-montero/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-200"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-cover" />
              </a>
              <Link href="/#contact">
                <Button variant="primary" size="sm" className="w-full text-xs">
                  Contactame
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Delanoe Growth. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con pasión.</p>
        </div>
      </div>
    </footer>
  );
}
