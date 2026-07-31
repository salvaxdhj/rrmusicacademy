const fs = require('fs');

const content = `import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Music, Users, Clock, CalendarDays, Volume2, ArrowRight } from 'lucide-react';

const JuniorPlans: React.FC = () => {
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
                                    Junior
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
                                <span className="text-gray-600 font-light text-sm tracking-wide">
                                    Para niños de <span className="text-gray-900 font-bold">6 a 12 años</span>
                                </span>
                            </div>
                            <p className="text-gray-600 text-lg font-light leading-relaxed">
                                Un programa diseñado para iniciar y explorar el <span className="text-rr-blue font-medium">aprendizaje musical</span> desde pequeños.
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
                                {['Guitarra Acústica', 'Guitarra Eléctrica', 'Piano', 'Canto', 'Percusión'].map((inst, i) => (
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
                                {['Violín', 'Batería', 'Bajo', 'Violonchelo', 'Flauta', 'Clarinete', 'Saxofón', 'Trompeta', 'y más'].map((inst, i) => (
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                        
                        {/* Opción 1 */}
                        <div className="bg-white rounded-3xl p-1 border border-gray-200 hover:border-rr-blue transition-all group h-full shadow-xl">
                            <div className="h-full p-8 flex flex-col relative overflow-hidden bg-white rounded-[23px]">
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-3xl text-gray-900 uppercase tracking-wide mb-2">Plan Base</h3>
                                    <p className="text-gray-500 text-sm italic mb-6 border-b border-gray-100 pb-4">Iniciación y exploración.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-5xl font-light text-rr-blue font-['Oswald']">S/200</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">/mes</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start text-gray-700">
                                            <Check className="w-5 h-5 text-rr-blue mr-3 shrink-0 mt-0.5" />
                                            <span className="text-base font-light">1 hora por semana (4 clases/mes)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check className="w-5 h-5 text-rr-blue mr-3 shrink-0 mt-0.5" />
                                            <span className="text-base font-light">Canto o 1 instrumento a elegir</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Opción 2 */}
                        <div className="relative bg-gradient-to-b from-rr-orange to-rr-blue rounded-3xl p-[2px] shadow-2xl transition-all transform hover:-translate-y-2">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rr-orange text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-20 flex items-center gap-1.5">
                                <Star className="w-3 h-3 fill-white" /> Recomendado
                            </div>
                            <div className="h-full bg-white rounded-[23px] p-8 flex flex-col relative overflow-hidden">
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-3xl text-gray-900 uppercase tracking-wide mb-2">Plan Avanzado</h3>
                                    <p className="text-gray-500 text-sm italic mb-6 border-b border-gray-100 pb-4">Técnica y repertorio progresivo.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-5xl font-light text-rr-blue font-['Oswald']">S/350</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">/mes</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start text-gray-700">
                                            <Check className="w-5 h-5 text-rr-orange mr-3 shrink-0 mt-0.5" />
                                            <span className="text-base font-light">2 horas por semana (8 clases/mes)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check className="w-5 h-5 text-rr-orange mr-3 shrink-0 mt-0.5" />
                                            <span className="text-base font-light">Canto o 1 instrumento a elegir</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Opción 3 (Opcional) */}
                        <div className="bg-white rounded-3xl p-1 border-2 border-dashed border-rr-orange hover:border-solid transition-all group h-full shadow-xl">
                            <div className="h-full p-8 flex flex-col relative overflow-hidden bg-orange-50/30 rounded-[23px]">
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-3xl text-gray-900 uppercase tracking-wide mb-2">Complemento</h3>
                                    <p className="text-gray-500 text-sm italic mb-6 border-b border-orange-100 pb-4">Teoría y técnica vocal.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-5xl font-light text-rr-orange font-['Oswald']">+S/120</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">adicional</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start text-gray-700">
                                            <Check className="w-5 h-5 text-rr-orange mr-3 shrink-0 mt-0.5" />
                                            <span className="text-base font-light">1 hora de Técnica Vocal</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check className="w-5 h-5 text-rr-orange mr-3 shrink-0 mt-0.5" />
                                            <span className="text-base font-light">1 hora de Teoría Musical</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* HORARIOS */}
                    <div className="max-w-4xl mx-auto mb-20">
                         <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-gray-200">
                              <div className="flex items-center gap-6 text-center md:text-left">
                                  <div className="flex-shrink-0 bg-blue-50 p-4 rounded-full border border-blue-100">
                                      <Clock className="w-10 h-10 text-rr-blue" />
                                  </div>
                                  <div>
                                      <h3 className="font-['Oswald'] text-3xl text-gray-900 uppercase tracking-tight mb-1">
                                          Horarios Flexibles
                                      </h3>
                                      <p className="text-gray-500 text-base">
                                          Se coordinan directamente al momento de la matrícula.
                                      </p>
                                  </div>
                              </div>
                              <div className="flex-shrink-0">
                                   <CalendarDays className="w-16 h-16 text-gray-200" />
                              </div>
                         </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a 
                            href="https://wa.me/51958121740?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Junior%20Music%20Program."
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-rr-blue text-white rounded-full font-bold uppercase tracking-widest text-lg px-12 py-5 hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            <Volume2 className="w-6 h-6" /> ¡Inscríbete ahora!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JuniorPlans;
`
fs.writeFileSync('components/JuniorPlans.tsx', content);
