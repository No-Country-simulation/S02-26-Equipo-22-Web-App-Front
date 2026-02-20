"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Componente de Pantalla de Bienvenida
// Recibe una función 'onComplete' que se ejecuta cuando la animación termina
export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
    // Estado para controlar la visibilidad (opacidad) del componente
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Temporizador 1: Inicia el desvanecimiento (fade out) después de 2.5 segundos
        const timer = setTimeout(() => {
            setIsVisible(false); // Cambia la opacidad a 0
        }, 2500);

        // Temporizador 2: Notifica al componente padre que la animación terminó por completo
        // Se ejecuta a los 3.5 segundos (1 segundo después de iniciar el fade out)
        const cleanup = setTimeout(() => {
            onComplete();
        }, 3500);

        // Limpieza: Cancela los temporizadores si el componente se desmonta antes de tiempo
        return () => {
            clearTimeout(timer);
            clearTimeout(cleanup);
        };
    }, [onComplete]);

    return (
        // Contenedor Principal:
        // - fixed inset-0: Ocupa toda la pantalla
        // - z-50: Se asegura de estar encima de otros elementos
        // - bg-[#1F140D]: Color de fondo café oscuro
        // - transition-opacity: Maneja la animación de desvanecimiento
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1F140D] transition-opacity duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Contenedor del contenido central con animación de pulso */}
            <div className="relative flex flex-col items-center animate-pulse">
                {/* Logo de la aplicación */}
                <div className="relative w-40 h-40 mb-6">
                    <img
                        src="/images/LOGO.png"
                        alt="EquiHorse Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                {/* Título Principal: EQUI (blanco) TRUST (dorado) */}
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest mb-2">
                    EQUI<span className="font-light text-[#C9A24D]">TRUST</span>
                </h1>
                {/* Eslogan decorado con borde superior */}
                <p className="text-[#C9A24D] text-lg md:text-xl font-light tracking-wide uppercase mt-4 border-t border-[#C9A24D]/30 pt-4">
                    La excelencia en cada galope
                </p>
            </div>

            {/* Barra de carga animada en la parte inferior */}
            <div className="absolute bottom-10 flex flex-col items-center gap-2">
                <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
                    {/* El elemento interior se mueve con la animación 'loading' definida abajo */}
                    <div className="h-full bg-[#C9A24D] animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            {/* Estilos CSS locales para la animación de la barra de carga */}
            <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}
