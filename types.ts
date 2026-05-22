export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  period?: string;
  desc?: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

// --- TIPOS PARA LA TIENDA ---
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Cuerdas' | 'Teclado' | 'Percusión' | 'Viento' | 'Accesorios' | 'Merch';
  images: string[]; // Cambio: Array de strings para múltiples imágenes
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}