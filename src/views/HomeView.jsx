import { useCallback, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroGallery from '../components/HeroGallery.jsx';
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

export default function HomeView({ onNavigate, onOpenPrivacy, onViewSedeDetail }) {
  const [selectedSede, setSelectedSede] = useState('');

  const handleNavigate = useCallback(
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

  const handleSelectSede = useCallback((sede) => {
    setSelectedSede(sede ?? '');
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={handleNavigate} />
      <main id="main" className="home-view__stage" aria-label="Inicio">
        <HeroGallery promises={HERO_PROMISES} onNavigate={handleNavigate} onViewSedeDetail={onViewSedeDetail} />
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
