const fs = require('fs');

const content = `import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Zap, Music, Award, Users, ArrowRight } from 'lucide-react';

const DiplomaPlans: React.FC = () => {
    return (
        <div className="relative w-full bg-gray-50 overflow-hidden min-h-screen font-sans text-gray-900">
            
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rr-blue rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-rr-orange rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
            </div>
            
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    
                    {/* NAV BACK */}
                    <div className="flex mb-12">
                        <Link to="/plans" className="inline-flex items-center text-rr-blue hover:text-blue-800 transition-colors font-medium bg-white hover:bg-gray-50 px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver a categorías
                        </Link>
                    </div>

                    {/* HEADER */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
                        {/* Title Group */}
                        <div className="text-left relative">
                            <div className="relative inline-block">
                                <h1 className="font-['Oswald'] text-7xl md:text-9xl font-bold text-gray-900 uppercase tracking-tighter leading-[0.85] relative z-10">
                                    MUSIC
                                </h1>
                                
                                <span className="font-['Satisfy'] text-6xl md:text-8xl text-rr-blue absolute -bottom-6 right-0 transform -rotate-6 z-20">
                                    Diploma
                                </span>
                            </div>
                            
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-px w-20 bg-rr-blue"></div>
                                <p className="font-['Oswald'] uppercase tracking-[0.3em] text-sm text-gray-500">
                                    Program
                                </p>
                            </div>
                        </div>

                        {/* Age Badge & Info */}
                        <div className="max-w-md text-right md:text-left mt-8 md:mt-0">
                            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full mb-6 shadow-sm">
                                <Award className="w-5 h-5 text-rr-orange" />
                                <span className="text-gray-600 font-light text-sm tracking-wide">
                                    Para alumnos de <span className="text-gray-900 font-bold">13 años a +</span>
                                </span>
                            </div>
                            <p className="text-gray-600 text-lg font-light leading-relaxed">
                                Un programa diseñado para la <span className="text-rr-blue font-medium">excelencia académica</span> y el alto rendimiento musical.
                            </p>
                        </div>
                    </div>

                    {/* SECCIÓN DE INSTRUMENTOS */}
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        {/* Clases Grupales */}
                        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 hover:border-rr-blue transition-colors">
                            <h3 className="font-['Oswald'] text-2xl text-rr-blue uppercase tracking-widest mb-6 flex items-center gap-3">
                                <Users className="w-6 h-6 text-rr-orange" /> Cursos Grupales
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['Guitarra Acústica', 'Guitarra Eléctrica', 'Piano', 'Canto'].map((inst, i) => (
                                    <span key={i} className="text-gray-700 bg-gray-50 px-5 py-2 rounded-lg border border-gray-200 text-sm font-bold uppercase tracking-wide">
                                        {inst}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Cursos Individuales */}
                        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 hover:border-rr-orange transition-colors">
                            <h3 className="font-['Oswald'] text-2xl text-rr-orange uppercase tracking-widest mb-6 flex items-center gap-3">
                                <Music className="w-6 h-6 text-rr-blue" /> Cursos Individuales
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {['Percusión', 'Violín', 'Batería', 'Bajo', 'Violonchelo', 'Flauta', 'Clarinete', 'Saxofón', 'Trompeta', 'y más'].map((inst, i) => (
                                    <span key={i} className="text-gray-700 bg-orange-50/50 px-5 py-2 rounded-lg border border-orange-100 text-sm font-bold uppercase tracking-wide">
                                        {inst}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 italic text-right border-t border-gray-100 pt-3">
                                * Consultar precios específicos para cursos individuales
                            </p>
                        </div>
                    </div>

                    {/* PLANES (PRICING) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-32">
                        
                        {/* Plan Instrumento Principal */}
                        <div className="bg-white rounded-3xl p-1 border border-gray-200 hover:border-rr-blue transition-all group h-full shadow-xl">
                            <div className="h-full p-10 flex flex-col relative overflow-hidden bg-white rounded-[23px]">
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-4xl text-gray-900 uppercase tracking-wide mb-2">Instrumento Principal</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-gray-100 pb-6">Enfocado a la formación y desarrollo técnico musical.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-10">
                                        <span className="text-6xl font-light text-rr-blue font-['Oswald']">S/350</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">al mes</span>
                                    </div>

                                    <ul className="space-y-6 mb-12">
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-blue mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas por semana (8 clases)</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-blue mr-4 shrink-0" />
                                            <span className="text-lg font-light">Canto o un instrumento a elegir</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-blue mr-4 shrink-0" />
                                            <span className="text-lg font-light">Acceso a instalaciones</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <a 
                                        href="https://wa.me/51958121740?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Diploma%20Music%20Program."
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full py-5 border border-rr-blue rounded-lg text-rr-blue font-bold uppercase tracking-[0.2em] text-sm hover:bg-rr-blue hover:text-white transition-all flex items-center justify-center gap-3"
                                    >
                                        Inscribirse <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Plan Doble Instrumento (Highlight) */}
                        <div className="relative bg-gradient-to-b from-rr-orange to-rr-blue rounded-3xl p-[2px] shadow-2xl transition-all transform hover:-translate-y-2">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-rr-orange text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg z-20 flex items-center gap-2">
                                <Star className="w-4 h-4 fill-white" /> Recomendado
                            </div>
                            <div className="h-full bg-white rounded-[23px] p-10 flex flex-col relative overflow-hidden">
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-4xl text-gray-900 uppercase tracking-wide mb-2">Doble Instrumento</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-gray-100 pb-6">Orientado a la formación musical multidisciplinaria.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-10">
                                        <span className="text-6xl font-light text-rr-blue font-['Oswald']">S/665</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">al mes</span>
                                    </div>

                                    <ul className="space-y-6 mb-12">
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Principal)</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Secundario)</span>
                                        </li>
                                        <li className="flex items-center text-gray-900">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-bold">Total: 16 horas mensuales</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <a 
                                        href="https://wa.me/51958121740?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Diploma%20Music%20Program."
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full py-5 bg-rr-blue text-white rounded-lg font-bold uppercase tracking-[0.2em] text-sm hover:bg-blue-800 transition-all shadow-xl flex items-center justify-center gap-3"
                                    >
                                        Inscribirse <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CURSOS EXCLUSIVOS (MASTERCLASSES) */}
                    <div className="max-w-6xl mx-auto mb-32">
                        <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                             <div className="text-center pt-12 pb-8">
                                <span className="font-['Satisfy'] text-5xl text-rr-orange mb-2 block">Masterclasses</span>
                                <h2 className="font-['Oswald'] text-5xl md:text-6xl text-rr-blue uppercase tracking-tight">Cursos Exclusivos</h2>
                                <div className="w-24 h-1 bg-rr-orange mx-auto mt-6 mb-4"></div>
                                <p className="text-gray-500">A cargo de especialistas de prestigio internacional.</p>
                             </div>

                             <div className="p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-16 items-stretch border-t border-gray-100">
                                 
                                 {/* COLUMNA IZQUIERDA: LOS CURSOS */}
                                 <div className="flex flex-col justify-center space-y-10">
                                      {[
                                          { title: "Music Business", teacher: "Mario Melgar", num: "01" },
                                          { title: "Jazz e Improvisación", teacher: "Gabriel Alegría", num: "02" },
                                          { title: "Pedagogía Musical", teacher: "Rafael Reyes", num: "03" }
                                      ].map((course, idx) => (
                                          <div key={idx} className="flex items-center gap-6 group">
                                              <div className="w-16 h-16 rounded-full border-2 border-rr-orange/30 flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 group-hover:border-rr-orange transition-all">
                                                  <span className="font-['Oswald'] text-2xl text-rr-orange font-bold">{course.num}</span>
                                              </div>
                                              <div>
                                                  <h4 className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-rr-blue transition-colors">{course.title}</h4>
                                                  <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">{course.teacher}</p>
                                              </div>
                                          </div>
                                      ))}
                                 </div>

                                 {/* COLUMNA DERECHA: TABLA DE PRECIOS */}
                                 <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-10 flex flex-col justify-center shadow-inner">
                                     <h4 className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-8 text-center border-b border-gray-200 pb-4">
                                         Opciones de Inversión
                                     </h4>
                                     
                                     <div className="space-y-6">
                                         {/* Fila 1 */}
                                         <div className="flex items-center justify-between group cursor-default">
                                             <span className="text-xl font-bold text-gray-700 group-hover:text-rr-blue transition-colors">1 Curso</span>
                                             <div className="flex-1 border-b border-dotted border-gray-300 mx-6 relative top-1 opacity-50"></div>
                                             <div className="text-right">
                                                  <span className="block font-['Oswald'] text-3xl text-rr-blue">S/350</span>
                                                  <span className="text-xs text-gray-500 uppercase font-bold">8h / mes</span>
                                             </div>
                                         </div>

                                         {/* Fila 2 */}
                                         <div className="flex items-center justify-between group cursor-default">
                                             <span className="text-xl font-bold text-gray-700 group-hover:text-rr-blue transition-colors">2 Cursos</span>
                                             <div className="flex-1 border-b border-dotted border-gray-300 mx-6 relative top-1 opacity-50"></div>
                                             <div className="text-right">
                                                  <span className="block font-['Oswald'] text-3xl text-rr-blue">S/665</span>
                                                  <span className="text-xs text-gray-500 uppercase font-bold">16h / mes</span>
                                             </div>
                                         </div>

                                         {/* Fila 3 */}
                                         <div className="flex items-center justify-between group cursor-default">
                                             <span className="text-xl font-bold text-gray-700 group-hover:text-rr-blue transition-colors">3 Cursos</span>
                                             <div className="flex-1 border-b border-dotted border-gray-300 mx-6 relative top-1 opacity-50"></div>
                                             <div className="text-right">
                                                  <span className="block font-['Oswald'] text-3xl text-rr-blue">S/945</span>
                                                  <span className="text-xs text-gray-500 uppercase font-bold">24h / mes</span>
                                             </div>
                                         </div>
                                     </div>

                                     <a 
                                          href="https://wa.me/51958121740?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20Masterclasses."
                                          target="_blank" rel="noopener noreferrer"
                                          className="w-full mt-10 bg-rr-orange hover:bg-orange-500 text-white font-bold py-4 rounded-lg uppercase tracking-widest text-sm transition-all transform hover:scale-[1.02] shadow-lg text-center block"
                                      >
                                          Reservar Cupo
                                      </a>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* COMPLEMENTO ACADÉMICO */}
                    <div className="max-w-6xl mx-auto">
                         <div className="bg-rr-blue rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
                              <div className="flex-shrink-0 bg-white/10 p-6 rounded-full border border-white/20">
                                  <Zap className="w-16 h-16 text-rr-orange" />
                              </div>
                              
                              <div className="flex-grow text-center md:text-left z-10">
                                  <h3 className="font-['Oswald'] text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
                                      Complemento Académico
                                  </h3>
                                  <p className="text-blue-100 text-lg mb-6 max-w-xl leading-relaxed">
                                      Potencia tu talento con clases teóricas esenciales. Ideal para reforzar lectura, audio y técnica vocal.
                                  </p>
                                  
                                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white font-medium text-base">
                                      <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"><div className="w-2 h-2 bg-rr-orange rounded-full"></div> 1h Teoría Musical</div>
                                      <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"><div className="w-2 h-2 bg-rr-orange rounded-full"></div> 2h Lenguaje Musical</div>
                                      <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"><div className="w-2 h-2 bg-rr-orange rounded-full"></div> 1h Técnica Vocal</div>
                                  </div>
                              </div>
                              
                              <div className="flex-shrink-0 text-center z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl min-w-[200px]">
                                  <span className="block text-gray-500 text-sm uppercase tracking-widest mb-1">Precio Add-on</span>
                                  <span className="block text-5xl font-bold text-rr-blue mb-1">+S/100</span>
                                  <div className="w-full h-px bg-gray-200 my-2"></div>
                                  <span className="text-xs text-gray-400 uppercase tracking-wider">Pago Mensual</span>
                              </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DiplomaPlans;
`
fs.writeFileSync('components/DiplomaPlans.tsx', content);
