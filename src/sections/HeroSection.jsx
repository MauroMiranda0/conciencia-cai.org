import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import info12steps from '../assets/infografia.webp';
import '../styles/sections/HeroSection.scss';

const CARE_PILLARS = [
  {
    title: 'Entornos diferenciados y seguros',
    description:
      'Dos sedes independientes en Pachuca diseñadas para respetar los ritmos y necesidades de hombres y mujeres.',
  },
];

const HUMAN_PROMISES = [
  {
    title: 'Diagnóstico integral',
    description: 'Historia clínica, evaluación psicológica y plan conjunto con la familia.',
  },
  {
    title: 'Rutina terapéutica guiada',
    description: 'Sesiones individuales, grupos terapéuticos y acompañamiento espiritual diario.',
  },
  {
    title: 'Plan de egreso responsable',
    description: 'Seguimiento y acuerdos familiares para proteger la recuperación al salir.',
  },
  {
    title: 'Contención familiar permanente',
    description:
      'Escuchamos y orientamos a la familia antes, durante y después del internamiento, con actualización constante del proceso.',
  },
  {
    title: 'Modelo Minnesota + 12 Pasos',
    description:
      'Integramos rutinas terapéuticas, métricas clínicas y trabajo espiritual para sostener la recuperación.',
  },
];

const SITE_CARDS = [
  {
    title: 'Sede Masculina',
    focus: 'Liderazgo y propósito',
    description:
      'Programa residencial con estructura, disciplina y acompañamiento terapéutico diario.',
    highlights: [
      'Supervisión clínica 24/7',
      'Actividades físicas y ocupacionales',
      'Trabajo terapéutico de responsabilidad personal',
    ],
    tone: 'men',
    sede: 'hombres',
  },
  {
    title: 'Sede Femenina',
    focus: 'Protección y sororidad',
    description:
      'Casa-terapia enfocada en la contención emocional y la reconstrucción del autocuidado.',
    highlights: [
      'Habitaciones supervisadas y áreas comunes seguras',
      'Grupos terapéuticos sororales',
      'Trabajo profundo con la familia de origen',
    ],
    tone: 'women',
    sede: 'mujeres',
  },
];

export default function HeroSection({ onNavigate, onViewSede }) {
  const handleContactClick = () => {
    onNavigate?.('#contacto');
  };

  const handleMethodClick = () => {
    // navigate to the "modelo" / method section
    onNavigate?.('#metodo');
  };

  const handleViewSedeClick = (variant) => {
    onViewSede?.(variant);
  };

  const handleSiteSelect = (sede) => {
    // map Spanish sede identifiers to the variant keys expected by handleViewSedeClick
    if (sede === 'hombres') {
      handleViewSedeClick('men');
      return;
    }
    if (sede === 'mujeres') {
      handleViewSedeClick('women');
      return;
    }
    // fallback: pass through whatever was provided
    handleViewSedeClick(sede);
  };

  return (
    <section className="hero-vista" id="inicio" aria-label="Vista principal clínica Pachuca">
      <div className="container">
        <p className="hero-vista__eyebrow eyebrow">Conciencia CAI · Internamiento residencial</p>
        <div className="hero-vista__layout">
          <div className="hero-vista__copy">
            <p className="hero-vista__tagline">Cuidamos con la calidez del Cuidador y la claridad del Sabio.</p>
            <h1>Rehabilitación residencial en Pachuca con acompañamiento humano y guía clínica.</h1>
            <p className="hero-vista__lead">
              Cada persona y su familia encuentran un espacio seguro, confidencial y respaldado por
              especialistas. Integramos contención emocional, estructura terapéutica y decisiones
              basadas en evidencia para restaurar el proyecto de vida.
            </p>
            <ul className="hero-vista__pillars" role="list">
              {CARE_PILLARS.map((pillar) => (
                <li key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </li>
              ))}
            </ul>
            <div className="hero-vista__cta-group">
              <div className="hero-vista__cta-stack" aria-label="Acciones principales">
                <button type="button" className="btn btn--primary" onClick={handleContactClick}>
                  Hablar con un especialista
                </button>
                <button type="button" className="btn btn--ghost" onClick={handleMethodClick}>
                  Conoce el modelo
                </button>
              </div>
              <div className="hero-vista__cta-sedes" aria-label="Accesos por sede">
                <article className="hero-vista__cta-card hero-vista__cta-card--men">
                  <header>
                    <p className="hero-vista__cta-label">Sede varonil</p>
                    <h3>Disciplina y propósito</h3>
                  </header>
                  <p className="hero-vista__cta-text">
                    Supervisión clínica 24/7, programa de liderazgo y acompañamiento familiar.
                  </p>
                  <button
                    type="button"
                    className="hero-vista__cta hero-vista__cta--men"
                    onClick={() => handleViewSedeClick('men')}
                  >
                    Información varonil
                  </button>
                </article>
                <article className="hero-vista__cta-card hero-vista__cta-card--women">
                  <header>
                    <p className="hero-vista__cta-label">Sede femenil</p>
                    <h3>Contención y sororidad</h3>
                  </header>
                  <p className="hero-vista__cta-text">
                    Espacios seguros, rituales de contención emocional y redes sororales.
                  </p>
                  <button
                    type="button"
                    className="hero-vista__cta hero-vista__cta--women"
                    onClick={() => handleViewSedeClick('women')}
                  >
                    Información femenil
                  </button>
                </article>
                <p className="hero-vista__cta-note">Atención confidencial · Respuesta rápida</p>
              </div>
            </div>
          </div>

          <div className="hero-vista__gallery" aria-label="Espacios de internamiento">
            <figure className="hero-vista__media hero-vista__media--men">
              <img src={photoMen} alt="Atención profesional en la sede masculina" loading="lazy" />
              <figcaption>Sede masculina</figcaption>
            </figure>
            <figure className="hero-vista__media hero-vista__media--women">
              <img src={photoWomen} alt="Proceso terapéutico en la sede femenina" loading="lazy" />
              <figcaption>Sede femenina</figcaption>
            </figure>
            <article className="hero-vista__trust-card">
              <p className="hero-vista__trust-eyebrow">Modelo terapéutico</p>
              <h3>Guía clínica con sentido humano</h3>
              <p>
                Nuestro Modelo Minnesota, integrado al Programa de 12 Pasos, combina ciencia médica,
                psicología y espiritualidad para acompañar cada etapa.
              </p>
              <ul role="list">
                {HUMAN_PROMISES.map((promise) => (
                  <li key={promise.title}>
                    <strong>{promise.title}</strong>
                    <span>{promise.description}</span>
                  </li>
                ))}
              </ul>
              <figure className="hero-vista__diagram">
                <img
                  src={info12steps}
                  alt="Infografía del Modelo Minnesota y los 12 Pasos"
                  loading="lazy"
                />
              </figure>
            </article>
          </div>
        </div>
        <div className="hero-vista__sites" aria-label="Sedes especializadas">
          {SITE_CARDS.map((site) => (
            <article
              key={site.title}
              className={`hero-vista__site-card hero-vista__site-card--${site.tone}`}
            >
              <p className="hero-vista__site-focus">{site.focus}</p>
              <h3>{site.title}</h3>
              <p className="hero-vista__site-description">{site.description}</p>
              <ul role="list">
                {site.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="hero-vista__site-actions">
                <button
                  type="button"
                  className="btn btn--secondary hero-sites__btn"
                  onClick={() => {
                    handleSiteSelect(site.sede);
                    handleContactClick();
                  }}
                >
                  Hablar con esta sede
                </button>
                <button
                  type="button"
                  className="btn btn--ghost hero-sites__link"
                  onClick={() => handleViewSedeClick(site.tone === 'men' ? 'men' : 'women')}
                >
                  Información de la sede
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
