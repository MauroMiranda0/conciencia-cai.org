/**
 * @typedef {Object} HeroArchetypePanelProps
 * @property {{ title: string, body: string }} careSignal
 * @property {{ title: string, body: string }} sageSignal
 * @property {'care' | 'sage' | string} microArchetype
 * @property {'default' | string} careIntent
 * @property {() => void} onAdvanceSage
 * @property {() => void} [onRewindSage]
 */

/**
 * @param {HeroArchetypePanelProps} props
 */
export default function HeroArchetypePanel({
  careSignal,
  sageSignal,
  microArchetype,
  careIntent,
  onAdvanceSage,
  onRewindSage,
}) {
  const handleRewind = () => {
    onRewindSage?.();
  };

  const handleAdvance = () => {
    onAdvanceSage?.();
  };

  return (
    <section
      className="hero-vista__micro-panel site-card"
      aria-label="Operación clínica Conciencia CAI"
      aria-live="polite"
      data-archetype={microArchetype}
    >
      <header className="hero-vista__micro-header">
        <p className="hero-vista__trust-eyebrow">Coordinación clínica 24/7</p>
        <h3>Seguimiento humano en tiempo real</h3>
        <p className="hero-vista__micro-legend">
          Guardias médicas y consejeros senior supervisan cada solicitud, mientras el comité terapéutico documenta y
          traduce los hallazgos para tu familia.
        </p>
      </header>
      <div className="hero-vista__micro-columns">
        <article className={`hero-vista__micro-card hero-vista__micro-card--care hero-vista__micro-card--${careIntent}`}>
          <p className="hero-vista__micro-label">Coordinación activa</p>
          <strong>{careSignal.title}</strong>
          <span>{careSignal.body}</span>
        </article>
        <article className="hero-vista__micro-card hero-vista__micro-card--sage" aria-live="polite">
          <p className="hero-vista__micro-label">Comité terapéutico</p>
          <strong>{sageSignal.title}</strong>
          <span>{sageSignal.body}</span>
          <div className="hero-vista__micro-nav" role="group" aria-label="Navegar guías clínicas">
            <button
              type="button"
              className="hero-vista__micro-nav-btn"
              onClick={handleRewind}
              aria-label="Ver guía clínica anterior"
              disabled={!onRewindSage}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              className="hero-vista__micro-nav-btn"
              onClick={handleAdvance}
              aria-label="Ver siguiente guía clínica"
              disabled={!onAdvanceSage}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </article>
      </div>
      <p className="hero-vista__micro-note">
        La atención se fundamenta en principios éticos y humanos, garantizando un acompañamiento integral que respeta la
        dignidad de cada persona. El enfoque clínico se complementa con sensibilidad y cercanía, asegurando que la
        recuperación sea tanto técnica como emocional.
      </p>
    </section>
  );
}

function ArrowIcon({ direction = 'right' }) {
  const rotation = direction === 'left' ? 'rotate(180 12 12)' : undefined;
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <g transform={rotation}>
        <path d="M8.29 5.3a1 1 0 0 0 0 1.4L12.59 11H5a1 1 0 0 0 0 2h7.59l-4.3 4.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0z" />
      </g>
    </svg>
  );
}
