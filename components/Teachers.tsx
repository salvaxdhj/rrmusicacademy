import React, { useState } from "react";
import { TEACHERS_DATA, IMAGES } from "../constants";

const TeacherCard: React.FC<{ teacher: any }> = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Consideramos que si la biografía tiene más de 120 caracteres, 
  // es muy probable que ocupe más de 3 líneas.
  const isLongBio = teacher.bio && teacher.bio !== "FALTA" && teacher.bio.length > 120;

  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* Contenedor de la imagen: garantizamos un cuadrado perfecto con pseudo-padding */}
      <div
        className="relative w-full max-w-[600px] bg-gray-100 rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl"
        style={{ paddingTop: "100%" }}
      >
        <img
          src={teacher.imageUrl}
          alt={teacher.name}
          className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
        {/* Fallback for teachers photos */}
        <div className="hidden absolute inset-0 bg-gray-100 flex items-center justify-center p-4 text-center">
          <span className="text-gray-400 font-bold border border-gray-300 p-2 border-dashed text-sm break-all">
            FOTO 600x600: {teacher.imageUrl.split("/").pop()}
          </span>
        </div>
      </div>
      <div className="mt-6 w-full flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-900">{teacher.name}</h3>
        <p className="text-sm font-bold text-rr-blue tracking-wide uppercase mt-1 mb-3">
          {teacher.role}
        </p>
        <div className="text-base text-gray-600 leading-relaxed text-left flex-grow flex flex-col">
          <p className={isExpanded ? "" : "line-clamp-3"}>
            {teacher.bio}
          </p>
          {isLongBio && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-rr-blue font-semibold mt-2 hover:underline focus:outline-none text-sm text-center"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Teachers: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="relative bg-rr-dark py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden bg-rr-dark">
          <img
            src={IMAGES.teachers.header}
            alt="Music Teachers"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Conoce a tus Maestros
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
            Un equipo de músicos profesionales dedicados a guiarte en cada paso
            de tu aprendizaje.
          </p>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS_DATA.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
