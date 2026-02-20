import Link from 'next/link';
import Image from 'next/image';

import { products as defaultProducts } from '@/data/products';

// Definición de la estructura de datos para un Producto (Caballo)
interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    installments: string;
    shipping: string;
    category?: string;
}

// Props del componente HorseGrid
// - title: Título de la sección
// - products: (Opcional) Array de productos a mostrar. Si no se pasa, usa los default.
// - viewMoreLink: (Opcional) Link al que redirige 'Ver más'
interface HorseGridProps {
    title: string;
    products?: Product[];
    viewMoreLink?: string;
}

// Componente HorseGrid (Cuadrícula de Caballos)
// Muestra una lista de productos en formato de grid/tarjetas
export default function HorseGrid({ title, products = defaultProducts.slice(0, 5), viewMoreLink }: HorseGridProps) {
    // Determina qué productos mostrar: los pasados por props o los predeterminados (primeros 5)
    const itemsToDisplay = products;

    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                {/* Cabecera de la sección con título, línea separadora y enlace 'Ver más' */}
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl text-gray-800 font-light">{title}</h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                    {viewMoreLink ? (
                        <Link href={viewMoreLink} className="text-sm text-[#C9A24D] hover:underline">
                            Ver más
                        </Link>
                    ) : (
                        <a href="#" className="text-sm text-[#C9A24D] hover:underline">Ver más</a>
                    )}
                </div>

                {/* Grid Responsivo: 1 columna en móvil, hasta 5 en pantallas grandes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {itemsToDisplay.map((horse) => (
                        // Tarjeta de Producto individual
                        <div key={horse.id} className="bg-white rounded-md shadow-sm hover:shadow-[0_4px_15px_rgba(201,162,77,0.5)] transition-shadow duration-300 border border-gray-100 cursor-pointer overflow-hidden flex flex-col">
                            {/* Imagen del caballo */}
                            <div className="relative h-56 w-full border-b border-gray-100">
                                <img
                                    src={horse.image}
                                    alt={horse.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Información del producto (Precio, Cuotas, Envío, Nombre) */}
                            <div className="p-4 flex flex-col gap-1 flex-1">
                                <div className="mb-1">
                                    <span className="text-xl md:text-2xl text-gray-800 font-normal">{horse.price}</span>
                                </div>
                                {horse.installments && (
                                    <span className="text-xs md:text-sm text-[#1F140D] font-medium">{horse.installments}</span>
                                )}
                                {horse.shipping && (
                                    <span className="text-xs text-[#1F140D] font-bold mt-1 bg-green-50 w-fit px-1 rounded">{horse.shipping}</span>
                                )}
                                <h3 className="text-sm text-gray-600 font-light mt-2 line-clamp-2 leading-snug group-hover:text-gray-800">
                                    {horse.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
