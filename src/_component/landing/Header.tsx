import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

// Componente Header (Encabezado)
// Contiene el logo, barra de búsqueda, navegación y acciones de usuario
export default function Header() {
    return (
        // Encabezado fijo con fondo oscuro y borde inferior
        <header className="bg-[#1F140D] border-b border-gray-200">
            <div className="w-full px-6 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo de la marca: Redirige al inicio */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <img
                            src="/images/LOGO.png"
                            alt="EquiHorse Logo"
                            className="h-20 w-auto object-contain"
                        />
                        <span className="text-2xl font-bold text-fff-900 tracking-tight">
                            EQUI<span className="font-light">TRUST</span>
                        </span>
                    </Link>

                    {/* Barra de Búsqueda (Visible solo en escritorio 'hidden md:flex') */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Buscar caballos, razas y más..."
                                className="w-full h-10 px-4 pr-10 rounded-sm shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-700 placeholder-gray-400 bg-white"
                            />
                            {/* Botón de lupa dentro del input */}
                            <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-500 border-l border-gray-200">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Botón de Menú Hamburguesa (Solo visible en móviles 'md:hidden') */}
                    <button className="md:hidden p-2 text-gray-700">
                        <Menu size={24} />
                    </button>

                    {/* Barra de Navegación Principal (Escritorio) */}
                    <div className="hidden md:block">
                        <nav className="flex items-center gap-6 text-sm text-white font-light">
                            <Link href="#" className="hover:text-[#C9A24D] transition-colors">Categorías</Link>
                            <Link href="/catalog" className="hover:text-[#C9A24D] transition-colors">Catálogo</Link>
                            <Link href="#" className="hover:text-[#C9A24D] transition-colors">Ofertas</Link>
                            <Link href="#" className="hover:text-[#C9A24D] transition-colors">Historial</Link>
                            <Link href="#" className="hover:text-[#C9A24D] transition-colors">Vender</Link>
                            <Link href="#" className="hover:text-[#C9A24D] transition-colors">Ayuda</Link>
                        </nav>
                    </div>

                    {/* Acciones de Usuario (Crear cuenta, Ingresar, Carrito) */}
                    <div className="hidden md:flex items-center gap-4 text-sm text-white">
                        <Link href="#" className="font-medium hover:text-[#C9A24D] transition-colors">Crea tu cuenta</Link>
                        <Link href="#" className="font-medium hover:text-[#C9A24D] transition-colors">Ingresa</Link>
                        <Link href="#" className="font-medium hover:text-[#C9A24D] transition-colors">Mis compras</Link>
                        <Link href="#" className="hover:text-[#C9A24D] text-white transition-colors"><ShoppingCart size={20} strokeWidth={1.5} /></Link>
                    </div>
                </div>

                {/* Barra de Búsqueda Móvil (Se muestra debajo del header en pantallas pequeñas) */}
                <div className="mt-3 md:hidden">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Estoy buscando..."
                            className="w-full h-10 px-4 pr-10 rounded shadow-sm border-none text-gray-700 placeholder-gray-400 bg-white"
                        />
                        <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-500">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
