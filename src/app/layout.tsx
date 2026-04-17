import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabañas del Desierto | Descanso y Naturaleza",
  description: "Reserva tu estadía en nuestras cabañas y disfruta de la tranquilidad de la naturaleza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link
          rel="preload"
          as="video"
          href="/videos/hero-desierto.mp4"
          type="video/mp4"
        />
      </head>
      <body className="antialiased min-h-screen bg-stone-50 text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
