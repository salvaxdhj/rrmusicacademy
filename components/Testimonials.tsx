import React, { useState } from 'react';
import { MapPin, Calendar, Globe, Camera, Plane, Hand, Star } from 'lucide-react';
import { IMAGES } from '../constants';

const Testimonials: React.FC = () => {
  // Estado para controlar el índice de la foto activa de cada viaje
  // Usamos un objeto { [tripId]: activeIndex }
  const [activeIndices, setActiveIndices] = useState<{[key: number]: number}>({ 1: 0, 2: 0, 3: 0 });

  const handleNextPhoto = (tripId: number, totalPhotos: number) => {
    setActiveIndices(prev => ({
      ...prev,
      [tripId]: (prev[tripId] + 1) % totalPhotos
    }));
  };

  // Datos de las giras con 4 imágenes cada una (Usando las rutas ESPECÍFICAS definidas en constants)
  const trips = [
    {
      id: 1,
      title: "Gira Europea: Viena y Praga",
      year: "2024",
      date: "Julio 15 - Agosto 02",
      description: "Nuestra orquesta sinfónica tuvo el honor de presentarse en la histórica Musikverein de Viena. Un viaje de 18 días donde nuestros alumnos no solo tocaron, sino que respiraron la historia de la música clásica.",
      // Ahora usamos el array dedicado a Viena
      gallery: IMAGES.experiences.vienna,
      highlights: ["Concierto en Musikverein", "Masterclass en el Conservatorio de Praga", "Intercambio cultural"],
      location: "Austria & Rep. Checa"
    },
    {
      id: 2,
      title: "Festival Internacional de Cusco",
      year: "2023",
      date: "Octubre 10 - Octubre 15",
      description: "Llevamos nuestra música a las alturas. Participación destacada en el encuentro de orquestas juveniles, fusionando repertorio clásico con música tradicional andina en escenarios mágicos.",
      // Ahora usamos el array dedicado a Cusco
      gallery: IMAGES.experiences.cusco,
      highlights: ["Presentación en Qorikancha", "Visita a Machu Picchu", "Taller de música andina"],
      location: "Cusco, Perú"
    },
    {
      id: 3,
      title: "Intercambio Musical en Brasil",
      year: "2022",
      date: "Noviembre 05 - Noviembre 12",
      description: "Una experiencia vibrante en Sao Paulo. Nuestros alumnos de la banda de Jazz y Percusión compartieron escenario con escuelas locales, aprendiendo sobre Bossa Nova y ritmos afro-brasileños.",
      // Ahora usamos el array dedicado a Brasil
      gallery: IMAGES.experiences.brazil,
      highlights: ["Jam Sessions en Sao Paulo", "Clínica de Samba", "Concierto final conjunto"],
      location: "Sao Paulo, Brasil"
    }
  ];

  // Helper para determinar el estilo de la carta según su posición en el stack
  const getCardStyle = (index: number, activeIndex: number, total: number) => {
    // Calculamos la distancia relativa desde la carta activa (en ciclo)
    // Esto asegura que si estamos en el indice 3 y pasamos al 0, se calcule correctamente
    const position = (index - activeIndex + total) % total;

    // Estilos base para todas las cartas
    const baseStyle = "absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 ease-out border-4 border-white cursor-pointer select-none";

    if (position === 0) {
      // CARTA SUPERIOR (ACTIVA)
      return {
        className: `${baseStyle} z-30 scale-100 opacity-100 rotate-0 hover:scale-[1.02]`,
        style: { transformOrigin: 'bottom center' }
      };
    } else if (position === 1) {
      // SEGUNDA CARTA (DEBAJO)
      return {
        className: `${baseStyle} z-20 scale-95 opacity-100`,
        style: { transform: 'translateX(12px) translateY(12px) rotate(4deg)' }
      };
    } else if (position === 2) {
      // TERCERA CARTA (FONDO)
      return {
        className: `${baseStyle} z-10 scale-90 opacity-100`,
        style: { transform: 'translateX(24px) translateY(24px) rotate(8deg)' }
      };
    } else {
      // CARTAS OCULTAS (Esperando su turno en el ciclo)
      return {
        className: `${baseStyle} z-0 opacity-0 scale-75`,
        style: { transform: 'translateX(0px) translateY(0px)' }
      };
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* HEADER BANNER */}
      <div className="relative h-[60vh] bg-rr-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.experiences.header}
            alt="Orquesta en viaje"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute inset-0 bg-gray-900 flex items-center justify-center">
             <span className="text-white text-opacity-30 font-bold text-4xl">FONDO: experiences_header.jpg</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-rr-dark via-transparent to-black/30"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-blue-200 text-sm font-medium tracking-widest uppercase mb-4 animate-bounce">
                <Plane className="w-4 h-4" /> Bitácora de Viaje
            </div>
            <h1 className="font-['Oswald'] text-5xl md:text-7xl text-white font-bold uppercase tracking-tight drop-shadow-2xl mb-6">
                Nuestras Giras
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                La música nos lleva lejos. Haz clic en las fotos para ver más recuerdos.
            </p>
        </div>
      </div>

      {/* SECCIÓN DE VIAJES */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        
        {/* Fondo decorativo */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="map-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <path d="M10,10 Q50,50 90,10 T180,50" fill="none" stroke="#000" strokeWidth="2"/>
                    <path d="M0,100 Q50,150 100,100 T200,150" fill="none" stroke="#000" strokeWidth="2"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#map-pattern)" />
             </svg>
        </div>

        <div className="max-w-6xl mx-auto space-y-32 relative z-10">
            
            {trips.map((trip, index) => (
                <div key={trip.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* --- COMPONENTE DE MAZO DE FOTOS (PHOTO STACK) --- */}
                    <div className="w-full lg:w-1/2 relative group perspective-1000 pl-8 pb-8">
                        {/* Decoración de fondo detrás del stack */}
                        <div className="absolute inset-0 bg-rr-blue/5 rounded-full filter blur-3xl transform scale-90 translate-y-4"></div>
                        
                        <div 
                            className="relative w-full aspect-[4/3]"
                            onClick={() => handleNextPhoto(trip.id, trip.gallery.length)}
                        >
                            {trip.gallery.map((photo, photoIndex) => {
                                const { className, style } = getCardStyle(photoIndex, activeIndices[trip.id], trip.gallery.length);
                                
                                return (
                                    <img 
                                        key={photoIndex}
                                        src={photo} 
                                        alt={`${trip.title} - Foto ${photoIndex + 1}`} 
                                        className={className}
                                        style={style}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            // Fallback text if image missing
                                            const fallback = e.currentTarget.parentElement?.querySelector('.fallback-text');
                                            if(fallback && photoIndex === activeIndices[trip.id]) {
                                                fallback.classList.remove('hidden');
                                            }
                                        }}
                                    />
                                );
                            })}
                            
                            {/* Fallback visual si faltan imágenes (aparece detrás) */}
                            <div className="fallback-text hidden absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl border-4 border-white z-0">
                                <span className="text-gray-500 font-bold border border-gray-400 p-2 border-dashed">
                                    FALTA FOTO {trip.title}
                                </span>
                            </div>

                            {/* Hint de Interacción (Solo aparece al hover) */}
                            <div className="absolute -bottom-8 right-0 z-40 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-rr-blue">
                                <Hand className="w-5 h-5 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest">Clic para ver siguiente</span>
                            </div>

                            {/* Overlay Fecha (Stamp style) - Siempre visible y fijo */}
                            <div className="absolute -top-6 -left-6 z-50 bg-rr-blue text-white px-5 py-4 rounded-lg shadow-xl border-4 border-white transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                                <span className="block font-['Oswald'] text-2xl font-bold leading-none text-center">{trip.year}</span>
                                <span className="block text-[10px] uppercase tracking-wider text-center mt-1 text-blue-200">Tour</span>
                            </div>
                        </div>
                    </div>

                    {/* INFORMACIÓN DEL VIAJE */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-2 text-rr-blue font-bold tracking-wider uppercase text-sm mb-3">
                            <MapPin className="w-4 h-4" /> {trip.location}
                        </div>
                        <h2 className="font-['Oswald'] text-4xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
                            {trip.title}
                        </h2>
                        
                        <div className="flex items-center gap-3 text-gray-500 text-sm mb-6 border-b border-gray-200 pb-4">
                            <Calendar className="w-4 h-4" />
                            <span>{trip.date}</span>
                            <span className="mx-2 text-gray-300">|</span>
                            <Globe className="w-4 h-4" />
                            <span>Gira Internacional</span>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {trip.description}
                        </p>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" /> Destacados del viaje:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {trip.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm bg-white p-2 rounded border border-gray-100 shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-rr-blue rounded-full"></div>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}

        </div>
      </div>

      {/* GALERÍA EXTRA */}
      <div className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h3 className="font-['Oswald'] text-3xl text-gray-900 uppercase">Momentos Inolvidables</h3>
                  <p className="text-gray-500 mt-2">Capturas espontáneas de nuestros alumnos alrededor del mundo</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {IMAGES.gallery.map((imgUrl, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg aspect-square bg-gray-100 cursor-pointer">
                    <img 
                        src={imgUrl} 
                        alt={`Momento ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">FOTO {index+1}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </div>

    </div>
  );
};

export default Testimonials;