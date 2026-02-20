import Image from 'next/image';

// Componente Hero (Banner Principal)
// Muestra una imagen destacada grande con un mensaje de bienvenida y llamada a la acción
export default function Hero() {
    return (
        <div className="w-full bg-gray-100 py-4">
            <div className="container mx-auto px-4">
                {/* Contenedor de la imagen principal con altura fija y bordes redondeados */}
                <div className="relative w-full h-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-900">
                    {/* Capa de degradado (Overlay) para mejorar la lectura del texto sobre la imagen */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 flex flex-col justify-center px-12">
                        {/* Título Principal */}
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                            Los Mejores Equinos <br /> en un solo lugar
                        </h2>
                        {/* Subtítulo descriptivo */}
                        <p className="text-gray-200 text-lg mb-6 max-w-lg">
                            Encuentra la calidad, raza y linaje que buscas con la seguridad de EQUI HORSE.
                        </p>
                        {/* Botón de Llamada a la Acción (CTA) */}
                        <button className="bg-[#C9A24D] hover:bg-[#9E7C32] text-white font-semibold py-3 px-8 rounded-md w-fit transition-colors shadow-md">
                            Ver ofertas
                        </button>
                    </div>

                    {/* Imagen de Fondo (Placeholder semántico) */}
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
                        {/* Texto para lectores de pantalla */}
                        <span className="sr-only">Banner de caballos</span>
                        {/* Imagen de fondo real (actualmente una URL de Unsplash) */}
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1471&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
