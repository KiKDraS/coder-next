import { ThemeModeScript } from "flowbite-react";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Base de datos Pokemon",
  description: "Busca y almacena a tus Pokemon favoritos",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full bg-white">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${rubik.className} h-full`}>{children}</body>
    </html>
  );
}
