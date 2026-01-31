import { useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SiteHighlights from '../components/SiteHighlights.jsx';
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

const HERO_HIGHLIGHTS = [
  {
    title: 'Acompañamiento trauma informado',
    description: 'Protocolos sensibles al trauma, doulas emocionales y contención continua.',
  },
  {
    title: 'Autonomía y autocuidado',
    description: 'Rituales cotidianos, mentorías financieras y espacios creativos supervisados.',
  },
  {
    title: 'Red segura',
    description: 'Círculos de confianza, acuerdos comunitarios y acompañamiento espiritual práctico.',
  },
];

const WOMEN_SITE_PILLARS = [
  'Modelo Minnesota + 12 Pasos adaptado a procesos femeninos y maternidades diversas.',
  'Equipo interdisciplinario con terapeutas de trauma, doulas emocionales y facilitadoras financieras.',
  'Planes de egreso acompañados con padrinazgo entre egresadas y seguimiento híbrido 12 meses.',
];

/** @type {string[]} */
const USE_CASES = [
  'Procesos de violencia o control coercitivo.',
  'Trastornos por consumo de alcohol u otras sustancias.',
  'Ansiedad, depresión o duelos interrumpidos que afectan la vida cotidiana.',
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
  const businessRef = useRef(null);

  const handleCTA = () => {
    if (businessRef.current) {
      businessRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = businessRef.current.querySelector('input, textarea');
      if (firstInput instanceof HTMLElement) {
        firstInput.focus();
      }
      return;
    }
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
        <div className="women-site__halo" aria-hidden="true" />
        <div className="container women-site__layout">
          <section className="women-site__hero women-card site-card" aria-labelledby="women-site-hero-title">
            <p className="eyebrow women-site__eyebrow">Modelo residencial · Femenil</p>
            <h1 id="women-site-hero-title">Sede femenil · Conciencia CAI</h1>
            <p className="women-site__lead">
              Un refugio terapéutico diseñado para mujeres que buscan sanar trauma, dependencia emocional o consumo
              problemático con acompañamiento especializado y seguro.
            </p>
            <div className="women-site__hero-actions">
              <button type="button" className="btn btn--primary" onClick={handleCTA}>
                Agendar valoración
              </button>
              <button type="button" className="btn btn--secondary" onClick={() => onNavigate?.('#metodo')}>
                Explorar metodología
              </button>
            </div>
            <SiteHighlights className="women-site__hero-highlights" items={HERO_HIGHLIGHTS} />
          </section>

          <section className="women-card site-card women-site__intro">
            <div>
              <h2>¿Qué hace única a la sede femenil?</h2>
              <p>
                Integramos modelos de trauma informado, espiritualidad práctica y círculos de mujeres para impulsar
                procesos de reconexión con el cuerpo, la voz y la libertad financiera.
              </p>
            </div>
            <ul className="women-site__pillars" role="list">
              {WOMEN_SITE_PILLARS.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </section>

          <section className="women-site__grid" aria-label="Componentes terapéuticos principales">
            {HERO_FEATURES.map((feature) => (
              <article key={feature.title} className="women-card site-card women-site__feature">
                <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
                {feature.type === 'media' ? (
                  <div className="women-site__feature-media" aria-hidden="true">
                    Visual terapéutico
                  </div>
                ) : (
                  <p
                    className="women-site__text"
                    dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }}
                  />
                )}
              </article>
            ))}
          </section>

          <section className="women-card site-card women-site__program-note">
            <p>
              Programamos experiencias inmersivas de autocuidado, círculos de palabra y mentorías financieras para
              impulsar proyectos de vida independientes.
            </p>
          </section>

          <section className="women-site__grid" aria-label="Rutas de seguimiento y egreso">
            {SECOND_FEATURES.map((feature) => (
              <article key={feature.title} className="women-card site-card women-site__feature">
                <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
                {feature.type === 'media' ? (
                  <div className="women-site__feature-media women-site__feature-media--dashed" aria-hidden="true">
                    Diagrama o fotografía
                  </div>
                ) : (
                  <p
                    className="women-site__text"
                    dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }}
                  />
                )}
              </article>
            ))}
          </section>

          <section className="women-site__bottom">
            <div className="women-card site-card women-site__use-cases">
              <h2>Casos que acompañamos</h2>
              <p>
                Programas clínicos y espirituales con enfoque de género que sostienen los cambios necesarios para romper
                ciclos de violencia y dependencia.
              </p>
              <ul className="women-site__use-cases-list">
                {USE_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="women-site__use-cases-media" aria-hidden="true">
                <div className="women-site__use-cases-overlay" aria-hidden="true" />
                <div className="women-site__use-cases-circle women-site__use-cases-circle--left" aria-hidden="true" />
                <div className="women-site__use-cases-circle women-site__use-cases-circle--right" aria-hidden="true" />
                <p>Redes de contención · Rituales de autocuidado · Mentorías financieras</p>
              </div>
            </div>

            <div className="women-card site-card women-site__business" ref={businessRef}>
              <h2>Contacto directo con coordinación</h2>
              <p>Comparte tu situación y una coordinadora clínica te responderá en menos de 30 minutos.</p>
              <form className="women-site__form" onSubmit={handleBusinessSubmit}>
                <input type="text" placeholder="Nombre" aria-label="Nombre" />
                <input type="text" placeholder="Apellidos" aria-label="Apellidos" />
                <textarea placeholder="Cuéntanos brevemente la situación" aria-label="Mensaje" />
                <button type="submit" className="btn btn--primary">
                  Enviar solicitud
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} onNavigate={onNavigate} />
    </>
  );
}
