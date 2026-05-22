import React from 'react';
import { ArrowLeft, CheckCircle2, Music, Clock, CalendarDays, Volume2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const JuniorPlans: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1f56] via-[#102a7a] to-[#25287e] relative font-sans selection:bg-[#9333ea] selection:text-white overflow-hidden text-white">
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#3b0764] rounded-full mix-blend-screen filter blur-[150px] opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1d4ed8] rounded-full mix-blend-screen filter blur-[150px] opacity-50"></div>
      </div>

      <div className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
        
        {/* Back button */}
        <div className="flex justify-center md:justify-start mb-8">
            <Link to="/plans" className="inline-flex items-center text-cyan-200 hover:text-white transition-colors font-medium bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a categorías
            </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
            <h3 className="text-xl sm:text-2xl font-light tracking-[0.2em] mb-[-10px] text-gray-200 uppercase">junior</h3>
            <h1 className="font-['Oswald'] text-7xl sm:text-8xl md:text-9xl font-bold mb-[-10px] sm:mb-[-20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#a78bfa] to-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tighter">
                music
            </h1>
            <h2 className="font-cursive text-6xl sm:text-7xl md:text-8xl text-white transform -rotate-3 mb-2 drop-shadow-lg">
                Summer
            </h2>
            <div className="inline-block bg-[#1e1b4b]/50 border border-purple-500/30 rounded-full px-6 py-2 mb-10">
                <span className="font-['Oswald'] uppercase tracking-widest text-lg sm:text-xl font-medium">program 2026</span>
            </div>
            
            <div className="mt-4">
                <h2 className="text-[#eab308] text-3xl sm:text-4xl font-semibold mb-2">Clases de</h2>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter">música</h1>
                <div className="bg-[#1e1b4b]/40 py-3 px-8 inline-block rounded-xl border border-white/10">
                    <p className="text-xl sm:text-2xl font-light">para niños de 6 a 12 años</p>
                </div>
            </div>

            <div className="mt-12 mb-8 mx-auto max-w-2xl bg-gradient-to-r from-[#6d28d9] to-[#4c1d95] rounded-full py-3 px-6 shadow-xl border border-purple-400/30 transform hover:scale-105 transition-transform cursor-default">
                <h3 className="text-lg sm:text-xl font-medium">Elige el plan que mejor se adapte a su ritmo</h3>
            </div>
            
            <p className="text-2xl sm:text-3xl font-light tracking-wide mt-4">
                inicio de clases <span className="text-5xl font-['Oswald'] font-bold mx-2">5</span> de enero
            </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {/* Opción 1 */}
            <div className="bg-white text-[#0f172a] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-6 text-white text-center">
                    <h4 className="text-yellow-400 font-medium text-lg mb-1">Opción 1</h4>
                    <h3 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4">PLAN BASE</h3>
                    <div className="bg-[#0f172a]/20 py-2 rounded-lg">
                        <span className="text-3xl font-semibold">S/ 195</span> <span className="text-lg opacity-90">al mes</span>
                    </div>
                </div>
                <div className="bg-[#a855f7] text-white text-center py-2 px-4 text-sm sm:text-base font-medium">
                    Diseñado para iniciar y explorar el aprendizaje musical
                </div>
                <div className="p-8 flex-grow">
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <CheckCircle2 className="text-[#3b82f6] w-8 h-8 flex-shrink-0" />
                            <div>
                                <p className="font-bold text-lg leading-tight">1 hora por semana</p>
                                <p className="text-gray-500 text-sm">(4 clases al mes)</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckCircle2 className="text-[#3b82f6] w-8 h-8 flex-shrink-0" />
                            <p className="font-bold text-lg leading-tight">Canto o 1 instrumento a elegir</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Opción 2 */}
            <div className="bg-white text-[#0f172a] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-6 text-white text-center relative">
                    <h4 className="text-yellow-400 font-medium text-lg mb-1">Opción 2</h4>
                    <h3 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4">PLAN AVANZADO</h3>
                    <div className="bg-[#0f172a]/20 py-2 rounded-lg">
                        <span className="text-3xl font-semibold">S/ 350</span> <span className="text-lg opacity-90">al mes</span>
                    </div>
                </div>
                <div className="bg-[#7e22ce] text-white text-center py-2 px-4 text-sm sm:text-base font-medium">
                    Desarrollo de técnica y repertorio progresivo
                </div>
                <div className="p-8 flex-grow">
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <CheckCircle2 className="text-[#3b82f6] w-8 h-8 flex-shrink-0" />
                            <div>
                                <p className="font-bold text-lg leading-tight">2 horas por semana</p>
                                <p className="text-gray-500 text-sm">(8 clases al mes)</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckCircle2 className="text-[#3b82f6] w-8 h-8 flex-shrink-0" />
                            <p className="font-bold text-lg leading-tight">Canto o 1 instrumento a elegir</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Opción 3 */}
            <div className="bg-white text-[#0f172a] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-transform hover:-translate-y-2 border-[6px] border-[#3b82f6]/20">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-6 text-white text-center">
                    <h4 className="text-yellow-400 font-medium text-lg mb-1">Opción 3</h4>
                    <h3 className="font-['Oswald'] text-3xl font-bold uppercase tracking-tight mb-4">COMPLEMENTO OPCIONAL</h3>
                    <div className="bg-[#0f172a]/20 py-2 px-2 rounded-lg">
                        <span className="font-semibold text-lg">+ S/ 100 adicionales a la opción 1 ó 2</span>
                    </div>
                </div>
                <div className="bg-[#6d28d9] text-white text-center py-2 px-4 text-sm font-medium">
                    instrumento + canto, audio y lectura musical
                </div>
                <div className="p-8 flex-grow">
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <CheckCircle2 className="text-[#3b82f6] w-8 h-8 flex-shrink-0" />
                            <p className="font-bold text-lg leading-tight">1 hora de Técnica Vocal</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckCircle2 className="text-[#3b82f6] w-8 h-8 flex-shrink-0" />
                            <p className="font-bold text-lg leading-tight">1 hora de Teoría Musical</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Opción 4 */}
            <div className="bg-white text-[#0f172a] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-6 text-white text-center relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 opacity-10"><Star className="w-40 h-40" /></div>
                    <h4 className="text-yellow-400 font-medium text-lg mb-1 relative z-10">Opción 4</h4>
                    <h3 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4 relative z-10">PLAN INTENSIVO</h3>
                    <div className="bg-[#0f172a]/20 py-2 rounded-lg relative z-10">
                        <span className="text-3xl font-semibold">S/ 650</span> <span className="text-lg opacity-90">al mes</span>
                    </div>
                </div>
                <div className="bg-[#5b21b6] text-white text-center py-2 px-4 text-sm sm:text-base font-medium">
                    Programa integral de 3 días a la semana
                </div>
                <div className="p-8 flex-grow">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#3b82f6] w-6 h-6 flex-shrink-0" />
                            <p className="font-bold text-base leading-tight">10 horas por semana</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#3b82f6] w-6 h-6 flex-shrink-0" />
                            <p className="font-bold text-base leading-tight">2 instrumentos a elegir</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#3b82f6] w-6 h-6 flex-shrink-0" />
                            <p className="font-bold text-base leading-tight">Apreciación Musical</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#3b82f6] w-6 h-6 flex-shrink-0" />
                            <p className="font-bold text-base leading-tight">Teoría Musical y Técnica Vocal</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#3b82f6] w-6 h-6 flex-shrink-0" />
                            <p className="font-bold text-base leading-tight">Coro y stage presence</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Instrumentos y Horarios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
            {/* Instrumentos */}
            <div className="bg-[#1e3a8a]/40 rounded-3xl p-8 backdrop-blur-sm border border-white/10 shadow-2xl">
                <h3 className="text-[#eab308] text-4xl font-bold mb-8 text-center tracking-wide flex items-center justify-center gap-3">
                    <Music className="w-8 h-8" /> Instrumentos
                </h3>
                
                <div className="mb-8">
                    <div className="bg-[#1e40af] py-2 px-4 rounded-t-xl">
                        <h4 className="text-xl font-bold uppercase tracking-wider text-white text-center">Cursos grupales</h4>
                    </div>
                    <div className="bg-white/10 p-6 rounded-b-xl border border-t-0 border-white/20 text-center">
                        <p className="text-xl leading-relaxed font-light">
                            Guitarra acústica - Guitarra eléctrica<br/>
                            Piano - Canto - Percusión - Violín
                        </p>
                    </div>
                </div>

                <div>
                    <div className="bg-[#1e40af] py-2 px-4 rounded-t-xl flex justify-center items-baseline gap-2 flex-wrap">
                        <h4 className="text-xl font-bold uppercase tracking-wider text-white">Cursos individuales</h4>
                        <span className="text-sm text-gray-300">(consultar precios)</span>
                    </div>
                    <div className="bg-white/10 p-6 rounded-b-xl border border-t-0 border-white/20 text-center">
                        <p className="text-xl leading-relaxed font-light">
                            Batería - Bajo - Violonchelo - Flauta<br/>
                            Clarinete - Saxofón - Trompeta y más.
                        </p>
                    </div>
                </div>
            </div>

            {/* Horarios */}
            <div className="bg-[#1e3a8a]/40 rounded-3xl p-8 backdrop-blur-sm border border-white/10 shadow-2xl">
                <h3 className="text-[#eab308] text-4xl font-bold mb-8 text-center tracking-wide flex items-center justify-center gap-3">
                    <Clock className="w-8 h-8" /> Horarios
                </h3>
                
                <div className="mb-8">
                    <div className="bg-[#1e40af] py-2 px-4 rounded-t-xl">
                        <h4 className="text-xl font-bold uppercase tracking-wider text-white text-center">Turno mañana</h4>
                    </div>
                    <div className="bg-white/10 p-6 rounded-b-xl border border-t-0 border-white/20 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-2">
                           <CalendarDays className="w-5 h-5 text-gray-300" />
                           <p className="font-bold text-xl">Lunes, miércoles y jueves</p>
                        </div>
                        <p className="text-xl text-gray-300 font-light">9:00 a.m. a 1:00 p.m.</p>
                    </div>
                </div>

                <div>
                    <div className="bg-[#1e40af] py-2 px-4 rounded-t-xl">
                        <h4 className="text-xl font-bold uppercase tracking-wider text-white text-center">Turno tarde</h4>
                    </div>
                    <div className="bg-white/10 p-6 rounded-b-xl border border-t-0 border-white/20 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-2">
                           <CalendarDays className="w-5 h-5 text-gray-300" />
                           <p className="font-bold text-xl">Martes, miércoles y jueves</p>
                        </div>
                        <p className="text-xl text-gray-300 font-light">3:00 p.m. a 7:00 p.m.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
            <button className="bg-[#eab308] hover:bg-yellow-400 text-[#0f172a] font-oswald font-bold px-10 py-5 rounded-full text-2xl uppercase tracking-widest shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-transform hover:scale-105 flex items-center gap-3 mx-auto">
               <Volume2 className="w-6 h-6" /> ¡Inscríbete ahora!
            </button>
        </div>

      </div>
    </div>
  );
};

export default JuniorPlans;