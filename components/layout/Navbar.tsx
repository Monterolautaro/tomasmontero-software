"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Quién Soy", href: "/quien-soy" },
  // { name: "Testimonios", href: "/testimonios" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-primary-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
         
          <Link href="/" className="text-xl font-bold tracking-tight text-primary-900">
            Tomas Montero Software
          </Link>

    
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-700",
                  pathname === link.href
                    ? "text-primary-700 font-semibold"
                    : "text-slate-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/#contact">
              <Button variant="secondary" size="sm" className="px-5 py-2.5 text-sm">
                Contactame
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-primary-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-primary-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden origin-top",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary-50 text-primary-700 font-semibold"
                  : "text-slate-600 hover:bg-primary-50 hover:text-primary-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="primary" size="md" className="w-full">
                Contactame
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
