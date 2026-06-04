import React from "react";
import { Hammer } from "lucide-react";

const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Hammer className="h-12 w-12 text-rr-blue" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Sitio en Mantenimiento
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Estamos realizando mejoras en nuestro sitio web. Estaremos de vuelta muy pronto. ¡Gracias por tu paciencia!
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
