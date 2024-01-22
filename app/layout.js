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
      <body className={`${rubik.className} h-full`}>
        {children}
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"
        ></script>
      </body>
    </html>
  );
}
