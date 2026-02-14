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
import menHeroStructure from '../assets/illustrations/men/structure-flow.svg';
import menReintegrationFlow from '../assets/illustrations/men/reintegration-circuits.svg';
import menRoomPhoto from '../assets/photos/men/habitacion-hombre.png';
import menCommonPhoto from '../assets/photos/men/espacio-comun-hombre.png';
import menActivationPhoto from '../assets/photos/men/ejercicio-meditacion-hombre.png';
import menHeroBackdrop from '../assets/photos/men/hero-hombre.png';
import menSupportPhoto from '../assets/photos/men/acompanamiento-hombre.png';
import menTherapyPhoto from '../assets/photos/men/terapia-hombres.png';
import menCommunityPhoto from '../assets/photos/men/convivencia-hombres.png';
import menFamilyPhoto from '../assets/photos/men/familia-hombres.png';
import '../styles/views/MenSiteView.scss';

/**
 * @typedef {Object} MenSiteFeature
 * @property {string} title
 * @property {string} content
 * @property {'media' | undefined} [type]
 * @property {string} [media]
 * @property {string} [mediaAlt]
 * @property {'dashed'} [mediaVariant]
 */

/** @type {MenSiteFeature[]} */
const HERO_FEATURES = [
  {
    title: 'Capital terapéutico que crece',
    content: 'Rutinas estructuradas, actividad física supervisada y mentorías de propósito.',
    type: 'media',
    media: menHeroStructure,
    mediaAlt: 'Secuencia gráfica que simboliza rutinas y mentorías varoniles',
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
    media: menReintegrationFlow,
    mediaAlt: 'Diagrama abstracto de reintegración y seguimiento clínico varonil',
    mediaVariant: 'dashed',
  },
  {
    title: 'Acompañamiento familiar',
    content: 'Reuniones semanales, contratos de convivencia y seguimiento para figuras paternas.',
  },
  {
    title: 'Prevención de recaídas',
    content: 'Plan de alta con métricas de riesgo, apadrinamiento y coaching digital durante 12 meses.',
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
  'Planes de reintegración con familia, apadrinamiento y seguimiento post alta durante 12 meses.',
];

const USE_CASES = [
  'Dependencia del alcohol u otras sustancias con impacto laboral o familiar.',
  'Conductas compulsivas, violencia o desregulación emocional en figuras masculinas.',
  'Ansiedad o depresión que limita el ejercicio del rol paterno.',
];

const MEN_GALLERY_ITEMS = [
  {
    src: menRoomPhoto,
    alt: 'Habitación residencial en la sede varonil',
    label: 'Habitaciones',
    caption: 'Habitaciones con control clínico y supervisión 24/7.',
  },
  {
    src: menCommonPhoto,
    alt: 'Área común para mentorías y talleres varoniles',
    label: 'Áreas comunes',
    caption: 'Salas para mentorías, reuniones y contratos de convivencia.',
  },
  {
    src: menActivationPhoto,
    alt: 'Área de ejercicios y meditación para residentes varoniles',
    label: 'Activación',
    caption: 'Zonas para ejercicio consciente y meditación guiada.',
  },
  {
    src: menTherapyPhoto,
    alt: 'Terapia grupal varonil en sala de acompañamiento clínico',
    label: 'Terapias',
    caption: 'Sesiones clínicas grupales con terapeutas especializados en procesos varoniles.',
  },
  {
    src: menCommunityPhoto,
    alt: 'Espacio de convivencia varonil con mentores y residentes',
    label: 'Convivencia',
    caption: 'Áreas para reuniones de contratos, mentorías y acuerdos de convivencia.',
  },
  {
    src: menFamilyPhoto,
    alt: 'Reunión familiar guiada dentro de la sede varonil',
    label: 'Familias',
    caption: 'Sesiones de integración familiar con seguimiento clínico y espiritual.',
  },
];

const MEN_TESTIMONIALS = [
  {
    quote:
      'Nos explicaron cada fase del Modelo Minnesota y recibimos reportes semanales con compromisos claros para mi hermano.',
    author: 'Familiar anónimo',
    role: 'Hermano de residente',
  },
  {
    quote:
      'El acompañamiento varonil es firme, pero humano. Me ayudaron a construir rutinas y retomar mi rol sin violencia.',
    author: 'Anónimo',
    role: 'Egresado sede varonil',
  },
  {
    quote:
      'Siempre se sintió la presencia de mentores disponibles. Nunca tuve que enfrentar solo una crisis.',
    author: 'Anónimo',
    role: 'Residente en seguimiento',
  },
];

const MEN_HERO_BACKGROUND = menHeroBackdrop;

const CONTACT_SECTION_ID = 'contacto-varonil';
const MEN_MAP_SRC =
  'https://maps.google.com/maps?q=Camino%20Real%20Pachuca&t=&z=14&ie=UTF8&iwloc=&output=embed';

/**
 * @typedef {Object} MenSiteViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 * @property {() => void} [onShowWomenSite]
 */

/**
 * @param {MenSiteViewProps} props
 */
export default function MenSiteView({ onNavigate, onOpenPrivacy, onShowWomenSite }) {
  const [microMode, setMicroMode] = useState('care');
  const [, setMicroIndex] = useState(0);
  const heroBackgroundStyle = {
    '--hero-photo': `url(${MEN_HERO_BACKGROUND})`,
  };

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
  const handleViewWomenSite = () => {
    onShowWomenSite?.();
    onNavigate?.('#sede-femenil');
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={onNavigate} />
      <main id="main" className="men-site" aria-label="Sede varonil" data-archetype={microMode}>
        <div className="men-site__halo" aria-hidden="true" />
        <div className="container men-site__layout">
          <section
            className="men-site__hero men-card site-card men-site__hero--photo"
            aria-labelledby="men-site-hero-title"
            data-archetype={microMode}
            // @ts-ignore
            style={heroBackgroundStyle}
          >
            <h2 id="men-site-hero-title">Sede varonil · Conciencia CAI</h2>
            <p className="men-site__lead">
              Espacio residencial pensado para hombres que requieren estructura, disciplina y contención emocional
              mientras atraviesan el proceso clínico del Modelo Minnesota + 12 Pasos.
            </p>

            <div className="method-overview__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={handleCTA}
              >
                Agendar valoración
              </button>
            </div>
            <SiteHighlights className="men-site__hero-highlights" items={HERO_HIGHLIGHTS} />
          </section>
          <AboutValues tone="men" />
          <section className="men-site__bottom">
            <div className="men-card site-card men-site__use-cases">
              <h2>Casos que acompañamos</h2>
              <p>
                Dependencia de alcohol u otras sustancias, conductas compulsivas con impacto directo
                en el rol masculino dentro de la familia.
              </p>
              <ul className="men-site__use-cases-list">
                {USE_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="men-site__use-cases-media">
                <img
                  src={menSupportPhoto}
                  alt="Equipo de acompañamiento varonil guiando un ejercicio terapéutico"
                  loading="lazy"
                  decoding="async"
                />
                <div className="men-site__use-cases-overlay" aria-hidden="true" />
                <p>Mapas de seguridad emocional · Rituales diarios · Mentorías deportivas</p>
              </div>
            </div>
          </section>
        </div>
        
        <MethodOverview
          tone="men"
          eyebrow="Modelo residencial varonil"
          title="Método Minnesota con disciplina y acompañamiento"
          description={
            <>
              <p>
                El programa integra supervisión clínica, actividades deportivas guiadas y sesiones de reintegración
                familiar que sostienen la motivación. Acompañamiento profesional para una recuperación integral.
                Integramos ciencia, espiritualidad y contención familiar para que cada fase tenga claridad.
              </p>
            </>
          }
          introExtra={
            <>
              <ul className="method-overview__pillars" role="list">
                {MEN_SITE_PILLARS.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
              <div className="method-overview__actions">
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => onNavigate?.('#metodo')}
                >
                  Explorar metodología
                </button>
              </div>
            </>
          }
        />
        <Gallery
          items={MEN_GALLERY_ITEMS}
          title="Galería"
          eyebrow="Sede varonil"
          description="Espacios diseñados para fomentar responsabilidad, actividad física y seguimiento clínico permanente."
        />
        <Testimonials
          items={MEN_TESTIMONIALS}
          tone="men"
          title="Testimonios que resguardamos"
          description="Historias de familias y residentes que confían en el acompañamiento cuidador y sabio de Conciencia CAI."
        />
        <ContactSection
          id={CONTACT_SECTION_ID}
          eyebrow="Contacto sede varonil"
          title="Coordinación clínica responde 24/7"
          description="Comparte tu situación y recibirás una llamada confidencial en menos de 30 minutos."
          lockedSedeValue="hombres"
          successMessage="Gracias. Coordinación varonil recibió tu mensaje y te contactará con total confidencialidad."
          // @ts-ignore
          channelNote="Guardias varoniles y consejeros clínicos monitorean esta línea permanentemente."
          onOpenPrivacy={onOpenPrivacy}
          asideContent={
            <MapEmbed
              title="Ubicación sede varonil"
              address="Camino Real #120, Pachuca, Hidalgo"
              phone="771 123 4567"
              mapSrc={MEN_MAP_SRC}
            />
          }
        />
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} onNavigate={onNavigate} activeSite="hombres" />
    </>
  );
}
