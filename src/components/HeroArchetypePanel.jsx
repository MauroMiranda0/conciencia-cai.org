/**
 * @typedef {Object} HeroArchetypePanelProps
 * @property {{ title: string, body: string }} careSignal
 * @property {{ title: string, body: string }} sageSignal
 * @property {'care' | 'sage' | string} microArchetype
 * @property {'default' | string} careIntent
 * @property {() => void} onAdvanceSage
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
}) {
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
          <button
            type="button"
            className="hero-vista__micro-trigger"
            onClick={onAdvanceSage}
            aria-label="Ver otra guía clínica del comité terapéutico"
          >
            Nueva guía clínica
          </button>
        </article>
      </div>
    </section>
  );
}
