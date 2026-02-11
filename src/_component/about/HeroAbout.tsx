import Image from 'next/image';

const HeroAbout = () => {
    return (
        <section className="relative h-[60vh] w-full bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/about/photo3.jpg"
                    alt="Caballos galopando en libertad"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
                    Nuestra Pasión por <span className="text-[#C9A24D]">Lo Equino</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-sm">
                    En <span className="font-semibold text-white">HorseTrust</span>, conectamos a amantes del caballo con su compañero ideal.
                    Desde 2026, facilitamos la compraventa responsable y segura, respaldados por la confianza de nuestra comunidad.
                </p>
            </div>
        </section>
    );
};

export default HeroAbout;