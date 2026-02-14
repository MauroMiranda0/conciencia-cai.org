import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SiteHighlights from '../components/SiteHighlights.jsx';
import MethodOverview from '../components/MethodOverview.jsx';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import AboutValues from '../components/AboutValues.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import womenCareRituals from '../assets/illustrations/women/care-rituals.svg';
import womenEgressGarden from '../assets/illustrations/women/egress-garden.svg';
import womenSuitePlaceholder from '../assets/placeholders/women-suite.svg';
import womenGardenPlaceholder from '../assets/placeholders/women-garden.svg';
import womenCirclePlaceholder from '../assets/placeholders/women-circle.svg';
import '../styles/views/WomenSiteView.scss';

/**
 * @typedef {Object} WomenSiteFeature
 * @property {string} title
 * @property {string} [content]
 * @property {'media' | undefined} [type]
 * @property {string} [media]
 * @property {string} [mediaAlt]
 * @property {'dashed'} [mediaVariant]
 */

/** @type {WomenSiteFeature[]} */
const HERO_FEATURES = [
  {
    title: 'Capital terapéutico que florece',
    content:
      'Residencia con espacios de arte, rituales de autocuidado y mentorías de propósito para mujeres que desean recuperar el equilibrio.',
    type: 'media',
    media: womenCareRituals,
    mediaAlt: 'Ilustración de rituales de autocuidado y acompañamiento femenino',
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
    media: womenEgressGarden,
    mediaAlt: 'Gráfico abstracto sobre planes de egreso y redes femeninas',
    mediaVariant: 'dashed',
  },
  {
    title: 'Red de soporte femenino',
    content:
      'Escuela para familias, parejas y cuidadoras con guías claras para sostener límites y comunicación compasiva.',
  },
  {
    title: 'Plan de egreso acompañado',
    content:
  'Seguimiento híbrido durante 12 meses, apadrinamiento entre egresadas y tableros digitales de prevención de recaídas.',
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
  'Planes de egreso acompañados con apadrinamiento entre egresadas y seguimiento híbrido 12 meses.',
];

/** @type {string[]} */
const USE_CASES = [
  'Procesos de violencia o control coercitivo.',
  'Trastornos por consumo de alcohol u otras sustancias.',
  'Ansiedad, depresión o duelos interrumpidos que afectan la vida cotidiana.',
];

const WOMEN_GALLERY_ITEMS = [
  {
    src: womenSuitePlaceholder,
    alt: 'Suites privadas y seguras en la sede femenil',
    label: 'Suites',
    caption: 'Habitaciones protegidas y acompañadas por doulas emocionales.',
  },
  {
    src: womenGardenPlaceholder,
    alt: 'Jardín terapéutico para rituales femeniles',
    label: 'Jardín terapéutico',
    caption: 'Sesiones de mindfulness y activaciones suaves al aire libre.',
  },
  {
    src: womenCirclePlaceholder,
    alt: 'Círculos de contención y palabra segura',
    label: 'Círculos de contención',
    caption: 'Comunidades solidarias que sostienen la seguridad emocional.',
  },
];

const WOMEN_TESTIMONIALS = [
  {
    quote: 'Sentí seguridad desde la primera llamada; nos guiaron con mucha dignidad y sin juicios.',
    author: 'Familiar anónimo',
    role: 'Madre de residente',
  },
  {
    quote: 'Las mentorías financieras y la red de contención me ayudaron a reconstruir autonomía.',
    author: 'Anónima',
    role: 'Egresada sede femenil',
  },
  {
    quote: 'Siempre hubo una coordinadora disponible para sostener cualquier crisis emocional.',
    author: 'Anónima',
    role: 'Residente en seguimiento',
  },
];

const CONTACT_SECTION_ID = 'contacto-femenil';
const WOMEN_MAP_SRC =
  'https://maps.google.com/maps?q=Sierra%20Madre%20Pachuca&t=&z=14&ie=UTF8&iwloc=&output=embed';

const WOMEN_MICRO_SIGNALS = {
  care: [
    {
      label: 'El Cuidador',
      title: 'Respuesta cálida inmediata',
      detail: 'Coordinadoras femeninas responden cada mensaje antes de 30 minutos.',
    },
    {
      label: 'El Cuidador',
      title: 'Red de contención activa',
      detail: 'Doulas emocionales monitorean los canales de apoyo en vivo.',
    },
  ],
  sage: [
    {
      label: 'El Sabio',
      title: 'Lectura integral del caso',
      detail: 'Interpretamos indicadores de trauma y los explicamos paso a paso.',
    },
    {
      label: 'El Sabio',
      title: 'Mentorías financieras guiadas',
      detail: 'Compartimos planes para reconstruir autonomía económica con claridad.',
    },
  ],
};

/**
 * @typedef {Object} WomenSiteViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 * @property {() => void} [onShowMenSite]
 */

/**
 * @param {WomenSiteViewProps} props
 */
export default function WomenSiteView({ onNavigate, onOpenPrivacy, onShowMenSite }) {
  const [microMode, setMicroMode] = useState('care');
  const [microIndex, setMicroIndex] = useState(0);
  // @ts-ignore
  const microSignals = WOMEN_MICRO_SIGNALS[microMode] ?? WOMEN_MICRO_SIGNALS.care;
  const activeMicroSignal = microSignals[microIndex % microSignals.length];

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setMicroIndex((prev) => prev + 1);
    }, 9000);
    return () => window.clearInterval(timer);
  }, []);

  const handleCTA = () => {
    const section = document.getElementById(CONTACT_SECTION_ID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    onNavigate?.('#contacto');
  };

  const activateCareSignal = () => setMicroMode('care');
  const activateSageSignal = () => setMicroMode('sage');
  const handleViewMenSite = () => {
    onShowMenSite?.();
    onNavigate?.('#sede-varonil');
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={onNavigate} />
      <main id="main" className="women-site" aria-label="Sede femenil" data-archetype={microMode}>
        <div className="women-site__halo" aria-hidden="true" />
        <div className="container women-site__layout">
          <section
            className="women-site__hero women-card site-card"
            aria-labelledby="women-site-hero-title"
            data-archetype={microMode}
          >
            <p className="eyebrow women-site__eyebrow">Modelo residencial · Femenil</p>
            <h1 id="women-site-hero-title">Sede femenil · Conciencia CAI</h1>
            <p className="women-site__lead">
              Un refugio terapéutico diseñado para mujeres que buscan sanar trauma, dependencia emocional o consumo
              problemático con acompañamiento especializado y seguro.
            </p>
            <div className="women-site__hero-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={handleCTA}
                onMouseEnter={activateCareSignal}
                onMouseLeave={activateCareSignal}
                onFocus={activateCareSignal}
                onBlur={activateCareSignal}
              >
                Agendar valoración
              </button>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => onNavigate?.('#metodo')}
                onMouseEnter={activateSageSignal}
                onMouseLeave={activateCareSignal}
                onFocus={activateSageSignal}
                onBlur={activateCareSignal}
              >
                Explorar metodología
              </button>
            </div>
            <div className="women-site__micro-hint" data-variant={microMode} aria-live="polite">
              <p>{activeMicroSignal.label}</p>
              <strong>{activeMicroSignal.title}</strong>
              <span>{activeMicroSignal.detail}</span>
              <div className="women-site__micro-actions" role="group" aria-label="Cambiar señal micro arquetípica">
                <button
                  type="button"
                  className={`women-site__micro-toggle${microMode === 'care' ? ' is-active' : ''}`}
                  onClick={activateCareSignal}
                  aria-pressed={microMode === 'care'}
                >
                  Cuidado
                </button>
                <button
                  type="button"
                  className={`women-site__micro-toggle${microMode === 'sage' ? ' is-active' : ''}`}
                  onClick={activateSageSignal}
                  aria-pressed={microMode === 'sage'}
                >
                  Claridad
                </button>
              </div>
            </div>
            <SiteHighlights className="women-site__hero-highlights" items={HERO_HIGHLIGHTS} />
          </section>
          <div className="women-site__switch">
            <button type="button" className="women-site__switch-link" onClick={() => onNavigate?.('#inicio')}>
              ← Volver al inicio
            </button>
            <button type="button" className="women-site__switch-link" onClick={handleViewMenSite}>
              Ver sede varonil
            </button>
          </div>

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
                {feature.media ? (
                  <figure
                    className={`women-site__feature-media${feature.mediaVariant === 'dashed' ? ' women-site__feature-media--dashed' : ''}`}
                    aria-hidden={feature.mediaAlt ? undefined : true}
                  >
                    <img src={feature.media} alt={feature.mediaAlt ?? ''} loading="lazy" decoding="async" />
                  </figure>
                ) : (
                  <p
                    className="women-site__text"
                    // @ts-ignore
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
                {feature.media ? (
                  <figure
                    className={`women-site__feature-media${feature.mediaVariant === 'dashed' ? ' women-site__feature-media--dashed' : ''}`}
                    aria-hidden={feature.mediaAlt ? undefined : true}
                  >
                    <img src={feature.media} alt={feature.mediaAlt ?? ''} loading="lazy" decoding="async" />
                  </figure>
                ) : (
                  <p
                    className="women-site__text"
                    // @ts-ignore
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
          </section>
        </div>
        <MethodOverview tone="women" title="Método Minnesota con contención y claridad" />
        <Gallery
          items={WOMEN_GALLERY_ITEMS}
          title="Galería sede femenil"
          eyebrow="Ruta de color rosa"
          description="Ambientes diseñados para garantizar seguridad emocional, autocuidado y acompañamiento continuo."
        />
        <AboutValues tone="women" />
        <Testimonials
          items={WOMEN_TESTIMONIALS}
          tone="women"
          title="Testimonios que resguardamos"
          description="Escuchamos a familias y mujeres que viven procesos de cambio con empatía y guía profesional."
        />
        <ContactSection
          id={CONTACT_SECTION_ID}
          eyebrow="Contacto sede femenil"
          title="Coordinación responde con contención"
          description="Déjanos tus datos y una coordinadora clínica te acompañará desde la primera llamada."
          lockedSedeValue="mujeres"
          successMessage="Gracias. Coordinación femenil atenderá tu mensaje de forma confidencial y sin juicios."
          // @ts-ignore
          channelNote="Doulas emocionales y terapeutas de trauma monitorean este canal 24/7."
          onOpenPrivacy={onOpenPrivacy}
          asideContent={
            <MapEmbed
              title="Ubicación sede femenil"
              address="Sierra Madre #45, Pachuca, Hidalgo"
              phone="771 765 4321"
              mapSrc={WOMEN_MAP_SRC}
            />
          }
        />
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} onNavigate={onNavigate} activeSite="mujeres" />
    </>
  );
}
