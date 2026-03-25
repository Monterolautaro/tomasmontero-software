import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
              Tomas Montero<span className="text-cta-400">.</span>
            </Link>
            <p className="text-primary-300 max-w-sm leading-relaxed mb-6">
              Me enfoco en mejorar la presencia digital de tu negocio, para que puedas aumentar la cantidad de personas a las que llegan tus productos o servicios, y así aumentar tus ventas.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6 text-primary-100">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-primary-300 hover:text-white transition-colors duration-200">Inicio</Link></li>
              <li><Link href="/servicios" className="text-primary-300 hover:text-white transition-colors duration-200">Servicios</Link></li>
              <li><Link href="/quien-soy" className="text-primary-300 hover:text-white transition-colors duration-200">Quién Soy</Link></li>
              {/* <li><Link href="/testimonios" className="text-primary-300 hover:text-white transition-colors duration-200">Testimonios</Link></li> */}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-6 text-primary-100">Contacto</h3>
            <ul className="space-y-4 text-primary-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-300 shrink-0 mt-0.5" />
                <span>Neuquén Capital, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-300 shrink-0" />
                <a href="mailto:lautarotomas082@icloud.com" className="hover:text-white transition-colors duration-200">
                  lautarotomas082@icloud.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-300 shrink-0" />
                <a href="https://wa.me/5492995011237" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  +54 9 299 501 1237
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tomas Montero. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con pasión.</p>
        </div>
      </div>
    </footer>
  );
}
