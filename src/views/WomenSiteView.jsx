import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/views/WomenSiteView.scss';

/**
 * @typedef {Object} WomenSiteFeature
 * @property {string} title
 * @property {string} [content]
 * @property {'media' | undefined} [type]
 */

/** @type {WomenSiteFeature[]} */
const HERO_FEATURES = [
  {
    title: 'Capital terapéutico que florece',
    content:
      'Residencia con espacios de arte, rituales de autocuidado y mentorías de propósito para mujeres que desean recuperar el equilibrio.',
    type: 'media',
  },
  {
    title: 'Siempre contenidas · Siempre accesibles',
    content:
      'Guardias médicas, doulas emocionales y terapeutas de trauma están disponibles las 24 horas para responder a crisis.',
  },
  {
    title: '100% libre de juicios',
    content:
      'Círculos de confianza, acompañamiento terapéutico y acuerdos cotidianos que refuerzan la seguridad emocional.',
  },
];

/** @type {WomenSiteFeature[]} */
const SECOND_FEATURES = [
  {
    title: 'Rutinas que abren camino',
    content:
      'Sesiones de mindfulness, activaciones corporales suaves y diarios de gratitud que fortalecen la agencia personal.',
    type: 'media',
  },
  {
    title: 'Red de soporte femenino',
    content:
      'Escuela para familias, parejas y cuidadoras con guías claras para sostener límites y comunicación compasiva.',
  },
  {
    title: 'Plan de egreso acompañado',
    content:
      'Seguimiento híbrido durante 12 meses, padrinazgo entre egresadas y tableros digitales de prevención de recaídas.',
  },
];

/** @type {string[]} */
const USE_CASES = [
  'Procesos de violencia o control coercitivo',
  'Trastornos por consumo de alcohol u otras sustancias',
  'Ansiedad, depresión o duelos interrumpidos que afectan la vida cotidiana',
];

/**
 * @typedef {Object} WomenSiteViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 */

/**
 * @param {WomenSiteViewProps} props
 */
export default function WomenSiteView({ onNavigate, onOpenPrivacy }) {
  const handleCTA = () => {
    onNavigate?.('#contacto');
  };

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event
   */
  const handleBusinessSubmit = (event) => {
    event.preventDefault();
    onNavigate?.('#contacto');
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={onNavigate} />
      <main id="main" className="women-site" aria-label="Sede femenil">
        <section className="women-site__hero women-card">
          <div className="women-site__hero-rays" aria-hidden="true" />
          <div className="women-site__hero-inner">
            <div className="women-site__hero-plus">+</div>
            <h1>Sede femenil · Conciencia CAI</h1>
            <p>
              Un refugio terapéutico diseñado para mujeres que buscan sanar trauma, dependencia emocional o consumo
              problemático con acompañamiento especializado y seguro.
            </p>
            <button type="button" className="btn-sketched btn-sketched--rose" onClick={handleCTA}>
              Agendar valoración
            </button>
          </div>
        </section>

        <section className="women-site__intro">
          <h2>¿Qué hace única a la sede femenil?</h2>
          <button type="button" className="btn-sketched btn-sketched--outline-rose" onClick={() => onNavigate?.('#metodo')}>
            Explorar metodología
          </button>
          <p>
            Integramos modelos de trauma informado, espiritualidad práctica y círculos de mujeres para impulsar procesos
            de reconexión con el cuerpo, la voz y la libertad financiera.
          </p>
        </section>

        <section className="women-site__grid">
          {HERO_FEATURES.map((feature) => (
            <article key={feature.title} className="women-card">
              <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
              {feature.type === 'media' ? (
                <div className="women-site__media" aria-hidden="true">
                  Visual terapéutico
                </div>
              ) : (
                <p className="women-site__text" dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }} />
              )}
            </article>
          ))}
        </section>

        <section className="women-site__paragraph">
          <p>
            Programamos experiencias inmersivas de autocuidado, círculos de palabra y mentorías financieras para impulsar
            proyectos de vida independientes.
          </p>
        </section>

        <section className="women-site__grid">
          {SECOND_FEATURES.map((feature) => (
            <article key={feature.title} className="women-card">
              <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
              {feature.type === 'media' ? (
                <div className="women-site__media women-site__media--dashed" aria-hidden="true">
                  Diagrama o fotografía
                </div>
              ) : (
                <p className="women-site__text" dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }} />
              )}
            </article>
          ))}
        </section>

        <section className="women-site__bottom">
          <div className="women-site__use-cases">
            <h2>Casos que acompañamos</h2>
            <p>
              Programas clínicos y espirituales con enfoque de género que sostienen los cambios necesarios para romper
              ciclos de violencia y dependencia.
            </p>
            <div className="women-card women-site__use-cases-media">
              <div className="women-site__use-cases-overlay" aria-hidden="true" />
              <div className="women-site__use-cases-circle women-site__use-cases-circle--left" aria-hidden="true" />
              <div className="women-site__use-cases-circle women-site__use-cases-circle--right" aria-hidden="true" />
              <ul>
                {USE_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="women-card women-site__business">
            <h2>Contacto directo con coordinación</h2>
            <p>Comparte tu situación y una coordinadora clínica te responderá en menos de 30 minutos.</p>
            <form className="women-site__form" onSubmit={handleBusinessSubmit}>
              <input type="text" placeholder="Nombre" aria-label="Nombre" />
              <input type="text" placeholder="Apellidos" aria-label="Apellidos" />
              <textarea placeholder="Cuéntanos brevemente la situación" aria-label="Mensaje" />
              <button type="submit" className="btn-sketched btn-sketched--amber">
                Enviar solicitud
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} onNavigate={onNavigate} />
    </>
  );
}
