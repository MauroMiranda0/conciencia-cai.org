import '../styles/sections/JustificationSection.scss';

const JUSTIFICATIONS = [
  {
    title: 'Arquetipo del Cuidador',
    items: [
      'Hero con narrativa empática, énfasis en contención familiar y recordatorios de confidencialidad.',
      'Contact center renovado con garantías claras (respuesta 24/7, aviso de privacidad, acompañamiento).',
      'Tarjetas de sedes y valores con fondos suaves y microcopys que hablan de calidez y seguridad.',
    ],
  },
  {
    title: 'Arquetipo del Sabio',
    items: [
      'Nuevo bloque de metodología con fases del internamiento, métricas y compromisos clínicos.',
      'Tarjeta “Guía clínica” en el hero con pasos concretos del Modelo Minnesota + 12 Pasos.',
      'Datos duros visibles (120 días, +15 especialistas, supervisión 24/7) que refuerzan autoridad.',
    ],
  },
  {
    title: 'Experiencia visual coherente',
    items: [
      'Paleta en tonos salvia y arcilla que conecta ambos arquetipos y unifica componentes.',
      'Cartas, formularios y badges comparten radios amplios y sombras suaves para transmitir cuidado.',
      'Se redujo el ruido visual eliminando duplicaciones y alineando tipografía secundaria.',
    ],
  },
  {
    title: 'Flujo claro para conversión',
    items: [
      'App.jsx ahora renderiza todas las secciones clave y sincroniza la sede seleccionada.',
      'CTAs dirigen al formulario con la sede preseleccionada para disminuir fricción.',
      'Copy y jerarquía guían: primero emoción (por qué), después método (cómo) y finalmente contacto (qué sigue).',
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
