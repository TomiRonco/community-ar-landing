import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://community-ar-landing.vercel.app'),
  title: "Community AR - Community Management & Desarrollo Web en Alcorta, Santa Fe",
  description: "Transformá tu negocio con Community Management profesional, desarrollo web y marketing digital en Alcorta, Santa Fe. Conseguí más clientes con estrategias que funcionan. ¡Consulta gratuita!",
  keywords: [
    "community management Santa Fe",
    "desarrollo web Santa Fe", 
    "marketing digital Argentina",
    "gestión redes sociales Alcorta",
    "community manager profesional",
    "diseño web Santa Fe Argentina",
    "publicidad digital Santa Fe",
    "redes sociales empresas Argentina"
  ],
  authors: [{ name: "Community AR" }],
  creator: "Community AR",
  publisher: "Community AR",
  openGraph: {
    title: "Community AR - Community Management & Desarrollo Web en Santa Fe",
    description: "Transformá tu negocio con estrategias de marketing digital que funcionan. Especialistas en Santa Fe, Argentina.",
    url: "https://community-ar-landing.vercel.app",
    siteName: "Community AR",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community AR - Community Management & Desarrollo Web",
    description: "Especialistas en marketing digital y desarrollo web en Santa Fe, Argentina",
    creator: "@communityar_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="geo.region" content="AR-S" />
        <meta name="geo.placename" content="Alcorta, Santa Fe, Argentina" />
        <meta name="geo.position" content="-33.0561;-61.1137" />
        <meta name="ICBM" content="-33.0561, -61.1137" />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}