import React from 'react';
import { ArrowRight, Music, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Plans: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-rr-dark py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden bg-rr-dark">
          <img
            src={IMAGES.plans.header}
            alt="Musical instruments"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-4xl font-bold text-white uppercase tracking-widest border-4 border-white p-4">
                    FONDO: plans_header.jpg
                </span>
           </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Programas Educativos</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elige tu camino musical
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
            Contamos con dos programas especializados según tu nivel y objetivos.
          </p>
        </div>
      </div>

      {/* Category Selection Grid - DISEÑO PERSONALIZADO TIPO FLYER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* JUNIOR CARD */}
            <Link 
                to="/plans/junior"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl bg-gradient-to-br from-[#1e3a8a] via-[#4c1d95] to-[#7c3aed]"
            >
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <span className="font-sans lowercase tracking-[0.2em] text-cyan-200 text-lg mb-2">junior</span>
                    
                    <h2 className="font-oswald font-bold text-6xl text-white drop-shadow-lg tracking-tight leading-none mb-0">
                        MUSIC
                    </h2>
                    
                    <div className="relative">
                        <span className="font-cursive text-5xl text-[#38bdf8] transform -rotate-6 block mt-[-10px] drop-shadow-md">
                            Summer
                        </span>
                    </div>
                    
                    <span className="uppercase tracking-widest text-sm text-white font-bold mt-6 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all">
                        program 2026
                    </span>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

            {/* DIPLOMA CARD */}
            <Link 
                to="/plans/diploma"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl bg-gradient-to-br from-[#2e1065] to-black"
            >
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <h2 className="font-oswald font-bold text-6xl text-white lowercase tracking-tighter leading-none mb-0">
                        music
                    </h2>
                    
                    <div className="relative z-10">
                        <span className="font-cursive text-6xl text-blue-600 transform -rotate-3 block mt-[-20px] drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                            Diploma
                        </span>
                        {/* Efecto de borde sutil duplicando texto */}
                        <span className="absolute top-0 left-0 font-cursive text-6xl text-white opacity-20 transform -rotate-3 blur-[1px] translate-x-[2px] translate-y-[2px]">
                            Diploma
                        </span>
                    </div>
                    
                    <span className="uppercase tracking-widest text-sm text-gray-400 mt-6 border-t border-gray-600 pt-2 px-8">
                        summer program 2026
                    </span>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-1 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            ¿Tienes dudas sobre cuál elegir? 
            <button onClick={scrollToContact} className="text-rr-blue font-semibold ml-1 hover:underline focus:outline-none">Contáctanos</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plans;