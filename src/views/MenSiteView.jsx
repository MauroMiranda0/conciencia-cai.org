import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/views/MenSiteView.scss';

/**
 * @typedef {Object} MenSiteFeature
 * @property {string} title
 * @property {string} content
 * @property {'media' | undefined} [type]
 */

/** @type {MenSiteFeature[]} */
const HERO_FEATURES = [
  {
    title: 'Capital terapéutico que crece',
    content: 'Rutinas estructuradas, actividad física supervisada y mentorías de propósito.',
    type: 'media',
  },
  {
    title: 'Siempre vigilado · Siempre accesible',
    content: 'Guardias médicas y consejeros varoniles disponibles 24/7 para emergencias.',
  },
  {
    title: '100% libre de distractores',
    content: 'Entorno controlado con reglas claras, acompañamiento espiritual y enfoque en disciplina.',
  },
];

/** @type {MenSiteFeature[]} */
const SECOND_FEATURES = [
  {
    title: 'Reintegración paulatina',
    content: 'Simulaciones de entorno laboral, talleres de liderazgo y manejo emocional.',
    type: 'media',
  },
  {
    title: 'Acompañamiento familiar',
    content: 'Reuniones semanales, contratos de convivencia y seguimiento para figuras paternas.',
  },
  {
    title: 'Prevención de recaídas',
    content: 'Plan de alta con métricas de riesgo, padrinazgo y coaching digital durante 12 meses.',
  },
];

/**
 * @typedef {Object} MenSiteViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 */

/**
 * @param {MenSiteViewProps} props
 */
export default function MenSiteView({ onNavigate, onOpenPrivacy }) {
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
      <main id="main" className="men-site">
        <section className="men-site__hero card-sketched">
          <div className="men-site__hero-rays" aria-hidden="true" />
          <div className="men-site__hero-inner">
            <div className="men-site__hero-cross">+</div>
            <h1>Sede varonil · Conciencia CAI</h1>
            <p>
              Espacio residencial pensado para hombres que requieren estructura, disciplina y contención emocional
              mientras atraviesan el proceso clínico del Modelo Minnesota + 12 Pasos.
            </p>
            <button type="button" className="btn-sketched btn-sketched--cyan" onClick={handleCTA}>
              Agendar valoración
            </button>
          </div>
        </section>

        <section className="men-site__section men-site__section--center">
          <h2>¿Qué distingue a la sede varonil?</h2>
          <button
            type="button"
            className="btn-sketched btn-sketched--outline"
            onClick={() => onNavigate?.('#metodo')}
          >
            Explorar metodología
          </button>
          <p>
            Instalaciones diseñadas para fomentar responsabilidad, trabajo en equipo y ejercicio físico controlado. El
            programa integra supervisión clínica, actividades deportivas guiadas y sesiones de reintegración familiar.
          </p>
        </section>

        <section className="men-site__grid">
          {HERO_FEATURES.map((feature) => (
            <article key={feature.title} className="card-sketched">
              <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
              {feature.type === 'media' ? (
                <div className="men-site__media">Visual terapéutico</div>
              ) : (
                <p className="men-site__text" dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }} />
              )}
            </article>
          ))}
        </section>

        <section className="men-site__section men-site__section--center">
          <p>
            Terapias grupales, trabajo corporal, acompañamiento espiritual y hábitos conscientes que preparan al
            residente para retomar su liderazgo sin violencia y con claridad emocional.
          </p>
        </section>

        <section className="men-site__grid">
          {SECOND_FEATURES.map((feature) => (
            <article key={feature.title} className="card-sketched">
              <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
              {feature.type === 'media' ? (
                <div className="men-site__media men-site__media--dashed">Diagrama o fotografía</div>
              ) : (
                <p className="men-site__text" dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }} />
              )}
            </article>
          ))}
        </section>

        <section className="men-site__bottom">
          <div className="men-site__use-cases">
            <h2>Casos que acompañamos</h2>
            <p>
              Dependencia a alcohol u otras sustancias, conductas impulsivas y duelos no resueltos con impacto directo
              en el rol masculino dentro de la familia.
            </p>
            <div className="card-sketched men-site__use-cases-media">
              <div className="men-site__use-cases-overlay" aria-hidden="true" />
              <p>Mapas de seguridad emocional · Rituales diarios · Mentorías deportivas</p>
            </div>
          </div>
          <div className="men-site__business card-sketched">
            <h2>Contacto directo con coordinación</h2>
            <p>Déjanos tu mensaje y un coordinador clínico te llamará en menos de 30 minutos.</p>
            <form className="men-site__form" onSubmit={handleBusinessSubmit}>
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
