import { useCallback, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroVista from '../components/HeroVista.jsx';
import HumanGuide from '../components/HumanGuide.jsx';
import Footer from '../components/Footer.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import { scrollToHash } from '../utils/dom.js';

const HERO_PROMISES = [
  {
    title: 'Ingreso confidencial',
    description: 'Protocolos éticos y administrativos que resguardan la información desde el primer contacto.',
  },
  {
    title: 'Equipo multidisciplinario',
    description: 'Médicos, psicólogos y consejeros certificados coordinan cada fase del tratamiento.',
  },
  {
    title: 'Modelo Minnesota + 12 Pasos',
    description: 'Metodología comprobada que integra ciencia, espiritualidad y acompañamiento familiar.',
  },
];

const SCROLL_OFFSET = 92;

/**
 * @typedef {Object} HomeViewProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {() => void} [onOpenPrivacy]
 * @property {() => void} [onShowMenSite]
 */

/**
 * @param {HomeViewProps} props
 */
export default function HomeView({ onNavigate, onOpenPrivacy, onShowMenSite }) {
  const [selectedSede, setSelectedSede] = useState('');

  const handleNavigate = useCallback(
    /**
     * @param {string | undefined} target
     */
    (target) => {
      if (!target) return;
      if (onNavigate) {
        onNavigate(target);
        return;
      }
      scrollToHash(target, SCROLL_OFFSET);
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
      setSelectedSede(sede ?? '');
    },
    []
  );

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={handleNavigate} />
      <main id="main" className="home-view__stage" aria-label="Inicio">
        <HeroVista
          promises={HERO_PROMISES}
          onNavigate={handleNavigate}
          onShowMenSite={onShowMenSite}
          onSelectSede={handleSelectSede}
        />
        <HumanGuide />
        <ContactSection
          selectedSede={selectedSede}
          onSelectSede={handleSelectSede}
          onOpenPrivacy={handleOpenPrivacy}
        />
      </main>
      <Footer onOpenPrivacy={handleOpenPrivacy} onNavigate={handleNavigate} />
    </>
  );
}
