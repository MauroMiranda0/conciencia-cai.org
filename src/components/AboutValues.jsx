import '../styles/components/AboutValues.scss';

const CORE_VALUES = ['Dignidad en cada interacción', 'Profesionalismo clínico', 'Integridad y transparencia'];

/**
 * @typedef {'men' | 'women'} AboutTone
 */

/**
 * @typedef {Object} AboutValuesProps
 * @property {AboutTone} tone
 * @property {string} [title]
 */

/**
 * @param {AboutValuesProps} props
 */
export default function AboutValues({ tone, title = 'Quiénes somos' }) {
  const toneCopy =
    tone === 'men'
      ? 'Acompañamos procesos masculinos con énfasis en responsabilidad, hábitos conscientes y reintegración laboral.'
      : 'Contenemos procesos femeninos con protocolos de seguridad emocional, autonomía y acompañamiento solidario.';

  return (
    <section className={`about-values about-values--${tone}`} aria-labelledby={`about-${tone}`}>
      <div className="container about-values__grid">
        <div className="about-values__intro">
          <p className="hero-vista__trust-eyebrow">Acerca de nosotros</p>
          <h2 id={`about-${tone}`}>{title}</h2>
          <p>
            Operamos en Pachuca, Hidalgo con dos sedes independientes — varonil y femenil — que comparten la misma misión:
            <strong> acompañamiento profesional para una recuperación integral.</strong>
          </p>
          <p>
            Modelo Minnesota + 12 Pasos en un programa residencial de 4 meses, confidencial desde el primer contacto.{' '}
            {toneCopy}
          </p>
        </div>
        <div className="about-values__panel">
          <h3>Valores que nos guían</h3>
          <ul>
            {CORE_VALUES.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
          <p>Confidencialidad, espiritualidad práctica y acompañamiento familiar complementan cada fase.</p>
        </div>
      </div>
    </section>
  );
}
