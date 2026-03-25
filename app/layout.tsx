import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomas Montero | Desarrollo de Software",
  description:
    "Páginas web profesionales en 24h. Si tu negocio no está online, estás perdiendo clientes.",
  openGraph: {
    title: "Tomas Montero | Desarrollo de Software",
    description:
      "Páginas web profesionales en 24h. Si tu negocio no está online, estás perdiendo clientes.",
    locale: "es_AR",
    type: "website",
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
