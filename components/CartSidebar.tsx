import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useShop();

  // Número de WhatsApp de la escuela
  const WHATSAPP_NUMBER = "51958121740";

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = "Hola *RR Music Academy*, me gustaría realizar el siguiente pedido en la tienda:\n\n";
    
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - S/${item.price * item.quantity}\n`;
    });

    message += `\n*TOTAL: S/${cartTotal}*`;
    message += "\n\nQuedo atento a los métodos de pago. ¡Gracias!";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-rr-dark text-white">
          <div className="flex items-center gap-3">
             <ShoppingBag className="w-5 h-5" />
             <h2 className="font-['Oswald'] text-xl uppercase tracking-wider">Tu Carrito</h2>
          </div>
          <button onClick={toggleCart} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                 <ShoppingBag className="w-16 h-16 opacity-20" />
                 <p className="text-lg">Tu carrito está vacío</p>
                 <button onClick={toggleCart} className="text-rr-blue font-bold hover:underline">
                     Volver a la tienda
                 </button>
             </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                    {/* CORRECCIÓN: Usar item.images[0] en lugar de item.image */}
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" 
                         onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.backgroundColor = '#f3f4f6'; }} />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.name}</h3>
                    <p className="text-rr-blue font-bold text-sm mb-3">S/{item.price}</p>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-full">
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-rr-blue"
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-rr-blue"
                            >
                                <Plus className="w-3 h-3" />
                            </button>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total */}
        {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="text-2xl font-['Oswald'] font-bold text-gray-900">S/{cartTotal}</span>
                </div>
                <button 
                    onClick={handleCheckout}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                    <span>Pedir por WhatsApp</span>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.235c0-5.453 4.435-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </button>
            </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;