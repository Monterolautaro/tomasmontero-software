import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tomasmontero.top"), 
  title: {
    default: "Tomas Montero | Desarrollo de Software",
    template: "%s | Tomas Montero"
  },
  description:
    "Soluciones tecnológicas de alto impacto. Páginas web profesionales, apps y optimización de procesos para negocios digitales.",
  keywords: ["desarrollo de software", "páginas web", "Next.js", "Tomas Montero", "software Argentina", "digitalización de negocios"],
  authors: [{ name: "Tomas Montero" }],
  creator: "Tomas Montero",
  openGraph: {
    title: "Tomas Montero | Desarrollo de Software",
    description:
      "Impulsá tu negocio con tecnología. Desarrollo de software profesional y a medida.",
    url: "https://tomasmontero.top",
    siteName: "Tomas Montero Software",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomas Montero | Desarrollo de Software",
    description: "Soluciones tecnológicas profesionales para potenciar tu marca.",
    creator: "@tomasmontero", 
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
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased selection:bg-primary-100 selection:text-primary-900`}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
