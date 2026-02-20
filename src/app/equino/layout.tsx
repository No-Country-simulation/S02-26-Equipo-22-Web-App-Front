"use client";

import Header from "@/_component/landing/Header";
import Footer from "@/_component/landing/Footer";
import WelcomeScreen from "@/_component/landing/WelcomeScreen";
import { useState, useEffect } from "react";
import Hero from "@/_component/landing/Hero";
import HorseGrid from "@/_component/landing/HorseGrid";

export default function EquinoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <div className="min-h-screen bg-[#F4F1EC] font-sans">
            {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}

            <div className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                <Header />
                <Hero></Hero>
                {/* <HorseGrid></HorseGrid> */}
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}
