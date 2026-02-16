import type { Metadata } from "next";
import { Fjalla_One, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Fjalla_One({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jbermejoentrenamiento.com",
  ),
  title: "JBermejo Entrenamiento y Nutrición | Coaching Online",
  description:
    "Transforma tu cuerpo con un proceso cercano, personalizado y realista. Entrenamiento y nutrición con Javier Bermejo.",
  openGraph: {
    title: "JBermejo Entrenamiento y Nutrición",
    description:
      "Entrenamiento y nutrición online para personas que quieren un cambio físico sostenible.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
