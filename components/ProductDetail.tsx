import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check, Star } from 'lucide-react';
import { STORE_PRODUCTS } from '../constants';
import { useShop } from '../context/ShopContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, toggleCart } = useShop();
  
  // Buscar el producto
  const product = STORE_PRODUCTS.find(p => p.id === id);
  
  // Estado para la imagen seleccionada (índice)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <Link to="/store" className="text-rr-blue hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Volver a la tienda
        </Link>
      </div>
    );
  }

  // Asegurarnos de que hay imágenes, si no usar placeholder
  const images = product.images && product.images.length > 0 ? product.images : [''];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link to="/store" className="inline-flex items-center text-gray-500 hover:text-rr-blue transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a la tienda
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* --- COLUMNA IZQUIERDA: GALERÍA DE IMÁGENES --- */}
            <div className="p-8 bg-gray-50 border-r border-gray-100 flex flex-col">
              
              {/* Imagen Principal */}
              <div className="relative aspect-square w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 mb-4 group">
                <img 
                  src={images[selectedImageIndex]} 
                  alt={`${product.name} vista ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.querySelector('.fallback-main')!.classList.remove('hidden');
                  }}
                />
                <div className="fallback-main hidden absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                    <ShoppingBag className="w-16 h-16 opacity-20 mb-2" />
                    <span className="text-sm border border-gray-300 border-dashed p-1">FALTA FOTO {selectedImageIndex + 1}</span>
                </div>
              </div>

              {/* Miniaturas (Thumbnails) */}
              <div className="flex gap-4 overflow-x-auto pb-2 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx 
                        ? 'border-rr-blue ring-2 ring-rr-blue/20 ring-offset-2' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Miniatura ${idx + 1}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.backgroundColor = '#e5e7eb'; }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* --- COLUMNA DERECHA: DETALLES --- */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              
              <div className="mb-2">
                <span className="inline-block bg-blue-100 text-rr-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <h1 className="font-['Oswald'] text-4xl md:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                   {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-gray-400 text-sm">(Producto recomendado)</span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-8 flex items-baseline gap-2">
                S/{product.price}
                <span className="text-sm font-normal text-gray-500">precio final</span>
              </div>

              <div className="prose prose-blue text-gray-600 mb-10">
                <p className="text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Beneficios / Características rápidas */}
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                  <span>Garantía de la escuela</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                  <span>Asesoría gratuita con tu profesor</span>
                </li>
              </ul>

              {/* Botón de Acción */}
              <div className="mt-auto">
                <button
                  onClick={() => { addToCart(product); toggleCart(); }}
                  className="w-full bg-rr-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-3 text-lg"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Añadir al Carrito
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Pagos seguros vía transferencia o Yape/Plin al coordinar por WhatsApp.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;