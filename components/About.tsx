import React from 'react';
import { Music, Award, Users, Heart, GraduationCap, Globe, Brain, Mic, BookOpen, Target } from 'lucide-react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  const features = [
    {
      name: 'Especialistas',
      description: 'Nuestros programas son liderados por especialistas de la educación musical.',
      icon: GraduationCap,
    },
    {
      name: 'Activamente Bilingüe',
      description: 'Somos la primera escuela de música activamente bilingüe del país.',
      icon: Globe,
    },
    {
      name: 'Departamento Psicopedagógico',
      description: 'Contamos con un Departamento Psicopedagógico al servicio de nuestra comunidad educativa.',
      icon: Brain,
    },
    {
      name: 'Recitales y Conciertos',
      description: 'Ofrecemos recitales y conciertos a lo largo del año con nuestros alumnos y maestros.',
      icon: Mic,
    },
    {
      name: 'Clases Maestras y Intercambios',
      description: 'Organizamos Clases Maestras y realizamos intercambios culturales con nuestros alumnos tanto a nivel nacional e internacional.',
      icon: BookOpen,
    },
    {
      name: 'Elencos Artísticos',
      description: 'Contamos con elencos artísticos gratuitos con proyección a la comunidad: Orquesta Sinfónica, Banda Sinfónica y Coro Polifónico.',
      icon: Music,
    },
    {
      name: 'Integración Comunitaria',
      description: 'Ofrecemos oportunidades de integración para nuestros estudiantes y maestros como jornadas deportivas, sociales y de esparcimiento.',
      icon: Users,
    },
    {
      name: 'Preparación Profesional',
      description: 'Brindamos un programa de preparación especializado para todos los que quieren postular a la carrera de música en el Perú y en el extranjero.',
      icon: Target,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-rr-dark py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden bg-rr-dark">
          <img
            src={IMAGES.about.headerBackground}
            alt="Concert hall"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
           <div className="hidden absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-4xl font-bold text-white uppercase tracking-widest border-4 border-white p-4">
                    FONDO: about_header.jpg
                </span>
           </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quiénes Somos
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Más que una escuela, somos un hogar para el desarrollo artístico. 
            RR Music Academy nació con la visión de democratizar la excelencia musical.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre nosotros
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Institución con más de quince años de experiencia en el campo de la pedagogía musical, es el proyecto educativo más importante de RR MUSIC CORP. Es una escuela de música única en el país, destinada a la formación integral de la siguiente generación de músicos, funcionando como un puente hacia la educación musical profesional. Con una oferta que incluye cursos presenciales, a domicilio y on-line, se posiciona como la única escuela de música activamente bilingüe en el Perú, con colaboraciones internacionales, constante actividad interinstitucional y con un Departamento Psicopedagógico a disposición del bienestar integral de toda nuestra comunidad educativa. Asimismo, contamos con tres elencos gratuitos generando espacios de práctica y desarrollo cultural a través de intercambios internacionales: Orquesta Sinfónica RR Academy, Banda Sinfónica RR Academy y Coro Polifónico RR Academy.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 relative">
             <div className="absolute -inset-4 bg-rr-blue opacity-10 rounded-2xl transform rotate-3"></div>
            <img
              className="relative rounded-2xl shadow-xl w-full object-cover"
              src={IMAGES.about.history}
              alt="Music class session"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden relative rounded-2xl shadow-xl w-full h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-bold border border-gray-400 p-2 border-dashed">FOTO: about_history.jpg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-rr-blue tracking-wide uppercase">Nuestros Valores</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Por qué elegir RR Music Academy
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-rr-blue rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;