import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.hero.carousel.length);
    }, 3000); // 3 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 flex flex-col">
          
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 z-20"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {/* NUEVO SLOGAN */}
                <span className="block xl:inline">First human beings;</span>{' '}
                <span className="block text-rr-blue xl:inline">then musicians</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-justify">
                RR Academy es una escuela de música única en su tipo, destinada a formar talentos musicales en instrumentos de su preferencia
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                
                {/* BOTÓN PRIMARIO: CONÓCENOS (Antes era Ver Planes) */}
                <div className="rounded-md shadow">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rr-blue hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Conócenos
                  </Link>
                </div>

                {/* BOTÓN SECUNDARIO: VER PLANES (Antes era Conócenos) */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/plans"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-rr-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all"
                  >
                    Ver Planes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 overflow-hidden h-56 sm:h-72 md:h-96 lg:h-full relative">
        <div 
            className="flex flex-nowrap h-full transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {IMAGES.hero.carousel.map((imgSrc, index) => (
                <div key={index} className="min-w-full w-full h-full relative flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={imgSrc}
                        alt={`Slide ${index + 1}`}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            e.currentTarget.nextElementSibling?.classList.add('flex');
                        }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-300">
                         <span className="text-gray-500 font-bold border-2 border-dashed border-gray-400 p-4 text-center">
                            FALTA FOTO {index + 1}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;