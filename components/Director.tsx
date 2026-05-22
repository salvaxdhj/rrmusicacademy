import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants";
import {
  Quote,
  Award,
  Music,
  Star,
  ArrowRight,
  BookOpen,
  Users,
} from "lucide-react";

const Director: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="relative bg-rr-dark py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden bg-rr-dark">
          <img
            src={IMAGES.director.header}
            alt="Director dirigiendo o piano"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">
            Liderazgo y Pasión
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Conoce a nuestro Director
          </h1>
        </div>
      </div>

      {/* Main Bio Section */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            {/* Image Column */}
            <div className="relative mb-12 lg:mb-0">
              <div className="absolute -inset-4 bg-rr-blue opacity-5 rounded-lg transform -rotate-2"></div>
              <img
                className="relative rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
                src={IMAGES.director.profile}
                alt="Rafael Reyes"
              />

              {/* Quote Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs border-l-4 border-rr-blue hidden md:block">
                <Quote className="h-8 w-8 text-rr-blue mb-2 opacity-30" />
                <p className="text-gray-600 italic text-sm">
                  "La música no está en las notas, sino en el silencio entre
                  ellas. Enseñar es ayudar a descubrir ese silencio."
                </p>
                <p className="mt-2 text-rr-blue font-bold text-xs uppercase tracking-wide">
                  - Rafael Reyes
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Rafael Reyes
              </h2>
              <div className="prose prose-blue text-gray-500 space-y-6">
                <p className="text-lg leading-relaxed">
                  Con una carrera que abarca más de dos décadas, Rafael Reyes ha
                  dedicado su vida a dos grandes pasiones: la interpretación
                  musical y la educación. Fundador de RR Music Academy, Rafael
                  ha creado un espacio donde la excelencia técnica se encuentra
                  con la calidez humana.
                </p>
                <p>
                  Su viaje comenzó a temprana edad, mostrando un talento innato
                  para el piano y la composición. Egresado con honores del
                  Conservatorio Nacional, Rafael continuó sus estudios en
                  Europa, donde perfeccionó su técnica bajo la tutela de
                  maestros de renombre mundial.
                </p>
                <p>
                  Sin embargo, fue su deseo de compartir conocimiento lo que lo
                  trajo de vuelta. "Me di cuenta de que mi verdadero legado no
                  serían los conciertos que diera, sino los músicos que pudiera
                  ayudar a formar", comenta Rafael. Esta filosofía es el corazón
                  de nuestra escuela.
                </p>
                <p>
                  Bajo su liderazgo, RR Music Academy no solo enseña a tocar
                  instrumentos; enseña disciplina, escucha activa y la capacidad
                  de conectar emocionalmente a través del sonido. Rafael
                  supervisa personalmente los planes de estudio y mentoriza a
                  nuestro equipo de profesores para asegurar que la visión
                  original se mantenga intacta.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-rr-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Trayectoria Premiada
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Reconocido en certámenes nacionales e internacionales de
                      piano clásico.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Music className="h-6 w-6 text-rr-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Pedagogía Moderna
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Creador del método "RR", enfocado en la musicalidad desde
                      el primer día.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Star className="h-6 w-6 text-rr-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Liderazgo Visionario
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Ha formado a más de 500 estudiantes, muchos de los cuales
                      hoy son músicos profesionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Shot Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rr-blue rounded-2xl shadow-xl overflow-hidden text-center py-12 px-6 sm:py-16 sm:px-16 lg:py-20 lg:px-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">La música transforma vidas.</span>
              <span className="block text-blue-200">
                Déjanos guiar la tuya.
              </span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100 max-w-2xl mx-auto">
              "Mi puerta siempre está abierta para estudiantes y padres. En
              RR Music Academy, somos una familia unida por el arte."
            </p>
          </div>
        </div>
      </div>

      {/* NEW: DIRECTOR'S COLUMN (BLOG) */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-rr-blue font-semibold tracking-wide uppercase">
              Blog
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              La Columna del Director
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Reflexiones, consejos y artículos sobre el mundo de la música y la
              educación.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Artículo 1 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 bg-gray-200 h-48 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={IMAGES.director.article1}
                  alt="Artículo 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rr-blue">
                    Educación Musical
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      La importancia de la escucha activa
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      ¿Por qué es fundamental enseñar a escuchar antes de
                      enseñar a tocar? Descubre el método RR y cómo cambia la
                      perspectiva del estudiante.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <Link
                    to="/article/escucha-activa"
                    className="text-sm font-medium text-rr-blue hover:text-blue-800 cursor-pointer flex items-center gap-1"
                  >
                    Leer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Artículo 2 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 bg-gray-200 h-48 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={IMAGES.director.article2}
                  alt="Artículo 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rr-blue">
                    Para Padres
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      El rol de los padres en el aprendizaje
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Cómo apoyar a tu hijo en sus prácticas diarias sin generar
                      presión negativa. Consejos para crear un ambiente musical
                      en casa.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <Link
                    to="/article/el-rol-padres"
                    className="text-sm font-medium text-rr-blue hover:text-blue-800 cursor-pointer flex items-center gap-1"
                  >
                    Leer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Artículo 3 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 bg-gray-200 h-48 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={IMAGES.director.article3}
                  alt="Artículo 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rr-blue">Filosofía</p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      First human beings; then musicians
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Analizando la frase de Zoltán Kodály que inspira nuestra
                      visión como escuela. La formación integral del ser humano
                      a través del arte.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <Link
                    to="/article/first-human-beings"
                    className="text-sm font-medium text-rr-blue hover:text-blue-800 cursor-pointer flex items-center gap-1"
                  >
                    Leer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
