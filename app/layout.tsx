import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://delanoegrowth.com"), 
  title: {
    default: "Agencia de Marketing Digital | Delanoe Growth",
    template: "%s | Delanoe Growth"
  },
  description:
    "Ayudamos a empresas y profesionales a conseguir más clientes mediante Google Ads, Meta Ads, contenido orgánico y landing pages optimizadas para convertir visitas en ventas.",
  keywords: ["adquisición de clientes", "marketing digital", "crecimiento de negocios", "optimización de ventas", "Delanoe Growth", "Tomas Montero", "pymes", "Neuquén", "Cipolletti", "Neuquén Capital", "Cipolletti Neuquén", "Google Ads Neuquén", "Meta Ads Neuquén", "Marketing Digital Neuquén", "Agencia de Marketing Digital Neuquén", "Publicidad Online Neuquén", "Marketing para empresas Neuquén", "Marketing para profesionales Neuquén", "Marketing Neuquén", "Publicidad Neuquén", "Marketing en Neuquén", "Marketing en Cipolletti"],
  authors: [{ name: "Delanoe Growth" }],
  creator: "Delanoe Growth",
  openGraph: {
    title: "Marketing Digital Neuquén | Delanoe Growth",
    description:
      "Conseguí más clientes y convertí más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.",
    url: "https://delanoegrowth.com",
    siteName: "Delanoe Growth",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/branding/banner.png",
        width: 1200,
        height: 630,
        alt: "Delanoe Growth — Agencia de Marketing Digital en Neuquén",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delanoe Growth | Adquisición de Clientes",
    description: "Conseguí más clientes y convertí más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.",
    creator: "@delanoegrowth",
    images: ["/branding/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://delanoegrowth.com/#organization",
        "name": "Delanoe Growth",
        "alternateName": "Delanoe Growth - Agencia de Marketing Digital",
        "url": "https://delanoegrowth.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://delanoegrowth.com/branding/logo-principal-sin-fondo.png"
        },
        "image": "https://delanoegrowth.com/branding/logo-principal-sin-fondo.png",
        "description":
          "Agencia de marketing digital y adquisición de clientes en Neuquén. Ayudamos a empresas y profesionales a captar clientes mediante Google Ads, Meta Ads y landing pages de alta conversión.",
        "telephone": "+5492996736980",
        "email": "delanoegrowth@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Neuquén",
          "addressRegion": "Neuquén",
          "addressCountry": "AR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -38.951611,
          "longitude": -68.059104
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Neuquén"
          },
          {
            "@type": "City",
            "name": "Cipolletti"
          },
          {
            "@type": "Country",
            "name": "Argentina"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/lautaro-tomas-montero/"
        ],
        "founder": {
          "@id": "https://delanoegrowth.com/#person"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Marketing Digital y Adquisición",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads",
                "description": "Campañas de búsqueda e intención de compra en Google Ads para captar clientes calificados."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Meta Ads",
                "description": "Publicidad estratégica en Facebook e Instagram para maximizar conversiones."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Pages de Alta Conversión",
                "description": "Diseño y desarrollo de páginas de aterrizaje optimizadas para convertir visitas en clientes."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sistema de Adquisición de Clientes",
                "description": "Estrategia integral, análisis comercial y optimización de procesos de venta."
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://delanoegrowth.com/#person",
        "name": "Tomás Lautaro Delanoe Montero",
        "alternateName": "Tomas Montero",
        "url": "https://delanoegrowth.com",
        "jobTitle": "Fundador & Especialista en Adquisición y Marketing Digital",
        "worksFor": {
          "@id": "https://delanoegrowth.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/in/lautaro-tomas-montero/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://delanoegrowth.com/#website",
        "url": "https://delanoegrowth.com",
        "name": "Delanoe Growth",
        "description": "Agencia de Marketing Digital y Adquisición de Clientes en Neuquén",
        "publisher": {
          "@id": "https://delanoegrowth.com/#organization"
        },
        "inLanguage": "es-AR"
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased selection:bg-primary-100 selection:text-primary-900`}
      >
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
