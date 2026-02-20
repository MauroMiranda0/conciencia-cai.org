import { Suspense, lazy } from 'react';
import usePageMeta from '../hooks/usePageMeta.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SiteHighlights from '../components/SiteHighlights.jsx';
import MethodOverview from '../components/MethodOverview.jsx';
import AboutValues from '../components/AboutValues.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import ResponsivePicture from '../components/ResponsivePicture.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import womenHeroImage from '../assets/photos/women/hero-mujer.png';
import womenHeroImageWebp from '../assets/photos/women/hero-mujer.webp';
import womenHeroImageAvif from '../assets/photos/women/hero-mujer.avif';
import womenRoomImage from '../assets/photos/women/habitacion-mujer.png';
import womenRoomImageWebp from '../assets/photos/women/habitacion-mujer.webp';
import womenRoomImageAvif from '../assets/photos/women/habitacion-mujer.avif';
import womenGardenImage from '../assets/photos/women/jardin-terapeutico-mujer.png';
import womenGardenImageWebp from '../assets/photos/women/jardin-terapeutico-mujer.webp';
import womenGardenImageAvif from '../assets/photos/women/jardin-terapeutico-mujer.avif';
import womenCircleImage from '../assets/photos/women/circulos-contencion-mujer.png';
import womenCircleImageWebp from '../assets/photos/women/circulos-contencion-mujer.webp';
import womenCircleImageAvif from '../assets/photos/women/circulos-contencion-mujer.avif';
import womenMedicalRitualsImage from '../assets/photos/women/supervision-medica-mujer.png';
import womenMedicalRitualsImageWebp from '../assets/photos/women/supervision-medica-mujer.webp';
import womenMedicalRitualsImageAvif from '../assets/photos/women/supervision-medica-mujer.avif';
import womenEgressGardenImage from '../assets/photos/women/egreso-mujer.png';
import womenEgressGardenImageWebp from '../assets/photos/women/egreso-mujer.webp';
import womenEgressGardenImageAvif from '../assets/photos/women/egreso-mujer.avif';
import womenSupportImage from '../assets/photos/women/contencion-familiar-mujer.png';
import womenSupportImageWebp from '../assets/photos/women/contencion-familiar-mujer.webp';
import womenSupportImageAvif from '../assets/photos/women/contencion-familiar-mujer.avif';
import womenUseCasesImage from '../assets/photos/women/acompañamiento-mujer.png';
import womenUseCasesImageWebp from '../assets/photos/women/acompañamiento-mujer.webp';
import womenUseCasesImageAvif from '../assets/photos/women/acompañamiento-mujer.avif';
import '../styles/views/WomenSiteView.scss';

const LazyGallery = lazy(() => import('../components/Gallery.jsx'));
const LazyTestimonials = lazy(() => import('../components/Testimonials.jsx'));

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
    src: womenRoomImage,
    webp: womenRoomImageWebp,
    avif: womenRoomImageAvif,
    alt: 'Habitación terapéutica y privada en la sede femenil',
    label: 'Suites',
    caption: 'Habitaciones individuales con cama amplia, textiles cálidos y supervisión cercana.',
  },
  {
    src: womenGardenImage,
    webp: womenGardenImageWebp,
    avif: womenGardenImageAvif,
    alt: 'Estudio interior luminoso con acompañamiento terapéutico y elementos de calma',
    label: 'Estudio terapéutico',
    caption:
      'Guía y acompañamiento con meditacion y respiraciones conscientes.',
  },
  {
    src: womenCircleImage,
    webp: womenCircleImageWebp,
    avif: womenCircleImageAvif,
    alt: 'Círculo de contención femenino con coordinación clínica',
    label: 'Sala de contención',
    caption: 'Espacios con un entorno de bienestar, donde se transmite calma, confianza y apertura.',
  },
  {
    src: womenMedicalRitualsImage,
    webp: womenMedicalRitualsImageWebp,
    avif: womenMedicalRitualsImageAvif,
    alt: 'Supervisión médica femenina guiando rituales de autocuidado',
    label: 'Atención médica',
    caption: 'Consultorio médico donde una especialista guía chequeos y respiraciones asistidas.',
  },
  {
    src: womenEgressGardenImage,
    webp: womenEgressGardenImageWebp,
    avif: womenEgressGardenImageAvif,
    alt: 'Ceremonia de egreso femenina celebrando con banderines y abrazos solidarios',
    label: 'Egreso',
    caption:
      'Donde las egresadas se fortalecen mutuamente para la reintegración.',
  },
  {
    src: womenSupportImage,
    webp: womenSupportImageWebp,
    avif: womenSupportImageAvif,
    alt: 'Familia abrazándose mientras recibe acompañamiento en la sede femenil',
    label: 'Contención familiar',
    caption: 'Bienestar integral donde la unión familiar refuerza la seguridad emocional.',
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
  'https://maps.google.com/maps?q=Av%20Pirules%20202%2C%20Amp%20el%20Tezontle%2C%2042084%20Pachuca%20de%20Soto%2C%20Hgo&t=&z=17&ie=UTF8&iwloc=&output=embed';

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
  const microMode = 'care';
  usePageMeta({
    title: 'Sede femenil · Conciencia CAI',
    description:
      'Refugio terapéutico para mujeres con trauma informado, círculos de contención y mentorías financieras en Pachuca.',
    canonical: 'https://conciencia-cai.org/#sede-femenil',
  });

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
            className="women-site__hero women-card site-card women-site__hero--photo"
            aria-labelledby="women-site-hero-title"
            data-archetype={microMode}
          >
            <div className="women-site__hero-photo" aria-hidden="true">
              <ResponsivePicture
                src={womenHeroImage}
                webp={womenHeroImageWebp}
                avif={womenHeroImageAvif}
                alt=""
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div className="women-site__hero-body">
              <div className="women-site__hero-content">
                <h1 id="women-site-hero-title">Sede femenil · Conciencia CAI</h1>
                <p className="women-site__lead">
                  Un refugio terapéutico diseñado para mujeres que buscan sanar trauma, dependencia emocional o consumo
                  problemático con acompañamiento especializado y seguro.
                </p>
                <div className="method-overview__actions women-site__hero-actions">
                  <button type="button" className="btn btn--primary" onClick={handleCTA}>
                    Agendar valoración
                  </button>
                </div>
                <SiteHighlights className="women-site__hero-highlights" items={HERO_HIGHLIGHTS} />
              </div>
            </div>
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
              <div className="women-site__use-cases-media">
                <ResponsivePicture
                  src={womenUseCasesImage}
                  webp={womenUseCasesImageWebp}
                  avif={womenUseCasesImageAvif}
                  alt="Coordinadora ofreciendo contención cercana a una residente"
                />
                <div className="women-site__use-cases-overlay" aria-hidden="true" />
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
                <button type="button" className="btn btn--secondary" onClick={() => onNavigate?.('#metodo')}>
                  Explorar metodología
                </button>
              </div>
            </>
          }
        />
        <Suspense fallback={null}>
          <LazyGallery
            items={WOMEN_GALLERY_ITEMS}
            title="Galería"
            eyebrow="Sede femenil"
            description="Ambientes diseñados para garantizar seguridad emocional, autocuidado y acompañamiento continuo."
          />
        </Suspense>
        <Suspense fallback={null}>
          <LazyTestimonials
            items={WOMEN_TESTIMONIALS}
            tone="women"
            title="Testimonios que resguardamos"
            description="Escuchamos a familias y mujeres que viven procesos de cambio con empatía y guía profesional."
          />
        </Suspense>
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
              address="Av. Pirules 202, Amp el Tezontle, 42084 Pachuca de Soto, Hgo."
              phone="77 16 84 22 95 - 55 78 84 02 11"
              mapSrc={WOMEN_MAP_SRC}
            />
          }
        />
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} onNavigate={onNavigate} activeSite="mujeres" />
    </>
  );
}
