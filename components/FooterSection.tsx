import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact-section" className="bg-rr-dark text-white pt-16 pb-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={IMAGES.logoWhite} 
                alt="RR Music Academy" 
                className="h-20 w-auto object-contain"
              />

              {/* SLOGAN */}
              <div className="flex flex-col justify-center space-y-0">
                <span className="font-['Oswald'] text-lg font-bold text-white tracking-tight leading-none uppercase">LIVE, CONNECT,</span>
                <span className="font-['Oswald'] text-lg font-bold text-white tracking-tight leading-none uppercase">AND BREATHE MUSIC</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Formando músicos apasionados con excelencia técnica y artística desde 2010.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Escuela</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-white text-sm transition-colors">Planes y Precios</Link></li>
              <li><Link to="/teachers" className="text-gray-400 hover:text-white text-sm transition-colors">Nuestro Equipo</Link></li>
              <li><Link to="/experiences" className="text-gray-400 hover:text-white text-sm transition-colors">Experiencias</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              {/* Sede Miraflores */}
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-rr-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Sede Miraflores:</span>
                  <span>Calle Luis Arias Schreiber N° 217 Urb. La Aurora Of. 201</span>
                </div>
              </li>
              
              {/* Sede San Borja */}
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-rr-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Sede San Borja:</span>
                  <span>Av. Joaquín Madrid 441</span>
                </div>
              </li>

              <li className="flex items-center gap-3 text-gray-400 text-sm pt-2 border-t border-gray-800">
                <Phone className="h-5 w-5 text-rr-blue shrink-0" />
                <span>958 121 740</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-rr-blue shrink-0" />
                <span>informes@rrmusiccorp.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/rrmusic_academy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-rr-blue transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61567082015905&locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-rr-blue transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RR Music Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;