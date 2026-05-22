import { Teacher, Product } from './types';

// --- CONFIGURACIÓN DE IMÁGENES ---
export const IMAGES = {
  logo: '/images/logo.png',
  logoWhite: '/images/logo_blanco.png',
  
  hero: {
    main: '/images/carousel/carrusel_1.jpg',
    carousel: [
      '/images/carousel/carrusel_1.jpg',
      '/images/carousel/carrusel_2.jpg',
      '/images/carousel/carrusel_3.jpg',
      '/images/carousel/carrusel_4.jpg',
      '/images/carousel/carrusel_5.jpg',
    ]
  },
  elencos: {
    header: '/images/orquesta_sinfonica.jpeg',
    orquesta: '/images/orquesta_sinfonica.jpeg',
    coro: '/images/coro.jpeg',
    banda: '/images/banda.jpeg',
    ensambles: '/images/ensambles.jpeg'
  },
  about: {
    headerBackground: '/images/about_header.jpg',
    history: '/images/about_history.jpg',
  },
  director: {
    header: '/images/fondo_rafo.png',
    profile: '/images/rafo_director.png',
    action: '/images/fondo_rafo.png',
    article1: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    article2: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    article3: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  plans: {
    header: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2670&auto=format&fit=crop',
  },
  teachers: {
    header: '/images/teachers_header.jpg',
  },
  experiences: {
    header: '/images/about_header-1.jpg',
    vienna: [
        'https://images.unsplash.com/photo-1516483638261-f4dafaf00bc0?w=800&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dafaf00bc0?w=800&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dafaf00bc0?w=800&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dafaf00bc0?w=800&q=80',
    ],
    cusco: [
        'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
        'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
        'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
        'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
    ],
    brazil: [
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    ]
  },
  gallery: [
    '/images/carousel/carrusel_1.jpg',
    '/images/carousel/carrusel_2.jpg',
    '/images/carousel/carrusel_3.jpg',
    '/images/carousel/carrusel_4.jpg',
    '/images/carousel/carrusel_5.jpg',
  ],
  store: {
      header: '/images/about_history-1.jpg'
  }
};

// --- LISTA DE PROFESORES ---
export const TEACHERS_DATA: Teacher[] = [
  {
    id: '1',
    name: 'Gabriel Terry',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/gabriel_terry.png'
  },
  {
    id: '2',
    name: 'Jose Vega',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/jose_vega.png'
  },
  {
    id: '3',
    name: 'Leonardo Galvez',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/leonardo_galvez.png'
  },
  {
    id: '4',
    name: 'Renato Merino',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/renato_merino.png'
  },
  {
    id: '5',
    name: 'Carlos Perrigo',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/carlos_perrigo.png'
  },
  {
    id: '6',
    name: 'Diego Baglietto',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/diego_baglietto.png'
  },
  {
    id: '7',
    name: 'Diego Meneses',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/diego_meneses.png'
  },
  {
    id: '8',
    name: 'Eduardo Angulo',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/eduardo_angulo.png'
  },
  {
    id: '9',
    name: 'Emilio Zapata',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/emilio_zapata.png'
  },
  {
    id: '10',
    name: 'Gabriel Cutti',
    role: 'Profesor',
    bio: 'Profesor de RR Academy.',
    imageUrl: '/images/gabriel_cutti.png'
  }
];

// --- PRODUCTOS DE LA TIENDA ---
// NOTA: Asegúrate de crear la carpeta images/products/[id]/1.jpg, 2.jpg, 3.jpg
export const STORE_PRODUCTS: Product[] = [
    {
        id: 'g1',
        name: 'Guitarra Acústica Yamaha C40',
        price: 480,
        category: 'Cuerdas',
        description: 'La guitarra clásica más recomendada para estudiantes. Excelente resonancia, comodidad en el diapasón y durabilidad. Perfecta para tus primeras clases en la academia.',
        images: [
            '/images/products/g1/1.jpg',
            '/images/products/g1/2.jpg',
            '/images/products/g1/3.jpg'
        ]
    },
    {
        id: 'p1',
        name: 'Piano Digital Casio CDP-S110',
        price: 2100,
        category: 'Teclado',
        description: '88 teclas con acción de martillo escalada. Incluye pedal de sustain y atril. Sonido de piano de cola auténtico en un diseño compacto y portátil.',
        images: [
            '/images/products/p1/1.jpg',
            '/images/products/p1/2.jpg',
            '/images/products/p1/3.jpg'
        ]
    },
    {
        id: 'v1',
        name: 'Violín Stradella 4/4',
        price: 350,
        category: 'Cuerdas',
        description: 'Kit completo: Violín, arco, brea y estuche rígido. Ideal para iniciar el método Suzuki. Maderas seleccionadas para un sonido cálido.',
        images: [
            '/images/products/v1/1.jpg',
            '/images/products/v1/2.jpg',
            '/images/products/v1/3.jpg'
        ]
    },
    {
        id: 'd1',
        name: 'Batería Acústica Pearl Roadshow',
        price: 2800,
        category: 'Percusión',
        description: 'Set completo de 5 piezas con platillos y hardware incluido. Color Wine Red. Todo lo que necesitas para empezar a marcar el ritmo.',
        images: [
            '/images/products/d1/1.jpg',
            '/images/products/d1/2.jpg',
            '/images/products/d1/3.jpg'
        ]
    },
    {
        id: 'a1',
        name: 'Afinador Cromático Clip',
        price: 45,
        category: 'Accesorios',
        description: 'Alta precisión para guitarra, bajo, violín y ukelele. Pantalla LCD iluminada y giratoria de 360 grados. Batería incluida.',
        images: [
            '/images/products/a1/1.jpg',
            '/images/products/a1/2.jpg',
            '/images/products/a1/3.jpg'
        ]
    },
    {
        id: 'a2',
        name: 'Atril de Partituras Plegable',
        price: 60,
        category: 'Accesorios',
        description: 'Estructura metálica resistente, altura regulable y funda de transporte. Esencial para la lectura musical correcta y una buena postura.',
        images: [
            '/images/products/a2/1.jpg',
            '/images/products/a2/2.jpg',
            '/images/products/a2/3.jpg'
        ]
    },
    // MERCH
    {
        id: 'm1',
        name: 'Polera RR Official',
        price: 120,
        category: 'Merch',
        description: 'Hoodie negro con logo bordado de alta calidad. Algodón reactivo premium que no encoge. Viste la pasión por la música.',
        images: [
            '/images/products/m1/1.jpg',
            '/images/products/m1/2.jpg',
            '/images/products/m1/3.jpg'
        ]
    },
    {
        id: 'm2',
        name: 'Polo "Breathe Music"',
        price: 60,
        category: 'Merch',
        description: 'T-shirt de corte moderno con nuestro slogan. Disponible en blanco y negro. Algodón pima fresco y suave.',
        images: [
            '/images/products/m2/1.jpg',
            '/images/products/m2/2.jpg',
            '/images/products/m2/3.jpg'
        ]
    },
    {
        id: 'm3',
        name: 'Gorra RR Snapback',
        price: 45,
        category: 'Merch',
        description: 'Gorra urbana con logo en relieve 3D. Ajustable. Estilo clásico snapback para protegerte del sol con estilo.',
        images: [
            '/images/products/m3/1.jpg',
            '/images/products/m3/2.jpg',
            '/images/products/m3/3.jpg'
        ]
    },
    {
        id: 'm4',
        name: 'Tote Bag Musical',
        price: 35,
        category: 'Merch',
        description: 'Bolso de tela resistente ideal para llevar tus partituras y accesorios. Diseño ecológico y lavable.',
        images: [
            '/images/products/m4/1.jpg',
            '/images/products/m4/2.jpg',
            '/images/products/m4/3.jpg'
        ]
    }
];