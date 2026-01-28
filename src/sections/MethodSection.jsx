import InfoCard from '../components/InfoCard.jsx';
import '../styles/sections/MethodSection.scss';

const CARDS = [
  {
    title: 'Modelo Minnesota',
    text:
      'Integramos el Programa de 12 Pasos con intervenciones médicas y psicológicas supervisadas.',
  },
  {
    title: 'Internamiento de 120 días',
    text:
      'Fases claramente definidas que permiten estabilizar, restaurar hábitos y preparar el egreso.',
  },
  {
    title: 'Alianza con la familia',
    text:
      'Sesiones de psicoeducación, seguimiento y acuerdos claros para sostener la recuperación.',
  },
];

const PHASES = [
  {
    title: 'Ingreso y diagnóstico',
    duration: 'Semanas 1 y 2',
    description:
      'Historia clínica, evaluación psicológica, plan nutricional y acompañamiento cercano a la familia.',
  },
  {
    title: 'Integración terapéutica',
    duration: 'Semanas 3 a 10',
    description:
      'Rutinas diarias con sesiones individuales, trabajo de 12 Pasos, grupos y actividades ocupacionales.',
  },
  {
    title: 'Egreso acompañado',
    duration: 'Semanas 11 y 12',
    description:
      'Plan de continuidad, reuniones con la familia y seguimiento del consejero certificado.',
  },
];

const TEAM_COMMITMENTS = [
  'Equipo multidisciplinario de médicos, psicólogos, terapeutas y consejeros certificados.',
  'Supervisión clínica diaria y juntas semanales para ajustar los planes de tratamiento.',
  'Acompañamiento del consejero certificado José Alberto Porraz Juárez.',
];

export default function MethodSection() {
  return (
    <section className="method-section" id="metodo" aria-label="Modelo Minnesota con 12 Pasos">
      <div className="container">
        <header className="method-section__header">
          <p className="eyebrow">Modelo terapéutico</p>
          <h2>Metodología que une el cuidado humano con la sabiduría clínica</h2>
          <p>
            Nuestro programa residencial combina la calidez del Cuidador con la claridad del Sabio:
            personas acompañadas paso a paso por un modelo estructurado, medible y ético.
          </p>
        </header>
        <div className="method-section__content">
          <div className="method-section__text reveal">
            <p>
              El proceso dura <strong>120 días</strong> porque respetamos los tiempos reales que
              requiere la recuperación. Cada fase tiene objetivos terapéuticos, métricas clínicas y
              acompañamiento familiar.
            </p>
            <p>
              Equilibramos intervenciones basadas en evidencia con contención emocional continua. No
              se trata solo de lograr abstinencia: buscamos restaurar la dignidad y el proyecto de
              vida.
            </p>
            <blockquote className="method-section__quote">
              <p>“Curar con ciencia, sostener con humanidad”.</p>
            </blockquote>
          </div>
          <div className="method-section__grid">
            {CARDS.map((card, index) => (
              <InfoCard
                key={card.title}
                {...card}
                className={`reveal reveal--delay-${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="method-section__timeline">
          {PHASES.map((phase) => (
            <article key={phase.title} className="method-section__phase">
              <p className="method-section__phase-duration">{phase.duration}</p>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>

        <div className="method-section__panel reveal">
          <h3>Equipo clínico y acompañamiento</h3>
          <ul>
            {TEAM_COMMITMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
