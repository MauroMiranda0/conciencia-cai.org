import '../styles/sections/HeroSection.scss';

const SITE_CARDS = [
  {
    title: 'Sede Masculina',
    detail: '(Zona Pachuca)',
    points: ['Entorno de disciplina y reconstrucción'],
    cta: 'Sede Varones',
    tone: 'men',
    sede: 'hombres',
  },
  {
    title: 'Sede Femenina',
    detail: '(Zona Pachuca)',
    points: ['Espacio de contención y sanación'],
    cta: 'Sede Mujeres',
    tone: 'women',
    sede: 'mujeres',
  },
];

export default function HeroSection({ onSelectSede, onNavigate }) {
  const handleContactClick = () => {
    onNavigate?.('#contacto');
  };

  const handleSiteClick = (sede) => {
    onSelectSede?.(sede);
    onNavigate?.('#contacto');
  };

  return (
    <section
      className="landing-hero"
      id="inicio"
      aria-label="Clínica de Rehabilitación Pachuca - vista principal"
    >
      <div className="landing-hero__shell">
        <header className="landing-hero__intro">
          <p className="landing-hero__eyebrow">Vista principal</p>
          <div className="landing-hero__banner">
            <h1>Clínica de Rehabilitación Pachuca</h1>
          </div>
        </header>

        <div className="landing-hero__panel">
          <div className="landing-hero__grid">
            <figure
              className="landing-hero__image landing-hero__image--left"
              role="img"
              aria-label="Área reservada para imagen de paciente varonil"
            >
              <span>Imagen Hombre</span>
            </figure>

            <div className="landing-hero__copy">
              <p>
                Dos sedes especializadas, un mismo objetivo:
                <br />
                <strong>Tu recuperación integral en Pachuca.</strong>
              </p>
              <button type="button" className="landing-hero__contact-btn" onClick={handleContactClick}>
                Contacto valoración
              </button>
            </div>

            <figure
              className="landing-hero__image landing-hero__image--right"
              role="img"
              aria-label="Área reservada para imagen de paciente femenil"
            >
              <span>Imagen Mujer</span>
            </figure>
          </div>
        </div>

        <div className="landing-hero__sites-intro">
          <h2>Nuestras sedes en Pachuca</h2>
        </div>

        <div className="landing-hero__sites">
          {SITE_CARDS.map((site) => (
            <article
              key={site.title}
              className={`landing-hero__site-card landing-hero__site-card--${site.tone}`}
            >
              <header>
                <h3>
                  {site.title} <span>{site.detail}</span>
                </h3>
              </header>
              <ul>
                {site.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <button type="button" className="landing-hero__site-btn" onClick={() => handleSiteClick(site.sede)}>
                {site.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
