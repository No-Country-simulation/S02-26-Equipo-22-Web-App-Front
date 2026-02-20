"use client";

import Header from "@/_component/landing/Header";
import Footer from "@/_component/landing/Footer";

export default function TodosProductosPage() {
    return (
        <div className="min-h-screen bg-[#F4F1EC] font-sans">
            <Header />
            <main className="py-8">
                <div className="container mx-auto px-4 mb-8">
                    <h1 className="text-3xl font-light text-[#1F140D] mb-2">Todos los Productos</h1>
                    <p className="text-gray-600">Página en construcción para todos los productos.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
