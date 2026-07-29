"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { metodologiaCategories } from "@/lib/metodologia-data";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/marketingdigital" },
  { name: "Metodología", href: "/metodologia", hasDropdown: true },
  { name: "Nosotros", href: "/nosotros" },
  // { name: "Testimonios", href: "/testimonios" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMetodologiaOpen, setMobileMetodologiaOpen] = useState(false);

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
         
          <Link href="/" className="flex items-center">
            <img 
              src="/branding/logo-principal-sin-fondo.png" 
              alt="Delanoe Growth" 
              className="h-16 md:h-24 w-auto object-contain" 
            />
          </Link>

    
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className={cn("relative", link.hasDropdown ? "group" : "")}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-700 py-6", // py-6 adds a hover bridge to the dropdown
                    pathname === link.href || (link.hasDropdown && pathname.startsWith("/metodologia"))
                      ? "text-primary-700 font-semibold"
                      : "text-slate-500"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Desktop Megamenu for Metodología */}
                {link.hasDropdown && (
                  <div className="absolute top-full right-0 mt-0 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex gap-8">
                      {metodologiaCategories.map((cat, i) => (
                        <div key={i} className="flex flex-col w-64">
                          <h4 className="text-[11px] font-bold text-primary-500 uppercase tracking-widest mb-4">
                            {cat.title}
                          </h4>
                          <div className="flex flex-col gap-4">
                            {cat.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/metodologia/${item.slug}`}
                                className="group/item"
                              >
                                <div className="text-sm font-bold text-navy group-hover/item:text-primary-600 transition-colors mb-1">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500 leading-relaxed group-hover/item:text-slate-600 transition-colors">
                                  {item.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/#contact">
              <Button variant="secondary" size="sm" className="px-5 py-2.5 text-sm">
                Contacto
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
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-primary-100 shadow-lg transition-all duration-300 ease-in-out origin-top",
          mobileMenuOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0 border-transparent"
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={() => {
                    if (!link.hasDropdown) setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors flex-1",
                    pathname === link.href || (link.hasDropdown && pathname.startsWith("/metodologia"))
                      ? "bg-primary-50 text-primary-700 font-semibold"
                      : "text-slate-600 hover:bg-primary-50 hover:text-primary-700"
                  )}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <button 
                    onClick={() => setMobileMetodologiaOpen(!mobileMetodologiaOpen)}
                    className="p-3 text-slate-500 hover:text-primary-600"
                  >
                    <ChevronDown size={20} className={cn("transition-transform duration-300", mobileMetodologiaOpen ? "rotate-180" : "")} />
                  </button>
                )}
              </div>
              
              {/* Mobile Megamenu / Accordion */}
              {link.hasDropdown && (
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  mobileMetodologiaOpen ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 pr-2 pb-2 space-y-6 border-l-2 border-primary-100 ml-4">
                    {metodologiaCategories.map((cat, i) => (
                      <div key={i}>
                        <h4 className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-3">
                          {cat.title}
                        </h4>
                        <div className="flex flex-col gap-3">
                          {cat.items.map((item) => (
                            <Link
                              key={item.slug}
                              href={`/metodologia/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block"
                            >
                              <div className="text-sm font-bold text-navy mb-0.5">{item.name}</div>
                              <div className="text-xs text-slate-500 leading-snug">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="primary" size="md" className="w-full">
                Contacto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
