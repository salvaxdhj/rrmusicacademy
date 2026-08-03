const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const teachersData = `export const TEACHERS_DATA: Teacher[] = [
  {
    id: "2",
    name: "Jose Luis Vega",
    role: "Profesor de Viento Metal",
    bio: "Educador musical con más de doce años de experiencia en la formación técnica, teórica y artística de estudiantes de nivel inicial, intermedio y avanzado. Estudió Educación Musical en la Universidad Nacional de Música, actualmente se encuentra especializándose en instrumentos de viento metal, siendo el Eufonio su instrumento principal. Su metodología integradora combina el rigor del lenguaje musical tradicional con enfoques prácticos orientados al desarrollo del oído, la técnica instrumental y la interpretación expresiva.",
    imageUrl: "/images/jose_vega.jpg",
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
    bio: "Baterista y percusionista con más de diez años de trayectoria musical. Se formó en diversas escuelas, entre ellas Emanuel y RR Music Academy, donde actualmente se desempeña como coach musical y miembro de la fila de percusión de su Orquesta y Banda Sinfónica. Su experiencia musical incluye la grabación de un EP con la banda Sonido del Fuego. Actualmente, es el baterista oficial del imitador de Frank Sinatra del programa \\"Yo Soy\\". Con la sinfónica, ha participado en festivales nacionales e internacionales, destacando el Festival Internacional de Orquestas \\"Cuerdas que unen, vidas que sanan\\" en Ecuador, año 2025. Asimismo, continúa su perfeccionamiento técnico bajo la guía del maestro Hugo Alcázar.",
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
    id: "7",
    name: "Diego Javier Meneses Neyra",
    role: "Profesor de Guitarra",
    bio: "Guitarrista, compositor y arreglista egresado de la Escuela de Música de la Pontificia Universidad Católica del Perú. Músico profesional con catorce años de experiencia tocando en vivo, ejecutando diversos géneros musicales, componiendo y dictando clases de música a alumnos de todas las edades. Domina la guitarra eléctrica, guitarra clásica, guitarra acústica, bajo eléctrico y el teclado -este último a nivel intermedio. Actualmente, ejerce la docencia en RR Music Academy como profesor de guitarra.",
    imageUrl: "/images/diego_meneses.jpg",
  },
  {
    id: "3",
    name: "Leonardo Carlos Gálvez Herrera",
    role: "Profesor de Piano",
    bio: "Pianista desde hace once años y multiinstrumentista en general. Formado en la UPC y actual docente de la Especialidad de Piano en RR Music Academy. Profesor del taller de ensamble musical en el colegio Franco Peruano, correpetidor del coro del colegio Maria Reina Marianistas y ganador de cuatro concursos de bandas organizado por la productora Culs.",
    imageUrl: "/images/leonardo_galvez.jpg",
  },
  {
    id: "9",
    name: "Emilio Nicolás Zapata Schiappacasse",
    role: "Profesor de Violín",
    bio: "Concertino de la Orquesta Sinfónica RR Music Academy y Profesor de Violín de la Escuela. Debutó como solista a los diez años con la Orquesta Sinfónica de Piura bajo la batuta del reconocido director de orquesta rumano David Marcian. En el 2025, ganó el primer puesto en el Concurso Internacional de Violín “Rubén Terteryan In Memoriam”, organizado por la Universidad Espíritu Santo (UEES) en Guayaquil, Ecuador. Participó del YAMF 2024, organizado por The Americas Cultural Youth Orchestra, en Houston - Texas donde fue concertino de la Orquesta del Festival. Ha trabajado con destacados directores, entre ellos: Dayner Tafur-Diaz, Carlota Mestanza, Nicholas Leh Baker, Ramiro Arista, Rafael Reyes. Actualmente, es alumno del reconocido violinista peruano Hugo Arias.",
    imageUrl: "/images/emilio_zapata.jpg",
  }
];`;

const startIndex = content.indexOf('export const TEACHERS_DATA: Teacher[] = [');
const endIndex = content.indexOf('// --- PRODUCTOS DE LA TIENDA ---');

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + teachersData + '\n\n' + content.substring(endIndex);
    fs.writeFileSync('constants.ts', content);
}
