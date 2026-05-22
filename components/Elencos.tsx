import React from 'react';
import { IMAGES } from '../constants';
import { Music, Users, Drum, Radio } from 'lucide-react';

const Elencos: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="relative bg-rr-dark py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden bg-rr-dark">
          <img
            src={IMAGES.elencos?.header}
            alt="Elencos RR"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Nuestros Elencos</h2>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elencos RR
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200 mx-auto">
            En RR Music Academy creemos que la música tiene el poder de emocionar, conectar e inspirar. Por ello, contamos con diversos elencos musicales conformados por talentosos músicos y artistas que representan nuestra pasión por la excelencia artística y el trabajo colectivo.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center text-gray-600 text-lg leading-relaxed">
              <p className="mb-4">
                Nuestros elencos están preparados para participar en conciertos, eventos culturales, ceremonias, festivales, producciones especiales y presentaciones corporativas, ofreciendo experiencias musicales de alto nivel y formatos adaptables a distintos tipos de público y escenarios.
              </p>
              <p>
                Cada presentación de RR busca transmitir calidad, sensibilidad y emoción a través de la música, integrando repertorios clásicos, contemporáneos, peruanos e internacionales.
              </p>
          </div>

          <div className="grid gap-12">
              
              {/* Orquesta Sinfónica */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
                  <div className="w-full relative h-[300px] md:h-[400px]">
                     <img src={IMAGES.elencos.orquesta} className="absolute inset-0 w-full h-full object-cover" alt="Orquesta Sinfónica RR" />
                  </div>
                  <div className="w-full p-8 md:p-12 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Music className="w-48 h-48" />
                      </div>
                      <div className="relative z-10">
                    <h3 className="text-3xl font-['Oswald'] font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Music className="text-rr-blue w-8 h-8"/>
                        Orquesta Sinfónica RR
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Nuestra Orquesta Sinfónica está conformada por más de 50 músicos en escena, integrando las principales familias instrumentales: cuerdas, maderas, metales y percusión.
                        </p>
                        <p>
                            La Orquesta Sinfónica RR desarrolla repertorios que abarcan música clásica, sinfónica contemporánea, música peruana, latinoamericana y producciones especiales, ofreciendo presentaciones de gran impacto artístico y visual.
                        </p>
                        <p>
                            Cada concierto representa una experiencia musical única, donde la fuerza colectiva de la orquesta y la sensibilidad interpretativa de sus músicos generan momentos memorables para el público.
                        </p>
                        <p>
                            La versatilidad de nuestro elenco nos permite participar en conciertos de gala, eventos institucionales, festivales, homenajes, producciones temáticas y espectáculos sinfónicos especiales.
                        </p>
                    </div>
                      </div>
                  </div>
              </div>

              {/* Coro Polifónico */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
                  <div className="w-full relative h-[300px] md:h-[400px]">
                     <img src={IMAGES.elencos.coro} className="absolute inset-0 w-full h-full object-cover" alt="Coro Polifónico RR" />
                  </div>
                  <div className="w-full p-8 md:p-12 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Users className="w-48 h-48" />
                      </div>
                      <div className="relative z-10">
                    <h3 className="text-3xl font-['Oswald'] font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Users className="text-rr-blue w-8 h-8"/>
                        Coro Polifónico RR
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            El Coro Polifónico RR está conformado por más de 30 coreutas que unen sus voces para interpretar repertorios de gran riqueza armónica y emocional.
                        </p>
                        <p>
                            Nuestro coro desarrolla obras clásicas, sacras, contemporáneas y populares, destacando por la calidad vocal, el trabajo interpretativo y la sensibilidad artística de cada presentación.
                        </p>
                        <p>
                            El Coro Polifónico RR participa en conciertos sinfónico-corales, ceremonias, festivales y producciones especiales, brindando una experiencia musical que conecta profundamente con el público a través de la fuerza y emotividad de las voces humanas.
                        </p>
                        <p>
                            La música coral representa una de las expresiones artísticas más poderosas de trabajo en equipo, disciplina y sensibilidad colectiva, valores que forman parte esencial de la visión de RR Music Academy.
                        </p>
                    </div>
                      </div>
                  </div>
              </div>

              {/* Banda Sinfónica */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
                  <div className="w-full relative h-[300px] md:h-[400px]">
                     <img src={IMAGES.elencos.banda} className="absolute inset-0 w-full h-full object-cover" alt="Banda Sinfónica RR" />
                  </div>
                  <div className="w-full p-8 md:p-12 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Drum className="w-48 h-48" />
                      </div>
                      <div className="relative z-10">
                    <h3 className="text-3xl font-['Oswald'] font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Drum className="text-rr-blue w-8 h-8"/>
                        Banda Sinfónica RR
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            La Banda Sinfónica RR está integrada por más de 40 músicos especializados en instrumentos de viento y percusión, ofreciendo una propuesta musical llena de energía, potencia y versatilidad sonora.
                        </p>
                        <p>
                            Nuestro repertorio abarca música sinfónica, peruana, contemporánea, bandas sonoras, música popular y producciones temáticas, adaptándose a distintos formatos y tipos de evento.
                        </p>
                        <p>
                            La Banda Sinfónica RR destaca por su fuerza interpretativa y capacidad de generar espectáculos musicales dinámicos y emocionantes, ideales para conciertos, festivales, ceremonias, eventos institucionales y presentaciones de gran formato.
                        </p>
                        <p>
                            Cada presentación combina calidad musical, precisión técnica y una puesta en escena diseñada para conectar con públicos de todas las edades.
                        </p>
                    </div>
                      </div>
                  </div>
              </div>

              {/* Ensambles Musicales */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
                  <div className="w-full relative h-[300px] md:h-[400px]">
                     <img src={IMAGES.elencos.ensambles} className="absolute inset-0 w-full h-full object-cover" alt="Ensambles Musicales RR" />
                  </div>
                  <div className="w-full p-8 md:p-12 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Radio className="w-48 h-48" />
                      </div>
                      <div className="relative z-10">
                    <h3 className="text-3xl font-['Oswald'] font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Radio className="text-rr-blue w-8 h-8"/>
                        Ensambles Musicales RR
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Además de nuestros grandes elencos, en RR Music Academy contamos con diversos formatos musicales diseñados para adaptarse a eventos y experiencias más íntimas o especializadas.
                        </p>
                        <p>
                            Entre ellos destacan nuestro Cuarteto de Cuerdas y Quinteto de Metales, integrados por músicos de alto nivel artístico y repertítulos cuidadosamente seleccionados para cada ocasión.
                        </p>
                        <p>
                            Estos ensambles ofrecen propuestas elegantes, versátiles y de gran calidad interpretativa para ceremonias, recepciones, eventos corporativos, actividades culturales, conciertos de cámara y producciones especiales.
                        </p>
                        <p>
                            Asimismo, RR desarrolla distintos formatos instrumentales y vocales según las necesidades de cada proyecto, creando experiencias musicales personalizadas que combinan excelencia artística, sensibilidad y cercanía con el público.
                        </p>
                    </div>
                      </div>
                  </div>
              </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Elencos;
