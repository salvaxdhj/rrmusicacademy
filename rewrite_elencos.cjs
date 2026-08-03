const fs = require('fs');

const content = `import React from 'react';
import { IMAGES } from '../constants';
import { Music, Users, Drum, Mail } from 'lucide-react';

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
          <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Temporada Artística 2026-II</h2>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elencos Artísticos RR Music Academy
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
                        Orquesta Sinfónica RR Music Academy (OSRR)
                    </h3>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Fundada en el año 2020, es uno de los elencos más representativos de la Escuela de Música RR Music Academy y se ha consolidado como un motor cultural clave en la capital. Está formada por diferentes familias instrumentales: <strong>cuerda</strong> (violín, viola, violonchelo y contrabajo), <strong>viento</strong> (flauta, oboe, clarinete, fagot, corno, trompeta, trombón, tuba) y <strong>percusión</strong> (timpanis, bombo, platillos xilófono, etc.).
                        </p>
                        <p>
                            Bajo la batuta de su Director Titular, el <strong>Maestro Rafael Reyes</strong>, la OSRR es reconocida por su versatilidad en el repertorio y la calidad de sus presentaciones en escenarios de prestigio como el Teatro Segura y el Performing Arts Center del Colegio Franklin Delano Roosevelt.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-rr-blue mb-2">Liderazgo Cultural y Formativo</h4>
                            <p className="text-base text-gray-700">La OSRR no solo se enfoca en la ejecución, sino en el liderazgo cultural y formativo: es <strong>Elenco Residente del Lima Conducting Workshop</strong>, un taller especializado en dirección de orquesta, banda sinfónica y coro.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Inclusión y Proyección Global</h4>
                            <p className="text-base text-gray-700">La OSRR se distingue por su filosofía de inclusión, acogiendo a músicos talentosos tanto de las zonas periféricas de Lima como de diversos países. Esta riqueza multicultural se evidencia con la participación de instrumentistas de Venezuela, Corea del Sur, China, Suiza, Estados Unidos y España. Además, su proyección es internacional, destacando su participación en el Young Artist Music Festival (YAMF) organizado por The Americas Cultural Youth Orchestra (ACYO) en Houston, Texas.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Servicio Comunitario y Filosofía</h4>
                            <p className="text-base text-gray-700">Esta formación integral se fundamenta en su lema: <em>"Live, connect and breathe music"</em>. A través de esta filosofía, la OSRR no solo fomenta la excelencia técnica, sino un profundo compromiso social. La orquesta viaja al interior del país para realizar servicio comunitario, capacitando a Orquestas Infantiles y Juveniles de zonas de escasos recursos económicos.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Directores Invitados</h4>
                            <p className="text-base text-gray-700">La OSRR ha tenido la oportunidad de trabajar bajo la batuta de directores de renombre nacional e internacional, entre los que destacan: Nicholas Leh Baker, Carlota Mestanza, Jordan Kuspa, Luis Vargas, y recientemente, tuvimos la visita de Dayner Tafur-Díaz, Director Asistente de la Orquesta Filarmónica de Berlín.</p>
                        </div>
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
                        Banda Sinfónica RR Music Academy (BSRR)
                    </h3>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Fundada en el año 2015, es uno de los elencos más representativos de la Escuela de Música RR Music Academy y se ha consolidado como un motor cultural clave en la capital. Está formada por diferentes familias instrumentales: <strong>viento madera</strong> (flauta, oboe, clarinete, fagot), <strong>viento metal</strong> (corno, trompeta, trombón, tuba) y <strong>percusión</strong> (timpanis, bombo, platillos, xilófono, etc.).
                        </p>
                        <p>
                            Bajo la batuta de su Director Titular, el <strong>Maestro Rafael Reyes</strong>, la BSRR es reconocida por su versatilidad en el repertorio y la calidad de sus presentaciones en escenarios de prestigio como el Teatro Municipal de Lima, Teatro de la UNIFE, Centro Cultural Ccori Wasi de la Universidad Ricardo Palma, Universidad Nacional de Música y el Performing Arts Center del Colegio Franklin Delano Roosevelt.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-rr-blue mb-2">Liderazgo Cultural y Formativo</h4>
                            <p className="text-base text-gray-700">La BSRR no solo se enfoca en la ejecución, sino en el liderazgo cultural y formativo: es <strong>el Elenco Residente del Lima Conducting Workshop</strong>, un taller especializado en dirección de orquesta, banda sinfónica y coro.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Inclusión y Proyección Global</h4>
                            <p className="text-base text-gray-700">La BSRR se distingue por su filosofía de inclusión, acogiendo a músicos talentosos tanto de las zonas periféricas de Lima como de diversos países. Esta riqueza multicultural se evidencia con la participación de instrumentistas de Venezuela, Corea del Sur, Alemania. Además, su proyección es internacional, han participado en diversos festivales, destacando su participación en el "Festival de la Colombianidad" (Tocancipá, Colombia - 2017).</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Servicio Comunitario y Filosofía</h4>
                            <p className="text-base text-gray-700">Esta formación integral se fundamenta en su lema: <em>"Live, connect and breathe music"</em>. A través de esta filosofía, la BSRR no solo fomenta la excelencia técnica, sino un profundo compromiso social. La orquesta viaja al interior del país para realizar servicio comunitario, capacitando a Orquestas Infantiles y Juveniles de zonas de escasos recursos económicos.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Directores y Solistas Invitados</h4>
                            <p className="text-base text-gray-700">La BSRR ha tenido la oportunidad de trabajar bajo la batuta de directores de renombre nacional e internacional, entre los que destacan: Nicholas Leh Baker, Gonzalo Sánchez, Briam Achury, Pablo Morales Daal, Bard Piquer.</p>
                            <p className="text-base text-gray-700 mt-2">Asimismo, ha acompañado a destacados solistas internacionales: Patricio Cosentino (Argentina - Alemania), Jhonny Pérez (Colombia).</p>
                        </div>
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
                        Coro Polifónico RR Music Academy
                    </h3>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Fundado en el año 2013, es el elenco más antiguo de la Escuela de Música RR Music Academy y se ha consolidado como un referente en el mundo coral en el Perú.
                        </p>
                        <p>
                            Bajo la batuta de su Director Titular, el <strong>Maestro Rafael Reyes</strong>, el Coro RR es reconocido por su versatilidad en el repertorio y la calidad de sus presentaciones en escenarios de prestigio como el Teatro Municipal del Cusco, Teatro de la UNIFE, Centro Cultural Ccori Wasi de la Universidad Ricardo Palma, Universidad Nacional de Música y Foyer del Gran Teatro Nacional.
                        </p>
                        
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Festivales y Producción Discográfica</h4>
                            <p className="text-base text-gray-700">El Coro ha participado en los Festivales Corales organizados por la Universidad Ricardo Palma. Asimismo, se ha presentado internacionalmente en ciudades como Tocancipá, Sopó, Gachancipá en Colombia. Resaltando su participación en el "Festival Coral Cusco 2018", donde interpretaron la "Misa de la Coronación" de Wolfgang Amadeus Mozart en el Teatro Municipal del Cusco junto a la Orquesta Sinfónica de Cusco.</p>
                            <p className="text-base text-gray-700 mt-2">En el año 2015, realizó su primera producción discográfica, el disco titulado <em>"Hanaq Pachap"</em> donde interpretan diversos temas corales peruanos y latinoamericanos.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Servicio Comunitario y Filosofía</h4>
                            <p className="text-base text-gray-700">Nuestro Coro no solo fomenta el canto coral, sino también un profundo compromiso social. Han realizado conciertos didácticos en colegios, así como también, conciertos de navidad en Casas del Adulto Mayor y Orfanatos en la capital.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Directores y Solistas Invitados</h4>
                            <p className="text-base text-gray-700">El Coro Polifónico RR ha tenido la oportunidad de trabajar bajo la batuta de directores corales de renombre nacional e internacional, entre los que destacan: Antonio Paz, Wilfredo Tarazona, Israel Olaya, Javier Súnico.</p>
                            <p className="text-base text-gray-700 mt-2">Asimismo, ha acompañado a destacados solistas: María Eloisa Aguirre, Iván Ayllón Rivas, Karla Rabanal, Rafael Reyes.</p>
                        </div>
                    </div>
                      </div>
                  </div>
              </div>

          </div>

          {/* Contact Section */}
          <div className="bg-rr-blue rounded-2xl p-10 mt-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>
              
              <Mail className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl font-bold font-['Oswald'] uppercase tracking-wide mb-4">¿Te gustaría formar parte de nuestros elencos?</h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
                  En caso de estar interesado en pertenecer en alguno de nuestros elencos, por favor escribe un email a Emilio Zapata Schiappacasse, Coordinador de Elencos Artísticos.
              </p>
              <a href="mailto:ezapata@rrmusiccorp.com" className="inline-flex items-center gap-2 bg-white text-rr-blue font-bold px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors shadow-lg">
                  ezapata@rrmusiccorp.com
              </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Elencos;
`

fs.writeFileSync('components/Elencos.tsx', content);

