import '../styles/sections/JustificationSection.scss';

const JUSTIFICATIONS = [
  {
    title: 'Refuerzo del Cuidador',
    items: [
      'Se añadió lenguaje explícito de contención emocional (no estás solo, acompañamos personas).',
      'Se suavizó el tono institucional para reducir ansiedad en contexto de crisis.',
      'Se enfatizó la dignidad y el trato humano en todas las secciones.',
    ],
  },
  {
    title: 'Refuerzo del Sabio',
    items: [
      'Se mencionó de forma clara y reiterada el Modelo Minnesota y su duración.',
      'Se reforzó la estructura del proceso y el carácter multidisciplinario.',
      'Se incorporó la referencia al consejero certificado para aumentar autoridad y confianza.',
    ],
  },
  {
    title: 'Jerarquía mejorada',
    items: [
      'Primero se explica el por qué emocional (cuidado, acompañamiento).',
      'Después el cómo racional (modelo, método, equipo).',
      'Secciones reorganizadas para facilitar lectura en una landing page.',
    ],
  },
  {
    title: 'Ruta de color y sedes',
    items: [
      'El lenguaje permite diferenciar sedes sin fragmentar el mensaje.',
      'Se mantiene coherencia narrativa para una experiencia visual guiada por color.',
    ],
  },
];

export default function JustificationSection() {
  return (
    <section
      className="justification-section"
      id="justificacion"
      aria-label="Justificación de los cambios realizados"
    >
      <div className="container">
        <header className="justification-section__header">
          <p className="eyebrow">Justificación</p>
          <h2>Justificación de los cambios realizados</h2>
        </header>
        <div className="justification-section__grid">
          {JUSTIFICATIONS.map((block) => (
            <article key={block.title} className="justification-card reveal">
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
