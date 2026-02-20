import { useCallback } from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroVista from '../components/HeroVista.jsx';
import MethodOverview from '../components/MethodOverview.jsx';
import Footer from '../components/Footer.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import { scrollToHash } from '../utils/dom.js';
import { normalizeSedeValue } from '../utils/sites.js';
import HomeVideoCard from '../components/HomeVideoCard.jsx';
import '../styles/views/HomeVideos.scss';

const HERO_PROMISES = [
  {
    title: 'Ingreso confidencial',
    description:
      'Protocolos éticos y administrativos que resguardan la información desde el primer contacto.',
  },
  {
    title: 'Equipo multidisciplinario',
    description:
      'Médicos, psicólogos y consejeros certificados coordinan cada fase del tratamiento.',
  },
  {
    title: 'Modelo Minnesota + 12 Pasos',
    description:
      'Metodología comprobada que integra ciencia, espiritualidad y acompañamiento familiar.',
  },
];

const SCROLL_OFFSET = 92;
const MEN_SITE_HASH = '#sede-varonil';
const WOMEN_SITE_HASH = '#sede-femenil';
const CONTACT_HASH = '#contacto';
const MODEL_INFO_URL = '/docs/modelo-minnesota.pdf';
const HOME_VIDEO_ITEMS = [
  {
    title: 'Monólogo terapéutico',
    description: 'Escucha el acompañamiento inicial donde explicamos protocolos y contención familiar.',
    poster: '/media/posters/monologo.jpg',
    sources: {
      mp4: '/media/videos/monologo-optimized.mp4',
      webm: '/media/videos/monologo-optimized.webm',
    },
  },
  {
    title: 'Recorrido sede varonil',
    description: 'Visualiza dormitorios, espacios clínicos y dinámicas de cuidado para hombres.',
    poster: '/media/posters/video-hombres.jpg',
    sources: {
      mp4: '/media/videos/video-hombres-optimized.mp4',
      webm: '/media/videos/video-hombres-optimized.webm',
    },
  },
  {
    title: 'Recorrido sede femenil',
    description: 'Conoce los ambientes terapéuticos y círculos de contención exclusivos para mujeres.',
    poster: '/media/posters/video-mujeres.jpg',
    sources: {
      mp4: '/media/videos/video-mujeres-optimized.mp4',
      webm: '/media/videos/video-mujeres-optimized.webm',
    },
  },
];

/**
 * @typedef {Object} HomeViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 * @property {() => void} [onShowMenSite]
 * @property {() => void} [onShowWomenSite]
 * @property {string} [selectedSede]
 * @property {(sede?: string) => void} [onSelectSede]
 */

/**
 * @param {HomeViewProps} props
 */
export default function HomeView({
  onNavigate,
  onOpenPrivacy,
  onShowMenSite,
  onShowWomenSite,
  selectedSede,
  onSelectSede,
}) {
  const handleNavigate = useCallback(
    /**
     * @param {string} [hash]
     */
    (hash) => {
      if (!hash) return;
      if (onNavigate) {
        onNavigate(hash);
        return;
      }
      if (hash === '#metodo' && typeof window !== 'undefined') {
        window.open(MODEL_INFO_URL, '_blank', 'noopener,noreferrer');
        return;
      }
      scrollToHash(hash, SCROLL_OFFSET);
    },
    [onNavigate]
  );

  const handleOpenPrivacy = useCallback(() => {
    onOpenPrivacy?.();
  }, [onOpenPrivacy]);

  const handleSelectSede = useCallback(
    /**
     * @param {string} [sede]
     */
    (sede) => {
      onSelectSede?.(normalizeSedeValue(sede));
    },
    [onSelectSede]
  );

  const handleShowMenSite = useCallback(() => {
    handleSelectSede('hombres');
    if (onShowMenSite) {
      onShowMenSite();
      return;
    }
    if (onNavigate) {
      onNavigate(MEN_SITE_HASH);
      return;
    }
    scrollToHash(CONTACT_HASH, SCROLL_OFFSET);
  }, [handleSelectSede, onNavigate, onShowMenSite]);

  const handleShowWomenSite = useCallback(() => {
    handleSelectSede('mujeres');
    if (onShowWomenSite) {
      onShowWomenSite();
      return;
    }
    if (onNavigate) {
      onNavigate(WOMEN_SITE_HASH);
      return;
    }
    scrollToHash(CONTACT_HASH, SCROLL_OFFSET);
  }, [handleSelectSede, onNavigate, onShowWomenSite]);

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={handleNavigate} />
      <main id="main" className="home-view__stage" aria-label="Inicio">
        <div className="reveal" data-section="hero">
          <HeroVista
            promises={HERO_PROMISES}
            onNavigate={handleNavigate}
            onShowMenSite={handleShowMenSite}
            onShowWomenSite={handleShowWomenSite}
            onSelectSede={handleSelectSede}
          />
        </div>
        <div className="reveal reveal--delay-1" data-section="method">
          <MethodOverview />
        </div>
        <div className="reveal reveal--delay-2" data-section="videos">
          <section className="home-videos" aria-labelledby="home-videos-title">
            <div className="container home-videos__wrapper">
              <div className="home-videos__intro">
                <p className="hero-vista__trust-eyebrow">Voces y recorridos</p>
                <h2 id="home-videos-title">Experiencias en video</h2>
                <p className="text-muted">
                  Observa cómo coordinamos ingresos, contención familiar y recorridos guiados en ambas sedes.
                </p>
              </div>
              <div className="home-videos__grid" role="list">
                {HOME_VIDEO_ITEMS.map((item) => (
                  <HomeVideoCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="reveal reveal--delay-3" data-section="contact">
          <ContactSection
            selectedSede={selectedSede}
            onSelectSede={handleSelectSede}
            onOpenPrivacy={handleOpenPrivacy}
            channelNote="Coordinación clínica responde cada mensaje y orienta sin juicios."
          />
        </div>
      </main>
      <Footer onOpenPrivacy={handleOpenPrivacy} onNavigate={handleNavigate} />
    </>
  );
}
