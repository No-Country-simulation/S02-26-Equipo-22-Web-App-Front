"use client";

import Header from "@/_component/landing/Header";
import Footer from "@/_component/landing/Footer";
import HorseGrid from "@/_component/landing/HorseGrid";
import { products } from "@/data/products";
import { Filter } from "lucide-react";

export default function CatalogPage() {
    return (
        <div className="min-h-screen bg-[#F4F1EC] font-sans">
            <Header />
            <main className="py-8">
                <div className="container mx-auto px-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-light text-[#1F140D] mb-2">Catálogo Completo</h1>
                        <p className="text-gray-600">Explora nuestra selección de caballos y equipamiento.</p>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E0D8] rounded-full text-[#1F140D] hover:bg-[#F4F1EC] transition-colors shadow-sm font-medium">
                        <Filter size={18} />
                        <span>Filtrar</span>
                    </button>
                </div>

                <div className="space-y-8">
                    <HorseGrid title="Caballos" products={products.filter(p => p.category === 'Caballos')} viewMoreLink="/catalog/caballos" />
                    <HorseGrid title="Equipamiento" products={products.filter(p => p.category === 'Equipamiento')} viewMoreLink="/catalog/equipamiento" />
                    <HorseGrid title="Todos los Productos" products={products} viewMoreLink="/catalog/todos" />
                </div>
            </main>
            <Footer />
        </div>
    );
}
