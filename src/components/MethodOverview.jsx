import '../styles/components/MethodOverview.scss';

const BASE_STEPS = [
  {
    title: 'Admisión confidencial',
    detail: 'Evaluamos indicadores médicos, emocionales y familiares en menos de dos horas para definir el plan residencial.',
  },
  {
    title: 'Programa residencial de 4 meses',
    detail: 'Integramos Modelo Minnesota + 12 Pasos, terapia individual, grupos y acompañamiento espiritual.',
  },
  {
    title: 'Familia contenida',
    detail: 'Sesiones educativas, contratos de convivencia y rituales semanales para sostener límites sanos.',
  },
  {
    title: 'Egreso acompañado',
    detail: 'Seguimiento híbrido durante 12 meses con métricas de riesgo y padrinazgo activo.',
  },
];

const METHOD_VARIANTS = {
  men: {
    steps: [
      {
        title: 'Rutinas estructuradas',
        detail: 'Supervisión clínica 24/7, actividad física guiada y mentorías de liderazgo.',
      },
      {
        title: 'Tableros de progreso',
        detail: 'Bitácoras diarias y métricas interpretadas con el residente y su familia.',
      },
    ],
  },
  women: {
    lead: 'Sostiene contención, seguridad y autonomía femenina.',
    steps: [
      {
        title: 'Trauma informado',
        detail: 'Doulas emocionales, terapeutas de trauma y rituales de autocuidado diarios.',
      },
      {
        title: 'Red segura',
        detail: 'Círculos de confianza, mentorías financieras y acompañamiento espiritual práctico.',
      },
    ],
  },
};

/**
 * @typedef {'mixed' | 'men' | 'women'} MethodTone
 */

/**
 * @typedef {Object} MethodOverviewProps
 * @property {MethodTone} [tone]
 * @property {string} [title]
 * @property {string} [eyebrow]
 * @property {string | import('react').ReactNode} [description]
 * @property {import('react').ReactNode} [introExtra]
 */

/**
 * @param {MethodOverviewProps} props
 */
export default function MethodOverview({
  tone = 'mixed',
  title = 'Método Minnesota con fundamento y sentido humano',
  eyebrow = 'Modelo terapéutico',
  description = 'Acompañamiento profesional para una recuperación integral. Integramos ciencia, espiritualidad y contención familiar para que cada fase tenga claridad.',
  introExtra = null,
}) {
  const variant = METHOD_VARIANTS[tone] ?? null;
  const highlightedSteps = variant ? variant.steps : [];
  const steps = [...BASE_STEPS];
  highlightedSteps.forEach((step, index) => {
    if (index < steps.length) {
      steps[index] = step;
    } else {
      steps.push(step);
    }
  });

  const descriptionContent =
    typeof description === 'string' ? (
      <p>
        {description}{' '}
        {variant?.lead ? (
          <strong className="method-overview__lead" aria-live="polite">
            {variant.lead}
          </strong>
        ) : null}
      </p>
    ) : (
      <>
        {description}
        {variant?.lead ? (
          <p>
            <strong className="method-overview__lead" aria-live="polite">
              {variant.lead}
            </strong>
          </p>
        ) : null}
      </>
    );

  return (
    <section className={`method-overview method-overview--${tone}`} aria-labelledby={`method-${tone}`}>
      <div className="container method-overview__grid">
        <div className="method-overview__intro">
          <p className="hero-vista__trust-eyebrow">{eyebrow}</p>
          <h2 id={`method-${tone}`}>{title}</h2>
          {descriptionContent}
          {introExtra}
        </div>
        <ol className="method-overview__steps" role="list">
          {steps.map((step, index) => (
            <li key={`${step.title}-${index}`} className="method-overview__step">
              <span className="method-overview__step-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
