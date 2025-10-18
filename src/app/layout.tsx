import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Community Manager - Gestión de Redes Sociales",
  description: "Experta en gestión de redes sociales y marketing digital para hacer crecer tu marca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}