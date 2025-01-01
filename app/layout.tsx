import type { Metadata } from "next";
import Logo from "../public/images/logo.png";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Mejora el rendimiento de carga de fuentes
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apotheddy | Desarrollador Web",
  description: "Portafolio profesional de Apotheddy. Desarrollador web especializado en crear experiencias digitales únicas y funcionales.",
  keywords: ["desarrollo web", "portafolio", "frontend", "backend", "full stack", "next.js", "react"],
  authors: [{ name: "Apotheddy" }],
  creator: "Apotheddy",
  publisher: "Apotheddy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Apotheddy | Desarrollador Web",
    description: "Portafolio profesional de Apotheddy. Desarrollador web especializado en crear experiencias digitales únicas y funcionales.",
    siteName: "Apotheddy Portfolio",
    images: [
      {
        url: Logo.src,
        width: 1200,
        height: 630,
        alt: "Apotheddy Portfolio Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href={Logo.src} />
        <link rel="apple-touch-icon" href={Logo.src} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        itemScope
        itemType="http://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}
