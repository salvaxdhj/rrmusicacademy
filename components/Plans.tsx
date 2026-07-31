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
            Contamos con diversos programas especializados según tu nivel y objetivos.
          </p>
        </div>
      </div>
      {/* Category Selection Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* JUNIOR CARD */}
            <Link 
                to="/plans/junior"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
            >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <span className="font-sans lowercase tracking-[0.2em] text-rr-blue text-lg mb-2">junior</span>
                    
                    <h2 className="font-oswald font-bold text-6xl text-gray-900 tracking-tight leading-none mb-0">
                        MUSIC
                    </h2>
                    
                    <div className="relative mt-2">
                        <span className="uppercase tracking-widest text-sm text-gray-600 font-bold bg-gray-100 px-6 py-2 rounded-full">
                            Program
                        </span>
                    </div>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-2 bg-rr-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

            {/* DIPLOMA CARD */}
            <Link 
                to="/plans/diploma"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
            >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <h2 className="font-oswald font-bold text-6xl text-gray-900 lowercase tracking-tighter leading-none mb-0">
                        music
                    </h2>
                    
                    <div className="relative z-10 mt-2">
                        <span className="font-cursive text-6xl text-rr-blue transform -rotate-3 block">
                            Diploma
                        </span>
                    </div>
                    
                    <span className="uppercase tracking-widest text-sm text-gray-500 mt-8 border-t border-gray-200 pt-4 px-8">
                        Program
                    </span>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-2 bg-rr-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

            {/* PREPARATORY CARD */}
            <Link 
                to="/plans/preparatory"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
            >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <span className="font-sans lowercase tracking-[0.2em] text-rr-blue text-lg mb-2">preparatory</span>
                    
                    <h2 className="font-oswald font-bold text-5xl sm:text-6xl text-gray-900 tracking-tight leading-none mb-0">
                        MUSIC
                    </h2>
                    
                    <div className="relative mt-2">
                        <span className="uppercase tracking-widest text-sm text-gray-600 font-bold bg-gray-100 px-6 py-2 rounded-full">
                            Program
                        </span>
                    </div>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-2 bg-rr-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

            {/* ON STAGE CARD */}
            <Link 
                to="/plans/onstage"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
            >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <span className="font-sans lowercase tracking-[0.2em] text-rr-blue text-lg mb-2">on stage</span>
                    
                    <h2 className="font-oswald font-bold text-5xl sm:text-6xl text-gray-900 tracking-tight leading-none mb-0">
                        MUSIC
                    </h2>
                    
                    <div className="relative mt-2">
                        <span className="uppercase tracking-widest text-sm text-gray-600 font-bold bg-gray-100 px-6 py-2 rounded-full">
                            Program
                        </span>
                    </div>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-2 bg-rr-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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