import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, ArrowRight } from 'lucide-react';

const PreparatoryPlans: React.FC = () => {
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
                        <div className="text-left relative">
                            <div className="relative inline-block">
                                <h1 className="font-['Oswald'] text-6xl md:text-8xl font-bold text-gray-900 uppercase tracking-tighter leading-[0.85] relative z-10">
                                    PREPARATORY
                                </h1>
                                <span className="font-['Satisfy'] text-5xl md:text-7xl text-rr-blue absolute -bottom-6 right-0 transform -rotate-6 z-20">
                                    Music
                                </span>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-px w-20 bg-rr-blue"></div>
                                <p className="font-['Oswald'] uppercase tracking-[0.3em] text-sm text-gray-500">
                                    Program
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-200 text-center">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-12">
                            Este programa intensivo y enfocado de preparación de 1 año proporciona a los estudiantes las habilidades y el conocimiento necesarios para sobresalir en las audiciones de ingreso y tener éxito en un entorno académico musical exigente. Con un plan de estudios integral y la guía de expertos en la materia, nuestros estudiantes están preparados para alcanzar sus metas educativas y profesionales en el mundo de la música.
                        </p>
                        
                        <div className="inline-block bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
                            <h3 className="font-['Oswald'] text-3xl text-gray-900 uppercase tracking-wide mb-2">Plan de preparación personalizado</h3>
                            <p className="text-gray-500 mb-0">(Previa evaluación)</p>
                        </div>

                        <div>
                            <a 
                                href="https://wa.me/51958121740?text=Hola,%20quisiera%20solicitar%20asesor%C3%ADa%20sobre%20el%20Preparatory%20Music%20Program."
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-rr-blue text-white rounded-full font-bold uppercase tracking-widest text-lg px-12 py-5 hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <Volume2 className="w-6 h-6" /> Solicitar Asesoría
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PreparatoryPlans;
