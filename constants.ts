import { Teacher, Product } from "./types";

// --- CONFIGURACIÓN DE IMÁGENES ---
export const IMAGES = {
  logo: "/images/logo.png",
  logoWhite: "/images/logo_blanco.png",

  hero: {
    main: "/images/carrusel_1.jpg",
    carousel: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_2.jpg",
      "/images/carrusel_3.jpg",
      "/images/carrusel_4.jpg",
      "/images/carrusel_5.jpg",
    ],
  },
  elencos: {
    header: "/images/orquesta_sinfonica.jpeg",
    orquesta: "/images/orquesta_sinfonica.jpeg",
    coro: "/images/coro.jpeg",
    banda: "/images/banda.jpeg",
    ensambles: "/images/ensambles.jpeg",
  },
  about: {
    headerBackground: "/images/about_header.jpg",
    history: "/images/about_history.jpg",
  },
  director: {
    header: "/images/fondo_rafo.png",
    profile: "/images/rafo_director.png",
    action: "/images/fondo_rafo.png",
    article1: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    article2: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    article3: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  plans: {
    header: "/images/about_header.jpg",
  },
  teachers: {
    header: "/images/teachers_header.jpg",
  },
  experiences: {
    header: "/images/about_header.jpg",
    vienna: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_2.jpg",
      "/images/carrusel_3.jpg",
      "/images/carrusel_4.jpg",
    ],
    cusco: [
      "/images/carrusel_5.jpg",
      "/images/coro.jpeg",
      "/images/banda.jpeg",
      "/images/ensambles.jpeg",
    ],
    brazil: [
      "/images/orquesta_sinfonica.jpeg",
      "/images/about_header.jpg",
      "/images/about_history.jpg",
      "/images/teachers_header.jpg",
    ],
  },
  gallery: [
    "/images/carrusel_1.jpg",
    "/images/carrusel_2.jpg",
    "/images/carrusel_3.jpg",
    "/images/carrusel_4.jpg",
    "/images/carrusel_5.jpg",
  ],
  store: {
    header: "/images/about_history.jpg",
  },
};

// --- LISTA DE PROFESORES ---
export const TEACHERS_DATA: Teacher[] = [
  {
    id: "1",
    name: "Gabriel Terry",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/gabriel_terry.jpg",
  },
  {
    id: "2",
    name: "Jose Vega",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/jose_vega.jpg",
  },
  {
    id: "3",
    name: "Leonardo Galvez",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/leonardo_galvez.jpg",
  },
  {
    id: "4",
    name: "Renato Merino",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/renato_merino.jpg",
  },
  {
    id: "5",
    name: "Carlos Perrigo",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/carlos_perrigo.jpg",
  },
  {
    id: "6",
    name: "Diego Baglietto",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/diego_baglietto.jpg",
  },
  {
    id: "7",
    name: "Diego Meneses",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/diego_meneses.jpg",
  },
  {
    id: "8",
    name: "Eduardo Angulo",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/eduardo_angulo.jpg",
  },
  {
    id: "9",
    name: "Emilio Zapata",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/emilio_zapata.jpg",
  },
  {
    id: "10",
    name: "Gabriel Cutti",
    role: "Profesor",
    bio: "Profesor de RR Academy.",
    imageUrl: "/images/gabriel_cutti.jpg",
  },
];

// --- PRODUCTOS DE LA TIENDA ---
// NOTA: Asegúrate de crear la carpeta images/products/[id]/1.jpg, 2.jpg, 3.jpg
export const STORE_PRODUCTS: Product[] = [
  {
    id: "g1",
    name: "Guitarra Acústica Yamaha C40",
    price: 480,
    category: "Cuerdas",
    description:
      "La guitarra clásica más recomendada para estudiantes. Excelente resonancia, comodidad en el diapasón y durabilidad. Perfecta para tus primeras clases en la academia.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "p1",
    name: "Piano Digital Casio CDP-S110",
    price: 2100,
    category: "Teclado",
    description:
      "88 teclas con acción de martillo escalada. Incluye pedal de sustain y atril. Sonido de piano de cola auténtico en un diseño compacto y portátil.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "v1",
    name: "Violín Stradella 4/4",
    price: 350,
    category: "Cuerdas",
    description:
      "Kit completo: Violín, arco, brea y estuche rígido. Ideal para iniciar el método Suzuki. Maderas seleccionadas para un sonido cálido.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "d1",
    name: "Batería Acústica Pearl Roadshow",
    price: 2800,
    category: "Percusión",
    description:
      "Set completo de 5 piezas con platillos y hardware incluido. Color Wine Red. Todo lo que necesitas para empezar a marcar el ritmo.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "a1",
    name: "Afinador Cromático Clip",
    price: 45,
    category: "Accesorios",
    description:
      "Alta precisión para guitarra, bajo, violín y ukelele. Pantalla LCD iluminada y giratoria de 360 grados. Batería incluida.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "a2",
    name: "Atril de Partituras Plegable",
    price: 60,
    category: "Accesorios",
    description:
      "Estructura metálica resistente, altura regulable y funda de transporte. Esencial para la lectura musical correcta y una buena postura.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  // MERCH
  {
    id: "m1",
    name: "Polera RR Official",
    price: 120,
    category: "Merch",
    description:
      "Hoodie negro con logo bordado de alta calidad. Algodón reactivo premium que no encoge. Viste la pasión por la música.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "m2",
    name: 'Polo "Breathe Music"',
    price: 60,
    category: "Merch",
    description:
      "T-shirt de corte moderno con nuestro slogan. Disponible en blanco y negro. Algodón pima fresco y suave.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "m3",
    name: "Gorra RR Snapback",
    price: 45,
    category: "Merch",
    description:
      "Gorra urbana con logo en relieve 3D. Ajustable. Estilo clásico snapback para protegerte del sol con estilo.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
  {
    id: "m4",
    name: "Tote Bag Musical",
    price: 35,
    category: "Merch",
    description:
      "Bolso de tela resistente ideal para llevar tus partituras y accesorios. Diseño ecológico y lavable.",
    images: [
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
      "/images/carrusel_1.jpg",
    ],
  },
];
