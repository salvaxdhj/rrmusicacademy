import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, ShoppingBag } from 'lucide-react';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes Somos?', path: '/about' },
    { name: 'Maestros', path: '/teachers' },
    { name: 'Elencos RR', path: '/elencos' }, 
    { name: 'Nuestro Director', path: '/director' },
    { name: 'Galería', path: '/gallery' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-rr-blue font-semibold' : 'text-gray-600 hover:text-rr-blue';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-center lg:space-x-12 xl:space-x-24 h-20 md:h-28 w-full">
          
          {/* 1. LOGO Y SLOGAN (Izquierda) */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="flex items-center gap-3 md:gap-4 group">
              <img 
                src={IMAGES.logo} 
                alt="RR Music Academy Logo" 
                className="w-[110px] h-[110px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-['Oswald'] text-base md:text-lg font-bold text-rr-blue tracking-tight leading-tight uppercase whitespace-nowrap">LIVE, CONNECT,</span>
                <span className="font-['Oswald'] text-base md:text-lg font-bold text-rr-blue tracking-tight leading-tight uppercase whitespace-nowrap">AND BREATHE MUSIC</span>
              </div>
            </Link>
          </div>

          {/* 2. MENÚ DE NAVEGACIÓN (Centro) */}
          <div className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`transition-colors duration-200 text-sm font-medium tracking-wide whitespace-nowrap ${isActive(link.path)}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. BOTONES DE ACCIÓN (Derecha) */}
          <div className="flex-shrink-0 flex items-center justify-center gap-3 md:gap-4 ml-auto lg:ml-0">
            {/* BOTÓN VER PLANES - Visible solo en desktop */}
            <div className="hidden lg:block">
                <Link 
                    to="/plans"
                    className="bg-rr-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
                >
                    <Star className="w-4 h-4 fill-white" />
                    Ver Planes
                </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-rr-blue focus:outline-none p-2">
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-blue-50 text-rr-blue' : 'text-gray-600 hover:bg-gray-50'}`}>
                {link.name}
              </Link>
            ))}

            <div className="pt-4">
                <Link 
                    to="/plans"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-rr-blue text-white px-5 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                    VER PLANES
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
