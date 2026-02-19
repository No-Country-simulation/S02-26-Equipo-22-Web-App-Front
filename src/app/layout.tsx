import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import ContextProvider from "@/_component/context/ContextProvider";
import { UseContextProvider } from "@/_component/context/UseContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EquiHorse",
  description: "Buscar caballos, razas y más...",
  icons: {
    icon: "logo-equino.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <UseContextProvider>
        <body>{children}</body>
      </UseContextProvider>
    </html>
  );
}
