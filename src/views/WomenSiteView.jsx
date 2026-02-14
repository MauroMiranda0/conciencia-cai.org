import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SiteHighlights from '../components/SiteHighlights.jsx';
import MethodOverview from '../components/MethodOverview.jsx';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import AboutValues from '../components/AboutValues.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import womenSuitePlaceholder from '../assets/placeholders/women-suite.svg';
import womenGardenPlaceholder from '../assets/placeholders/women-garden.svg';
import womenCirclePlaceholder from '../assets/placeholders/women-circle.svg';
import '../styles/views/WomenSiteView.scss';

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

/**
 * @typedef {Object} WomenSiteViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 * @property {() => void} [onShowMenSite]
 */

/**
 * @param {WomenSiteViewProps} props
 */
export default function WomenSiteView({ onNavigate, onOpenPrivacy }) {
  const [microMode] = useState('care');

  const handleCTA = () => {
    const section = document.getElementById(CONTACT_SECTION_ID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    onNavigate?.('#contacto');
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
            <h2 id="women-site-hero-title">Sede femenil · Conciencia CAI</h2>
            <p className="women-site__lead">
              Un refugio terapéutico diseñado para mujeres que buscan sanar trauma, dependencia emocional o consumo
              problemático con acompañamiento especializado y seguro.
            </p>
            <div className="method-overview__actions">
              <button type="button" className="btn btn--primary" onClick={handleCTA}>
                Agendar valoración
              </button>
            </div>
            <SiteHighlights className="women-site__hero-highlights" items={HERO_HIGHLIGHTS} />
          </section>
          <AboutValues tone="women" />
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
        <MethodOverview
          tone="women"
          eyebrow="Modelo residencial femenil"
          title="Método Minnesota con contención y claridad"
          description={
            <>
              <p>
                Integramos modelos de trauma informado, espiritualidad práctica y círculos de mujeres para impulsar
                procesos de reconexión con el cuerpo, la voz y la libertad financiera.
              </p>
              <p>
                Programamos experiencias inmersivas de autocuidado, círculos de palabra y mentorías financieras para
                impulsar proyectos de vida independientes.
              </p>
            </>
          }
          introExtra={
            <>
              <ul className="method-overview__pillars" role="list">
                {WOMEN_SITE_PILLARS.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
              <div className="method-overview__actions">
                <button type="button" className="btn btn--primary" onClick={handleCTA}>
                  Agendar valoración
                </button>
                <button type="button" className="btn btn--secondary" onClick={() => onNavigate?.('#metodo')}>
                  Explorar metodología
                </button>
              </div>
            </>
          }
        />
        <Gallery
          items={WOMEN_GALLERY_ITEMS}
          title="Galería"
          eyebrow="Sede femenil"
          description="Ambientes diseñados para garantizar seguridad emocional, autocuidado y acompañamiento continuo."
        />
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
