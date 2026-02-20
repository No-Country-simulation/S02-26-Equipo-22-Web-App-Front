"use client";

import Header from "@/_component/landing/Header";
import Hero from "@/_component/landing/Hero";
import Categories from "@/_component/landing/Categories";
import HorseGrid from "@/_component/landing/HorseGrid";
import Footer from "@/_component/landing/Footer";
import WelcomeScreen from "@/_component/landing/WelcomeScreen";
import { useState, useEffect } from "react";
import { products } from "@/data/products";

// Página de Inicio (Home)
// Estructura principal de la Landing Page
export default function Home() {
  // Estado para controlar la visualización de la pantalla de bienvenida
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-[#F4F1EC] font-sans">
      {/* Muestra el WelcomeScreen si showWelcome es true */}
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}

      {/* Contenido principal con transición de opacidad */}
      {/* Se mantiene oculto (opacity-0) mientras se muestra el WelcomeScreen */}
      <div className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <Categories />
          <div className="space-y-4">
            {/* Secciones de grid de productos usando datos mockeados */}
            <HorseGrid title="Basado en tu última visita" products={products.slice(0, 5)} />
            <HorseGrid title="Ofertas de la semana" products={products.slice(5, 10)} />

            <div className="container mx-auto px-4 py-8">
              {/* Banner publicitario o promocional (Placeholder) */}
              <div className="w-full h-32 bg-[#C9A24D] shadow-sm flex items-center justify-center text-white text-xl font-light">
                Financia tu compra
              </div>
            </div>

            <HorseGrid title="Inspirado en lo que viste" products={products.slice(2, 7)} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
