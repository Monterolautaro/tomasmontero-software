import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tomasmontero.com"), 
  title: {
    default: "Delanoe Growth | Adquisición de Clientes",
    template: "%s | Delanoe Growth"
  },
  description:
    "Agencia de adquisición de clientes para pymes y negocios. Combinamos marketing, análisis comercial y optimización de procesos para escalar tus ventas.",
  keywords: ["adquisición de clientes", "marketing digital", "crecimiento de negocios", "optimización de ventas", "Delanoe Growth", "Tomas Montero", "pymes"],
  authors: [{ name: "Delanoe Growth" }],
  creator: "Delanoe Growth",
  openGraph: {
    title: "Delanoe Growth | Adquisición de Clientes",
    description:
      "Conseguí más clientes y convertí más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.",
    url: "https://tomasmontero.com",
    siteName: "Delanoe Growth",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delanoe Growth | Adquisición de Clientes",
    description: "Conseguí más clientes y convertí más consultas en ventas. Combinamos marketing, análisis comercial y optimización de procesos.",
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
