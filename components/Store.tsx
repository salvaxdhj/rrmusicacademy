import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { STORE_PRODUCTS, IMAGES } from '../constants';
import { ShoppingBag, Filter, Eye } from 'lucide-react';
import { Product } from '../types';

const Store: React.FC = () => {
  const { addToCart, toggleCart, cartCount } = useShop();
  const [filter, setFilter] = useState<'Todos' | Product['category']>('Todos');

  const categories = ['Todos', 'Cuerdas', 'Teclado', 'Percusión', 'Viento', 'Accesorios', 'Merch'];

  const filteredProducts = filter === 'Todos' 
    ? STORE_PRODUCTS 
    : STORE_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen relative">
      
      {/* BOTÓN FLOTANTE DEL CARRITO */}
      <button 
        onClick={toggleCart}
        className="fixed bottom-8 right-8 z-40 bg-rr-blue text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center group border-2 border-white"
        aria-label="Ver carrito"
      >
        <ShoppingBag className="w-6 h-6" />
        {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount}
            </span>
        )}
      </button>

      {/* Header Store - Fondo azul degradado */}
      <div className="relative bg-gradient-to-b from-rr-blue to-blue-900 h-80 overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src={IMAGES.store?.header || IMAGES.plans.header} 
                alt="Instrument Store" 
                className="w-full h-full object-cover opacity-30"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-blue-200 font-['Oswald'] uppercase tracking-widest text-lg mb-2">Tienda Oficial</span>
            <h1 className="text-5xl md:text-7xl font-['Oswald'] text-white font-bold uppercase tracking-tight">
                RR music store
            </h1>
            <p className="text-blue-100 max-w-xl mt-4 text-lg font-light">
                Equípate con los mejores instrumentos seleccionados por nuestros profesores.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-24">
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-12 flex flex-wrap gap-2 justify-center border border-gray-100">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all text-sm uppercase tracking-wide
                        ${filter === cat 
                            ? 'bg-rr-dark text-white shadow-md' 
                            : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                    
                    {/* Image Area - Link to Detail */}
                    <Link to={`/store/product/${product.id}`} className="relative h-64 bg-gray-100 overflow-hidden block">
                        {/* Usamos la primera imagen del array */}
                        <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.querySelector('.fallback-img')!.classList.remove('hidden');
                            }}
                        />
                        <div className="fallback-img hidden absolute inset-0 flex items-center justify-center flex-col text-gray-400">
                             <ShoppingBag className="w-12 h-12 opacity-20 mb-2" />
                             <span className="text-xs border border-gray-300 border-dashed p-1">FALTA FOTO</span>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-rr-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
                            {product.category}
                        </div>

                        {/* Hover Overlay "Ver Detalle" */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                            <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                                <Eye className="w-4 h-4" /> Ver Detalle
                            </span>
                        </div>
                    </Link>

                    {/* Info Area */}
                    <div className="p-6 flex flex-col flex-1">
                        <Link to={`/store/product/${product.id}`} className="block">
                            <h3 className="font-['Oswald'] text-2xl text-gray-900 leading-tight mb-2 group-hover:text-rr-blue transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                            {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-gray-900">
                                S/{product.price}
                            </span>
                            <button 
                                onClick={() => addToCart(product)}
                                className="bg-rr-blue hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform active:scale-95 transition-all"
                                aria-label="Añadir al carrito"
                            >
                                <ShoppingBag className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No hay productos en esta categoría por el momento.</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default Store;