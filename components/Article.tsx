import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IMAGES } from '../constants';

const articlesData: Record<string, { title: string, category: string, date: string, image: string, content: React.ReactNode }> = {
  'escucha-activa': {
    title: 'La importancia de la escucha activa',
    category: 'Educación Musical',
    date: '10 de Mayo, 2024',
    image: IMAGES.director.article1,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">¿Por qué es fundamental enseñar a escuchar antes de enseñar a tocar?</h2>
        <p className="mb-4">
          En el aprendizaje musical existe una idea que muchas veces pasa desapercibida: antes de tocar un instrumento, primero hay que aprender a escuchar.
        </p>
        <p className="mb-4">
          En RR Academy creemos que la música no empieza en las manos, sino en los oídos, en la atención y en la sensibilidad. Por eso, uno de los pilares de nuestra enseñanza es desarrollar en nuestros estudiantes la capacidad de escuchar activamente.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Pero, ¿qué significa realmente escuchar?</h3>
        <p className="mb-4">
          No se trata solo de “oír sonidos”. Escuchar activamente implica prestar atención, identificar detalles, reconocer emociones, seguir ritmos, diferenciar instrumentos y entender cómo cada elemento se conecta dentro de una obra musical. Es un ejercicio de concentración, sensibilidad y conexión emocional.
        </p>
        <p className="mb-4 font-medium italic">
          Un niño que aprende a escuchar correctamente desarrolla mucho más que habilidades musicales.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">La escucha activa fortalece capacidades para toda la vida</h3>
        <p className="mb-4">
          Diversos estudios han demostrado que la educación musical ayuda al desarrollo cognitivo, emocional y social de los niños y jóvenes. Sin embargo, uno de los aspectos más valiosos es cómo la música mejora la atención y la capacidad de escucha.
        </p>
        <p className="mb-2">En RR trabajamos constantemente para que nuestros estudiantes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Mejoren su concentración.</li>
          <li>Aprendan a seguir instrucciones.</li>
          <li>Desarrollen paciencia y disciplina.</li>
          <li>Sean más sensibles al trabajo en equipo.</li>
          <li>Comprendan la importancia del respeto por los tiempos y espacios de los demás.</li>
        </ul>
        <p className="mb-4">
          Cuando un estudiante participa en una orquesta, un coro o una banda, descubre rápidamente que tocar bien no depende únicamente de su talento individual. Debe aprender a escuchar a quienes están a su alrededor, adaptarse al grupo y encontrar armonía con los demás.
        </p>
        <p className="mb-4 font-medium italic">Y esa es una enseñanza poderosa para la vida.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Escuchar antes de tocar cambia la perspectiva del estudiante</h3>
        <p className="mb-4">
          Muchos niños llegan a clases pensando que aprender música significa tocar canciones rápidamente. Pero cuando primero desarrollan la escucha activa, su relación con la música cambia por completo.
        </p>
        <p className="mb-2">Empiezan a:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>reconocer melodías,</li>
          <li>identificar emociones,</li>
          <li>entender estructuras musicales,</li>
          <li>desarrollar oído musical,</li>
          <li>y conectar emocionalmente con lo que interpretan.</li>
        </ul>
        <p className="mb-4">
          Esto hace que el aprendizaje sea más sólido, natural y duradero. En lugar de memorizar notas mecánicamente, comprenden realmente lo que están haciendo.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">El método RR: formar músicos y personas</h3>
        <p className="mb-4">
          En RR Academy buscamos formar mucho más que intérpretes. Queremos formar personas sensibles, disciplinadas, creativas y capaces de trabajar en equipo.
        </p>
        <p className="mb-2">Por eso nuestras clases combinan:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>técnica musical,</li>
          <li>entrenamiento auditivo,</li>
          <li>trabajo grupal,</li>
          <li>expresión artística,</li>
          <li>y desarrollo humano.</li>
        </ul>
        <p className="mb-4">
          Creemos que la música es una herramienta extraordinaria para construir confianza, autoestima y habilidades sociales.
        </p>
        <p className="mb-4 italic">
          Y todo comienza con algo aparentemente simple: aprender a escuchar.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Una habilidad que hoy es más importante que nunca</h3>
        <p className="mb-4">
          Vivimos en un mundo lleno de distracciones, pantallas e inmediatez. Cada vez es más difícil para niños y jóvenes mantener la atención durante largos periodos de tiempo. La música ayuda a recuperar esa capacidad.
        </p>
        <p className="mb-2">Cuando un estudiante escucha activamente:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>aprende a concentrarse,</li>
          <li>a ser paciente,</li>
          <li>a interpretar emociones,</li>
          <li>y a conectar con otras personas de manera más profunda.</li>
        </ul>
        <p className="mb-4">
          Por eso, en RR Academy, enseñar a escuchar no es un paso previo: es parte esencial de nuestra filosofía educativa.
        </p>
        <p className="mb-4 font-bold text-lg">
          Porque antes de formar grandes músicos, queremos ayudar a formar grandes personas.
        </p>
      </>
    )
  },
  'el-rol-padres': {
    title: 'El rol de los padres en el aprendizaje',
    category: 'Para Padres',
    date: '15 de Mayo, 2024',
    image: IMAGES.director.article2,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Cómo apoyar a tu hijo en sus prácticas diarias sin generar presión negativa</h2>
        <p className="mb-4">
          Cuando un niño empieza a estudiar música, el entusiasmo suele ser enorme. La ilusión de verlo tocar un instrumento, cantar o participar en una presentación llena de orgullo a toda la familia. Sin embargo, con el paso del tiempo, aparecen también los desafíos: la constancia, la disciplina, la frustración y las dificultades propias de cualquier proceso de aprendizaje.
        </p>
        <p className="mb-4 font-bold">
          Y es ahí donde el rol de los padres se vuelve fundamental.
        </p>
        <p className="mb-4">
          En RR Music Academy creemos que el desarrollo musical de un niño no depende únicamente del profesor o de las horas de clase. El entorno familiar tiene un impacto enorme en la motivación, la seguridad emocional y la continuidad del estudiante.
        </p>
        <p className="mb-4 font-bold">
          La buena noticia es que apoyar no significa presionar.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">La música debe construirse desde la motivación, no desde el miedo</h3>
        <p className="mb-4">
          Uno de los errores más comunes es convertir la práctica musical en una obligación rígida o en una fuente constante de presión.
        </p>
        <p className="mb-2">Frases como:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>“Tienes que practicar más.”</li>
          <li>“Tu compañero ya toca mejor.”</li>
          <li>“Si no practicas, no avanzarás.”</li>
          <li>“Con todo lo que cuesta la clase…”</li>
        </ul>
        <p className="mb-4">
          pueden generar ansiedad y hacer que el niño asocie la música con estrés en lugar de disfrute.
        </p>
        <p className="mb-4 font-medium italic">
          La música es disciplina, sí. Pero también es emoción, creatividad y conexión.
        </p>
        <p className="mb-4">
          Cuando un niño siente miedo a equivocarse o siente que nunca es suficiente, pierde confianza y muchas veces abandona el proceso.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">¿Cómo acompañar correctamente?</h3>
        <p className="mb-4">El acompañamiento más efectivo suele ser también el más sencillo.</p>

        <h4 className="text-lg font-semibold mt-4 mb-2">1. Valorar el esfuerzo, no solo el resultado</h4>
        <p className="mb-4">
          No todos los avances son inmediatos. Hay días en los que el progreso será visible y otros en los que parecerá que nada cambia.
        </p>
        <p className="mb-2">Reconocer el esfuerzo ayuda muchísimo:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>“Qué bueno verte practicar.”</li>
          <li>“Se nota que estás mejorando.”</li>
          <li>“Esa parte ya te sale mucho mejor.”</li>
        </ul>
        <p className="mb-4 font-medium">La motivación positiva genera confianza y constancia.</p>

        <h4 className="text-lg font-semibold mt-4 mb-2">2. Crear rutinas realistas</h4>
        <p className="mb-4">
          No es necesario que un niño practique durante horas para avanzar. De hecho, sesiones cortas pero constantes suelen ser mucho más efectivas.
        </p>
        <p className="mb-2">Lo importante es crear el hábito:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>un horario definido,</li>
          <li>un espacio tranquilo,</li>
          <li>y una rutina sostenible.</li>
        </ul>
        <p className="mb-4 font-medium">
          La música debe integrarse naturalmente a la vida familiar, no sentirse como un castigo.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">3. Permitir errores</h4>
        <p className="mb-4">
          Aprender música implica equivocarse constantemente. Todos los músicos —incluso los profesionales— pasan por procesos de frustración y repetición.
        </p>
        <p className="mb-4">Los errores no son señales de fracaso. Son parte del aprendizaje.</p>
        <p className="mb-4 font-medium">
          Cuando los padres reaccionan con paciencia y comprensión, el niño desarrolla mayor seguridad para seguir intentando.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">4. Evitar comparaciones</h4>
        <p className="mb-4">
          Cada estudiante tiene su propio ritmo. Comparar a un niño con sus compañeros, hermanos u otros músicos puede afectar seriamente su autoestima y su relación con la música.
        </p>
        <p className="mb-4 font-medium">
          Lo importante no es quién avanza más rápido, sino quién logra disfrutar y mantenerse en el proceso.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">El hogar también puede convertirse en un espacio musical</h3>
        <p className="mb-4">
          No es necesario que toda la familia sea músico para crear un ambiente que favorezca el aprendizaje.
        </p>
        <p className="mb-2">Pequeñas acciones hacen una gran diferencia:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>escuchar música en casa,</li>
          <li>asistir juntos a conciertos,</li>
          <li>conversar sobre canciones,</li>
          <li>ver presentaciones musicales,</li>
          <li>o simplemente interesarse por lo que el niño está aprendiendo.</li>
        </ul>
        <p className="mb-4 font-medium italic">
          Cuando la música forma parte del entorno familiar, el estudiante siente que su esfuerzo tiene valor y reconocimiento.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">La música también fortalece vínculos familiares</h3>
        <p className="mb-2">Muchos padres descubren que las clases de música terminan generando momentos especiales:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>acompañar ensayos,</li>
          <li>asistir a conciertos,</li>
          <li>celebrar avances,</li>
          <li>compartir canciones favoritas,</li>
          <li>o simplemente escuchar juntos.</li>
        </ul>
        <p className="mb-4">La música crea recuerdos. Y muchas veces, esos recuerdos permanecen toda la vida.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">En RR Music Academy creemos en el trabajo en equipo</h3>
        <p className="mb-2">El aprendizaje musical funciona mejor cuando existe una relación positiva entre:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>estudiante,</li>
          <li>profesores,</li>
          <li>y familia.</li>
        </ul>
        <p className="mb-4">
          Nuestro objetivo no es formar niños perfectos ni presionar por resultados inmediatos. Buscamos formar personas sensibles, seguras, disciplinadas y felices de descubrir el arte a través de la música.
        </p>
        <p className="mb-4 font-bold text-lg">
          Y en ese camino, los padres tienen un papel invaluable: acompañar, motivar y disfrutar junto a sus hijos el maravilloso proceso de aprender música.
        </p>
      </>
    )
  },
  'first-human-beings': {
    title: 'First human beings; then musicians',
    category: 'Filosofía',
    date: '20 de Mayo, 2024',
    image: IMAGES.director.article3,
    content: (
      <>
        <h2 className="text-xl font-semibold mb-4 text-gray-500 uppercase tracking-wide">La formación integral del ser humano a través del arte</h2>
        <p className="mb-4">
          Existe una frase del reconocido pedagogo musical húngaro Zoltán Kodály que resume de manera extraordinaria una filosofía educativa que hoy sigue más vigente que nunca:
        </p>
        <blockquote className="border-l-4 border-rr-blue pl-4 italic text-xl my-6 text-gray-800">
          <p className="mb-1">“First human beings; then musicians.”</p>
          <p>“Primero seres humanos; luego músicos.”</p>
        </blockquote>
        <p className="mb-4">
          En RR Music Academy esta idea representa una parte esencial de nuestra visión como escuela. Porque creemos que la música no debe formar únicamente intérpretes talentosos, sino también personas sensibles, disciplinadas, empáticas y capaces de relacionarse mejor con el mundo que las rodea.
        </p>
        <p className="mb-4 font-medium text-lg">
          La música es importante. Pero la persona siempre está primero.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Más allá de tocar un instrumento</h3>
        <p className="mb-2">Muchas veces, cuando pensamos en educación musical, imaginamos:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>técnica,</li>
          <li>partituras,</li>
          <li>conciertos,</li>
          <li>escalas,</li>
          <li>o perfección interpretativa.</li>
        </ul>
        <p className="mb-4">Sin embargo, el verdadero valor de la música va mucho más allá de lo artístico.</p>
        <p className="mb-2">Aprender música implica desarrollar habilidades humanas fundamentales:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>escuchar,</li>
          <li>respetar,</li>
          <li>trabajar en equipo,</li>
          <li>manejar frustraciones,</li>
          <li>perseverar,</li>
          <li>y aprender a expresarse emocionalmente.</li>
        </ul>
        <p className="mb-4 font-medium italic">
          Por eso, en RR entendemos la enseñanza musical como una herramienta de formación integral.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">La música enseña disciplina… pero también sensibilidad</h3>
        <p className="mb-4">
          Un estudiante de música aprende rápidamente que el progreso requiere constancia. Ningún instrumento se domina de la noche a la mañana.
        </p>
        <p className="mb-4">
          Pero además de disciplina, la música desarrolla algo igual de importante: sensibilidad.
        </p>
        <p className="mb-2">La capacidad de:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>reconocer emociones,</li>
          <li>interpretar sentimientos,</li>
          <li>conectar con otras personas,</li>
          <li>y expresarse de manera auténtica.</li>
        </ul>
        <p className="mb-4">
          En una época donde muchas veces predominan la velocidad, la distracción y la superficialidad, el arte ayuda a desarrollar una conexión humana mucho más profunda.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Una orquesta es también una escuela de vida</h3>
        <p className="mb-4">
          Cuando un niño o joven participa en una orquesta, banda o coro, vive experiencias que trascienden la música.
        </p>
        <p className="mb-2">Descubre que:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>nadie sobresale solo,</li>
          <li>escuchar es tan importante como tocar,</li>
          <li>cada integrante cumple un rol,</li>
          <li>y el trabajo colectivo puede lograr resultados extraordinarios.</li>
        </ul>
        <p className="mb-4">
          La música enseña humildad, colaboración y respeto mutuo.
        </p>
        <p className="mb-4 italic">
          Y quizás una de las lecciones más valiosas es entender que el éxito individual tiene más sentido cuando se construye junto a otros.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Formar personas seguras y creativas</h3>
        <p className="mb-4">
          En RR Music Academy buscamos que nuestros estudiantes desarrollen confianza en sí mismos, capacidad de expresión y libertad creativa.
        </p>
        <p className="mb-2">La música ayuda a muchos niños y jóvenes a:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>vencer la timidez,</li>
          <li>fortalecer su autoestima,</li>
          <li>desarrollar liderazgo,</li>
          <li>mejorar su comunicación,</li>
          <li>y descubrir talentos que muchas veces desconocían.</li>
        </ul>
        <p className="mb-4">
          Pero esto solo ocurre cuando el aprendizaje se desarrolla en un entorno positivo, humano y emocionalmente seguro.
        </p>
        <p className="mb-4 font-medium">
          Por eso, para nosotros, la formación artística siempre debe estar acompañada de formación humana.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">El arte como herramienta de transformación</h3>
        <p className="mb-4">
          La historia demuestra constantemente que la música y el arte tienen el poder de transformar vidas y comunidades.
        </p>
        <p className="mb-4">
          No solo porque generan oportunidades profesionales o desarrollo intelectual, sino porque ayudan a construir personas más conscientes, sensibles y conectadas con su entorno.
        </p>
        <p className="mb-4">
          En RR también creemos profundamente en el impacto social de la música. Por eso realizamos talleres gratuitos y actividades en distintas zonas del país, acercando oportunidades artísticas a niños y jóvenes que muchas veces no tendrían acceso a este tipo de formación.
        </p>
        <p className="mb-4 font-medium italic">
          Porque el arte no debería ser un privilegio. Debería ser una oportunidad para todos.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Primero seres humanos</h3>
        <p className="mb-4">La frase de Kodály nos recuerda algo esencial:</p>
        <p className="mb-4 font-bold text-lg text-rr-blue">
          la excelencia artística nunca debe estar por encima de la calidad humana.
        </p>
        <p className="mb-2">Un gran músico no se define únicamente por su técnica, sino también por:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>su sensibilidad,</li>
          <li>su capacidad de trabajar con otros,</li>
          <li>su empatía,</li>
          <li>su disciplina,</li>
          <li>y sus valores.</li>
        </ul>
        <p className="mb-4">
          En RR Music Academy queremos que nuestros estudiantes aprendan música, sí.
        </p>
        <p className="mb-4 font-medium">
          Pero sobre todo, queremos ayudarlos a convertirse en mejores personas.
        </p>
        <p className="mb-4 italic">
          Porque cuando el arte se enseña con humanidad, la música deja de ser solo aprendizaje…
          <br /><span className="font-bold">y se convierte en una experiencia que transforma vidas.</span>
        </p>
      </>
    )
  }
};

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? articlesData[id] : null;

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
        <Link to="/director" className="text-rr-blue hover:underline">Volver a Nuestro Director</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header Image */}
      <div className="w-full h-64 md:h-96 relative">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-2 block">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <p className="text-gray-200">
              {article.date}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/director" className="inline-flex items-center text-rr-blue hover:text-blue-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Nuestro Director
        </Link>
        <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default Article;
