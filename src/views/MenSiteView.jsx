import { useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SiteHighlights from '../components/SiteHighlights.jsx';
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

const HERO_HIGHLIGHTS = [
  {
    title: 'Supervisión permanente',
    description: 'Guardias médicas y consejeros varoniles listos para intervenir las 24 horas.',
  },
  {
    title: 'Rutinas con propósito',
    description: 'Actividad física guiada, mentorías y contratos de responsabilidad personalizados.',
  },
  {
    title: 'Entorno protegido',
    description: 'Protocolos de confidencialidad, espacios sin distractores y rituales diarios.',
  },
];

const MEN_SITE_PILLARS = [
  'Modelo Minnesota + 12 Pasos reforzado con deporte consciente y acompañamiento espiritual.',
  'Diagnósticos interdisciplinarios, tableros de progreso y mentorías de liderazgo varonil.',
  'Planes de reintegración con familia, padrinazgo y seguimiento post alta durante 12 meses.',
];

const USE_CASES = [
  'Dependencia a alcohol u otras sustancias con impacto laboral o familiar.',
  'Conductas impulsivas, violencia o desregulación emocional en figuras masculinas.',
  'Duelos no resueltos, ansiedad o depresión que limita el ejercicio del rol paterno.',
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
      <main id="main" className="men-site" aria-label="Sede varonil">
        <div className="men-site__halo" aria-hidden="true" />
        <div className="container men-site__layout">
          <section className="men-site__hero men-card" aria-labelledby="men-site-hero-title">
            <p className="eyebrow men-site__eyebrow">Modelo residencial · Varonil</p>
            <h1 id="men-site-hero-title">Sede varonil · Conciencia CAI</h1>
            <p className="men-site__lead">
              Espacio residencial pensado para hombres que requieren estructura, disciplina y contención emocional
              mientras atraviesan el proceso clínico del Modelo Minnesota + 12 Pasos.
            </p>
            <div className="men-site__hero-actions">
              <button type="button" className="btn btn--primary" onClick={handleCTA}>
                Agendar valoración
              </button>
              <button type="button" className="btn btn--secondary" onClick={() => onNavigate?.('#metodo')}>
                Explorar metodología
              </button>
            </div>
            <SiteHighlights className="men-site__hero-highlights" items={HERO_HIGHLIGHTS} />
          </section>

          <section className="men-card men-site__intro">
            <div>
              <h2>¿Qué distingue a la sede varonil?</h2>
              <p>
                Instalaciones diseñadas para fomentar responsabilidad, trabajo en equipo y ejercicio físico controlado.
                El programa integra supervisión clínica, actividades deportivas guiadas y sesiones de reintegración
                familiar que sostienen la motivación.
              </p>
            </div>
            <ul className="men-site__pillars" role="list">
              {MEN_SITE_PILLARS.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </section>

          <section className="men-site__grid" aria-label="Componentes terapéuticos principales">
            {HERO_FEATURES.map((feature) => (
              <article key={feature.title} className="men-card men-site__feature">
                <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
                {feature.type === 'media' ? (
                  <div className="men-site__feature-media" aria-hidden="true">
                    Visual terapéutico
                  </div>
                ) : (
                  <p
                    className="men-site__text"
                    dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }}
                  />
                )}
              </article>
            ))}
          </section>

          <section className="men-card men-site__program-note">
            <p>
              Terapias grupales, trabajo corporal, acompañamiento espiritual y hábitos conscientes que preparan al
              residente para retomar su liderazgo sin violencia y con claridad emocional.
            </p>
          </section>

          <section className="men-site__grid" aria-label="Rutas de seguimiento y egreso">
            {SECOND_FEATURES.map((feature) => (
              <article key={feature.title} className="men-card men-site__feature">
                <h3 dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, '<br/>') }} />
                {feature.type === 'media' ? (
                  <div className="men-site__feature-media men-site__feature-media--dashed" aria-hidden="true">
                    Diagrama o fotografía
                  </div>
                ) : (
                  <p
                    className="men-site__text"
                    dangerouslySetInnerHTML={{ __html: feature.content.replace(/\n/g, '<br/>') }}
                  />
                )}
              </article>
            ))}
          </section>

          <section className="men-site__bottom">
            <div className="men-card men-site__use-cases">
              <h2>Casos que acompañamos</h2>
              <p>
                Dependencia a alcohol u otras sustancias, conductas impulsivas y duelos no resueltos con impacto directo
                en el rol masculino dentro de la familia.
              </p>
              <ul className="men-site__use-cases-list">
                {USE_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="men-site__use-cases-media" aria-hidden="true">
                <div className="men-site__use-cases-overlay" aria-hidden="true" />
                <p>Mapas de seguridad emocional · Rituales diarios · Mentorías deportivas</p>
              </div>
            </div>
            <div className="men-card men-site__business" ref={businessRef}>
              <h2>Contacto directo con coordinación</h2>
              <p>Déjanos tu mensaje y un coordinador clínico te llamará en menos de 30 minutos.</p>
              <form className="men-site__form" onSubmit={handleBusinessSubmit}>
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
