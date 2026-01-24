import '../styles/sections/HeroSection.scss';

const HIGHLIGHTS = [
  {
    title: 'Acompañamiento humano, profesional y confidencial',
    text: 'Pensado para personas que atraviesan uno de los momentos más difíciles de su vida.',
  },
  {
    title: 'Entorno estructurado en Pachuca, Hidalgo',
    text: 'Permite iniciar procesos reales de recuperación con seguridad emocional.',
  },
  {
    title: 'Proceso residencial de 4 meses',
    text: 'Basado en el Modelo Minnesota y el Programa de 12 Pasos.',
  },
];

export default function HeroSection({ onSelectSede, onNavigate }) {
  return (
    <section className="hero-section" id="inicio" aria-label="Acompañamiento profesional">
      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <div className="hero-section__callout reveal">
            <span className="hero-section__dot" aria-hidden="true" />
            <span className="hero-section__detail">
              Acompañamiento humano, profesional y confidencial
            </span>
          </div>
          <h1 className="reveal reveal--delay-1">
            Acompañamiento profesional para una recuperación integral
          </h1>
          <p className="reveal reveal--delay-2">
            En <strong>Conciencia CAI</strong> sabemos que la adicción no solo afecta a quien la
            padece, sino que impacta profundamente a toda la familia. Por eso, desde el primer
            contacto, ofrecemos acompañamiento humano, profesional y confidencial, pensado para
            personas que atraviesan uno de los momentos más difíciles de su vida.
          </p>
          <p className="hero-section__alert reveal reveal--delay-2">
            Aquí no tratamos casos, <span>acompañamos personas</span>. Nuestro enfoque parte del
            respeto, la dignidad y la seguridad emocional, dentro de un entorno estructurado que
            permite iniciar procesos reales de recuperación en Pachuca, Hidalgo.
          </p>
          <blockquote className="hero-section__quote reveal reveal--delay-3">
            <p>No tienes que enfrentar esta situación solo. Estamos aquí para acompañarte paso a paso.</p>
          </blockquote>
          <div className="hero-section__ctas reveal reveal--delay-4">
            <button type="button" className="btn btn--primary" onClick={() => onSelectSede?.('mujeres')}>
              Contactar sede femenil
            </button>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => onSelectSede?.('hombres')}
            >
              Contactar sede varonil
            </button>
            <a
              href="#metodo"
              className="btn btn--ghost"
              onClick={(event) => {
                if (!onNavigate) return;
                event.preventDefault();
                onNavigate('#metodo');
              }}
            >
              Conocer el modelo
            </a>
          </div>
          <div className="hero-section__highlights">
            {HIGHLIGHTS.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`hero-section__highlight reveal reveal--delay-${index + 1}`}
              >
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-section__visual reveal reveal--delay-2" aria-hidden="true">
          <div className="hero-section__float-card">
            <h3>Recuperación integral en 4 meses</h3>
            <p>
              Proceso residencial basado en el Modelo Minnesota con atención clínica, psicológica y
              terapéutica estructurada.
            </p>
            <div className="hero-section__chips">
              <span>Modelo Minnesota</span>
              <span className="hero-section__chip--women">Sede Femenil</span>
              <span>Sede Varonil</span>
            </div>
            <p className="hero-section__caption">Pachuca, Hidalgo · Equipo multidisciplinario</p>
          </div>
        </div>
      </div>
    </section>
  );
}
