import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Zap, Music, Award, Users, ArrowRight } from 'lucide-react';

const DiplomaPlans: React.FC = () => {
    
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Datos
    const groupInstruments = ['Guitarra Acústica', 'Guitarra Eléctrica', 'Piano', 'Canto'];
    const individualInstruments = ['Percusión', 'Violín', 'Batería', 'Bajo', 'Violonchelo', 'Flauta', 'Clarinete', 'Saxofón', 'Trompeta', 'y más'];

    return (
        <div className="relative w-full bg-[#0f0c29] overflow-hidden min-h-screen font-sans">
            
            {/* --- FONDO DARK ACADEMY --- */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#1a0b2e] via-[#05050A] to-[#000000]"></div>
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}>
            </div>
            
            {/* --- CONTENIDO --- */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    
                    {/* NAV BACK */}
                    <div className="flex mb-12">
                        <Link to="/plans" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group">
                            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mr-3 group-hover:border-blue-500 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                            </span>
                            Volver a categorías
                        </Link>
                    </div>

                    {/* HEADER "DARK ACADEMY" */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
                        {/* Title Group */}
                        <div className="text-left relative">
                            <div className="relative inline-block">
                                <h1 className="font-['Oswald'] text-7xl md:text-9xl font-bold text-white uppercase tracking-tighter leading-[0.85] relative z-10 drop-shadow-2xl">
                                    MUSIC
                                </h1>
                                
                                {/* CAMBIO: Texto Diploma en AZUL */}
                                <span className="font-['Satisfy'] text-6xl md:text-8xl text-blue-500 absolute -bottom-6 right-0 transform -rotate-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20">
                                    Diploma
                                </span>
                                {/* Sombra difusa para efecto neón */}
                                <span className="font-['Satisfy'] text-6xl md:text-8xl text-blue-700 absolute -bottom-6 right-0 transform -rotate-6 blur-md z-0 opacity-60">
                                    Diploma
                                </span>
                            </div>
                            
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
                                <p className="font-['Oswald'] uppercase tracking-[0.3em] text-sm text-gray-300">
                                    Summer Program 2026
                                </p>
                            </div>
                        </div>

                        {/* Age Badge & Info */}
                        <div className="max-w-md text-right md:text-left mt-8 md:mt-0">
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 shadow-xl">
                                <Award className="w-5 h-5 text-amber-400" />
                                <span className="text-gray-200 font-light text-sm tracking-wide">
                                    Para alumnos de <span className="text-white font-bold">13 años a +</span>
                                </span>
                            </div>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Un programa diseñado para la <span className="text-blue-400 font-medium">excelencia académica</span> y el alto rendimiento musical.
                            </p>
                        </div>
                    </div>

                    {/* SECCIÓN DE INSTRUMENTOS */}
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        {/* Clases Grupales */}
                        <div className="bg-[#120f24]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                            <h3 className="font-['Oswald'] text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                                <Users className="w-6 h-6 text-blue-400" /> Cursos Grupales
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {groupInstruments.map((inst, i) => (
                                    <span key={i} className="text-gray-200 bg-blue-900/20 px-5 py-2 rounded-lg border border-blue-500/20 text-sm font-bold uppercase tracking-wide hover:bg-blue-500/20 transition-colors">
                                        {inst}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Cursos Individuales */}
                        <div className="bg-[#120f24]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
                            <h3 className="font-['Oswald'] text-2xl text-amber-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                <Music className="w-6 h-6" /> Cursos Individuales
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {individualInstruments.map((inst, i) => (
                                    <span key={i} className="text-gray-200 bg-amber-900/20 px-5 py-2 rounded-lg border border-amber-500/20 text-sm font-bold uppercase tracking-wide hover:bg-amber-500/20 transition-colors">
                                        {inst}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 italic text-right border-t border-white/10 pt-3">
                                * Consultar precios específicos para cursos individuales
                            </p>
                        </div>
                    </div>

                    {/* PLANES (PRICING) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-32">
                        
                        {/* Plan Instrumento Principal */}
                        <div className="bg-[#0a0818] rounded-2xl p-1 border border-white/10 hover:border-white/20 transition-all group h-full shadow-2xl">
                            <div className="h-full p-10 flex flex-col relative overflow-hidden">
                                
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-4xl text-gray-100 uppercase tracking-wide mb-2">Instrumento Principal</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-white/10 pb-6">Enfocado a la formación y desarrollo técnico musical.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-10">
                                        <span className="text-6xl font-light text-white font-['Oswald']">S/350</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">al mes</span>
                                    </div>

                                    <ul className="space-y-6 mb-12">
                                        <li className="flex items-center text-gray-300">
                                            <Check className="w-6 h-6 text-purple-500 mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas por semana (8 clases)</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="w-6 h-6 text-purple-500 mr-4 shrink-0" />
                                            <span className="text-lg font-light">Canto o un instrumento a elegir</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="w-6 h-6 text-purple-500 mr-4 shrink-0" />
                                            <span className="text-lg font-light">Acceso a instalaciones</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <button 
                                        onClick={scrollToContact}
                                        className="w-full py-5 border border-white/20 rounded-lg text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                                    >
                                        Inscribirse <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Plan Doble Instrumento (Highlight) */}
                        <div className="relative bg-gradient-to-b from-amber-500 via-purple-600 to-purple-900 rounded-2xl p-[2px] shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:shadow-[0_0_80px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-2">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg z-20 flex items-center gap-2">
                                <Star className="w-4 h-4 fill-black" /> Recomendado
                            </div>
                            <div className="h-full bg-[#0a0818] rounded-2xl p-10 flex flex-col relative overflow-hidden">
                                {/* Decoración de fondo */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                
                                <div className="relative z-10 flex-grow">
                                    <h3 className="font-['Oswald'] text-4xl text-white uppercase tracking-wide mb-2">Doble Instrumento</h3>
                                    <p className="text-gray-400 text-sm italic mb-8 border-b border-white/10 pb-6">Orientado a la formación musical multidisciplinaria.</p>
                                    
                                    <div className="flex items-baseline gap-2 mb-10">
                                        <span className="text-6xl font-light text-white font-['Oswald']">S/665</span>
                                        <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">al mes</span>
                                    </div>

                                    <ul className="space-y-6 mb-12">
                                        <li className="flex items-center text-white">
                                            <Check className="w-6 h-6 text-amber-400 mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Principal)</span>
                                        </li>
                                        <li className="flex items-center text-white">
                                            <Check className="w-6 h-6 text-amber-400 mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Secundario)</span>
                                        </li>
                                        <li className="flex items-center text-white">
                                            <Check className="w-6 h-6 text-amber-400 mr-4 shrink-0" />
                                            <span className="text-lg font-bold text-amber-100">Total: 16 horas mensuales</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <button 
                                        onClick={scrollToContact}
                                        className="w-full py-5 bg-white text-black rounded-lg font-bold uppercase tracking-[0.2em] text-sm hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center gap-3"
                                    >
                                        Inscribirse <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CURSOS EXCLUSIVOS (MASTERCLASSES) - DISEÑO LLENO */}
                    <div className="max-w-6xl mx-auto mb-32">
                        <div className="relative bg-[#151226] border border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl">
                             {/* Fondo decorativo */}
                             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                             
                             <div className="text-center pt-12 pb-8">
                                <span className="font-['Satisfy'] text-5xl text-amber-400 mb-2 block drop-shadow-md">Masterclasses</span>
                                <h2 className="font-['Oswald'] text-5xl md:text-6xl text-white uppercase tracking-tight">Cursos Exclusivos</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 mb-4"></div>
                                <p className="text-gray-400">A cargo de especialistas de prestigio internacional.</p>
                             </div>

                             <div className="p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-16 items-stretch">
                                 
                                 {/* COLUMNA IZQUIERDA: LOS CURSOS */}
                                 <div className="flex flex-col justify-center space-y-10">
                                      {[
                                          { title: "Music Business", teacher: "Mario Melgar", num: "01" },
                                          { title: "Jazz e Improvisación", teacher: "Gabriel Alegría", num: "02" },
                                          { title: "Pedagogía Musical", teacher: "Rafael Reyes", num: "03" }
                                      ].map((course, idx) => (
                                          <div key={idx} className="flex items-center gap-6 group">
                                              <div className="w-16 h-16 rounded-full border-2 border-amber-500/30 flex items-center justify-center bg-amber-900/10 group-hover:bg-amber-500/20 group-hover:border-amber-500 transition-all">
                                                  <span className="font-['Oswald'] text-2xl text-amber-500 font-bold">{course.num}</span>
                                              </div>
                                              <div>
                                                  <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{course.title}</h4>
                                                  <p className="text-sm text-gray-400 uppercase tracking-[0.2em] font-medium">{course.teacher}</p>
                                              </div>
                                          </div>
                                      ))}
                                 </div>

                                 {/* COLUMNA DERECHA: TABLA DE PRECIOS (OPCIONES DE INVERSIÓN) */}
                                 <div className="bg-[#0a0812] rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col justify-center shadow-inner">
                                     <h4 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-8 text-center border-b border-white/10 pb-4">
                                         Opciones de Inversión
                                     </h4>
                                     
                                     <div className="space-y-6">
                                         {/* Fila 1 */}
                                         <div className="flex items-center justify-between group cursor-default">
                                             <span className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">1 Curso</span>
                                             <div className="flex-1 border-b border-dotted border-gray-700 mx-6 relative top-1 opacity-50"></div>
                                             <div className="text-right">
                                                  <span className="block font-['Oswald'] text-3xl text-amber-400">S/350</span>
                                                  <span className="text-xs text-gray-500 uppercase font-bold">8h / mes</span>
                                             </div>
                                         </div>

                                         {/* Fila 2 */}
                                         <div className="flex items-center justify-between group cursor-default">
                                             <span className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">2 Cursos</span>
                                             <div className="flex-1 border-b border-dotted border-gray-700 mx-6 relative top-1 opacity-50"></div>
                                             <div className="text-right">
                                                  <span className="block font-['Oswald'] text-3xl text-amber-400">S/665</span>
                                                  <span className="text-xs text-gray-500 uppercase font-bold">16h / mes</span>
                                             </div>
                                         </div>

                                         {/* Fila 3 */}
                                         <div className="flex items-center justify-between group cursor-default">
                                             <span className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">3 Cursos</span>
                                             <div className="flex-1 border-b border-dotted border-gray-700 mx-6 relative top-1 opacity-50"></div>
                                             <div className="text-right">
                                                  <span className="block font-['Oswald'] text-3xl text-amber-400">S/945</span>
                                                  <span className="text-xs text-gray-500 uppercase font-bold">24h / mes</span>
                                             </div>
                                         </div>
                                     </div>

                                     <button 
                                          onClick={scrollToContact}
                                          className="w-full mt-10 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-lg uppercase tracking-widest text-sm transition-all transform hover:scale-[1.02] shadow-lg"
                                      >
                                          Reservar Cupo
                                      </button>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* COMPLEMENTO ACADÉMICO - ESTILO BUMPER */}
                    <div className="max-w-6xl mx-auto">
                         <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-white/10 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
                              
                              {/* Icono Grande */}
                              <div className="flex-shrink-0 bg-white/10 p-6 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                  <Zap className="w-16 h-16 text-white" />
                              </div>
                              
                              {/* Contenido Central */}
                              <div className="flex-grow text-center md:text-left z-10">
                                  <h3 className="font-['Oswald'] text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
                                      Complemento Académico
                                  </h3>
                                  <p className="text-blue-100 text-lg mb-6 max-w-xl leading-relaxed">
                                      Potencia tu talento con clases teóricas esenciales. Ideal para reforzar lectura, audio y técnica vocal.
                                  </p>
                                  
                                  {/* Lista de beneficios grande */}
                                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white font-medium text-base">
                                      <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"><div className="w-2 h-2 bg-purple-400 rounded-full"></div> 1h Teoría Musical</div>
                                      <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"><div className="w-2 h-2 bg-purple-400 rounded-full"></div> 2h Lenguaje Musical</div>
                                      <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"><div className="w-2 h-2 bg-purple-400 rounded-full"></div> 1h Técnica Vocal</div>
                                  </div>
                              </div>
                              
                              {/* Precio Bumper */}
                              <div className="flex-shrink-0 text-center z-10 bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm min-w-[200px]">
                                  <span className="block text-blue-200 text-sm uppercase tracking-widest mb-1">Precio Add-on</span>
                                  <span className="block text-5xl font-bold text-white mb-1">+S/100</span>
                                  <div className="w-full h-px bg-white/20 my-2"></div>
                                  <span className="text-xs text-gray-300 uppercase tracking-wider">Pago Mensual</span>
                              </div>
                         </div>
                    </div>

                    <div className="mt-24 text-center">
                       <p className="text-gray-500 text-sm font-light uppercase tracking-[0.3em]">
                          Cupos limitados • Inicio 5 de Enero
                       </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DiplomaPlans;