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
  galleryHeader: "/images/banner_galeria.png",
  gallery: [
    "/images/galeria_1.png",
    "/images/galeria_2.png",
    "/images/galeria_3.png",
    "/images/galeria_4.png",
    "/images/galeria_5.png",
    "/images/galeria_6.png",
    "/images/galeria_7.png",
    "/images/galeria_8.png",
    "/images/galeria_9.png",
    "/images/galeria_10.png",
    "/images/galeria_11.png",
    "/images/galeria_12.png",
  ],
  store: {
    header: "/images/about_history.jpg",
  },
};

// --- LISTA DE PROFESORES ---
export const TEACHERS_DATA: Teacher[] = [
  {
    id: "3",
    name: "Leonardo Carlos Gálvez Herrera",
    role: "Profesor de Piano",
    bio: "Pianista desde hace once años y multiinstrumentista en general. Formado en la UPC y actual docente de la Especialidad de Piano en RR Music Academy. Profesor del taller de ensamble musical en el colegio Franco Peruano, correpetidor del coro del colegio Maria Reina Marianistas y ganador de cuatro concursos de bandas organizado por la productora Culs.",
    imageUrl: "/images/leonardo_galvez.jpg",
  },
  {
    id: "1",
    name: "Gabriel Terry Pacheco",
    role: "Profesor y Coach Musical",
    bio: "Músico, compositor y productor musical, licenciado en Música por la UPC y magíster en Composición Musical con Nuevas Tecnologías por la UNIR. Su trayectoria reúne más de ocho años de experiencia en la docencia de instrumento y el coaching musical, acompañando a estudiantes y bandas en su crecimiento artístico con pasión, creatividad y compromiso. En paralelo, lidera Hitpoint, una agencia de sonido en la que ha desarrollado proyectos de composición musical e identidad sonora para distintas marcas a nivel nacional.",
    imageUrl: "/images/gabriel_terry.jpg",
  },
  {
    id: "4",
    name: "Renato Merino",
    role: "Profesor de Saxofón",
    bio: "Saxofonista, docente y director musical, bachiller en Interpretación en Saxofón por la Universidad Nacional de Música. Su trayectoria abarca el jazz, la música criolla y afroperuana, participando en producciones como Lima Jazz Fest 2023, HO HO HO Sinfónico, la inauguración del Nuevo Aeropuerto Jorge Chávez y espectáculos junto a Vanguardia Big Band y diversos artistas nacionales. Paralelamente, desarrolla una sólida labor como docente y arreglista, promoviendo una formación musical integral y la difusión del patrimonio musical peruano a través de propuestas artísticas de alto nivel.",
    imageUrl: "/images/renato_merino.jpg",
  },
  {
    id: "5",
    name: "Carlos Pérrigo Ñiquen",
    role: "Profesor de Bajo",
    bio: "Bajista, compositor y productor musical peruano, con experiencia en escenarios nacionales e internacionales. Actualmente integra la banda de Mauricio Mesones como bajista y desarrolla proyectos de producción para artistas emergentes, combinando la interpretación en vivo con el trabajo creativo en estudio. Además, se desempeña como músico de sesión, participando en diversas grabaciones y colaboraciones. Es bachiller en Composición Estilística por la Universidad Peruana de Ciencias Aplicadas (UPC). A lo largo de su trayectoria ha realizado giras por México, Argentina, Colombia y España, consolidando una carrera versátil que abarca la interpretación, la composición y la producción musical.",
    imageUrl: "/images/carlos_perrigo.jpg",
  },
  {
    id: "6",
    name: "Diego Baglietto Sifuentes",
    role: "Profesor de Batería y Percusión",
    bio: "Baterista y percusionista con más de diez años de trayectoria musical. Se formó en diversas escuelas, entre ellas Emanuel y RR Music Academy, donde actualmente se desempeña como coach musical y miembro de la fila de percusión de su Orquesta y Banda Sinfónica. Su experiencia musical incluye la grabación de un EP con la banda Sonido del Fuego. Actualmente, es el baterista oficial del imitador de Frank Sinatra del programa \"Yo Soy\". Con la sinfónica, ha participado en festivales nacionales e internacionales, destacando el Festival Internacional de Orquestas \"Cuerdas que unen, vidas que sanan\" en Ecuador, año 2025. Asimismo, continúa su perfeccionamiento técnico bajo la guía del maestro Hugo Alcázar.",
    imageUrl: "/images/diego_baglietto.jpg",
  },
  {
    id: "8",
    name: "Jesús Eduardo Angulo Arce",
    role: "Profesor de Guitarra",
    bio: "Guitarrista egresado de la carrera de música de la PUCP en la especialidad de Ejecución Musical con mención en Guitarra Popular. Durante su trayectoria universitaria fue alumno de diversos músicos reconocidos a nivel nacional e internacional como Cucho Arbañil, Alec Marambio, y Andrés Prado. Cuenta con experiencia en la docencia de guitarra y materias teórico-musicales desde el 2019. Siempre con una visión abierta y sin prejuicios sobre ningún tipo de música, los géneros musicales de su mayor interés son las distintas variedades del rock y el metal -desde los clásicos hasta los estilos modernos-, la música alternativa y el indie.",
    imageUrl: "/images/eduardo_angulo.jpg",
  },
  {
    id: "10",
    name: "Gabriel Cutti",
    role: "Profesor de Violín y Piano",
    bio: "Educador musical y licenciado en Música por la UPC. Posee una sólida experiencia en la enseñanza de violín, piano e iniciación musical para todas las edades. Su propuesta pedagógica se fundamenta en las metodologías Kodály y Martenot, con el objetivo de fomentar un desarrollo técnico, artístico y humano integral. En su faceta artística, integra actualmente la fila de primeros violines de la Orquesta Sinfónica RR Music Academy y se desempeña como músico de sesión, habiendo grabado para diversos proyectos artísticos locales e internacionales, así como para comerciales televisivos. Como docente, destaca por su vocación para inspirar y motivar a sus alumnos, guiándolos para alcanzar su máximo potencial tanto en la música como en su crecimiento personal.",
    imageUrl: "/images/gabriel_cutti.jpg",
  },
  {
    id: "9",
    name: "Emilio Nicolás Zapata Schiappacasse",
    role: "Profesor de Violín",
    bio: "Concertino de la Orquesta Sinfónica RR Music Academy y Profesor de Violín de la Escuela. Debutó como solista a los diez años con la Orquesta Sinfónica de Piura bajo la batuta del reconocido director de orquesta rumano David Marcian. En el 2025, ganó el primer puesto en el Concurso Internacional de Violín “Rubén Terteryan In Memoriam”, organizado por la Universidad Espíritu Santo (UEES) en Guayaquil, Ecuador. Participó del YAMF 2024, organizado por The Americas Cultural Youth Orchestra, en Houston - Texas donde fue concertino de la Orquesta del Festival. Ha trabajado con destacados directores, entre ellos: Dayner Tafur-Diaz, Carlota Mestanza, Nicholas Leh Baker, Ramiro Arista, Rafael Reyes. Actualmente, es alumno del reconocido violinista peruano Hugo Arias.",
    imageUrl: "/images/emilio_zapata.jpg",
  },
  {
    id: "7",
    name: "Diego Javier Meneses Neyra",
    role: "Profesor de Guitarra",
    bio: "Guitarrista, compositor y arreglista egresado de la Escuela de Música de la Pontificia Universidad Católica del Perú. Músico profesional con catorce años de experiencia tocando en vivo, ejecutando diversos géneros musicales, componiendo y dictando clases de música a alumnos de todas las edades. Domina la guitarra eléctrica, guitarra clásica, guitarra acústica, bajo eléctrico y el teclado -este último a nivel intermedio. Actualmente, ejerce la docencia en RR Music Academy como profesor de guitarra.",
    imageUrl: "/images/diego_meneses.jpg",
  },
  {
    id: "2",
    name: "Jose Luis Vega",
    role: "Profesor de Viento Metal",
    bio: "Educador musical con más de doce años de experiencia en la formación técnica, teórica y artística de estudiantes de nivel inicial, intermedio y avanzado. Estudió Educación Musical en la Universidad Nacional de Música, actualmente se encuentra especializándose en instrumentos de viento metal, siendo el Eufonio su instrumento principal. Su metodología integradora combina el rigor del lenguaje musical tradicional con enfoques prácticos orientados al desarrollo del oído, la técnica instrumental y la interpretación expresiva.",
    imageUrl: "/images/jose_vega.jpg",
  }
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
