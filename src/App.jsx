import { useCallback, useEffect, useRef, useState } from 'react';
import HomeView from './views/HomeView.jsx';
import MenSiteView from './views/MenSiteView.jsx';
import WomenSiteView from './views/WomenSiteView.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import ModelModal from './components/ModelModal.jsx';
import FloatingNavButtons from './components/FloatingNavButtons.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';
import './styles/components/Footer.scss';

const DEFAULT_OFFSET = 92;
const VIEWS = {
  HOME: 'home',
  MEN: 'men',
  WOMEN: 'women',
};

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [activeView, setActiveView] = useState(VIEWS.HOME);
  const [selectedSede, setSelectedSede] = useState('');
  const [pendingHash, setPendingHash] = useState(
    /** @type {string | null} */ (null)
  );
  const initialHashHandled = useRef(false);

  const scrollTop = () => {
    if (typeof window === 'undefined') return;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const showMenSite = useCallback(() => {
    setActiveView(VIEWS.MEN);
    setSelectedSede('hombres');
    scrollTop();
  }, []);

  const showWomenSite = useCallback(() => {
    setActiveView(VIEWS.WOMEN);
    setSelectedSede('mujeres');
    scrollTop();
  }, []);

  /**
   * @param {string | undefined} hash
   */
  const handleNavigate = useCallback(
    (hash) => {
      if (!hash) return;
      if (hash === '#metodo') {
        setModelOpen(true);
        return;
      }
      if (hash === '#sede-varonil') {
        showMenSite();
        return;
      }
      if (hash === '#sede-femenil') {
        showWomenSite();
        return;
      }
      const target = hash === '#inicio' ? '#main' : hash;
      if (activeView !== VIEWS.HOME && target !== '#main') {
        setActiveView(VIEWS.HOME);
        setPendingHash(target);
        return;
      }
      if (target === '#main') {
        setActiveView(VIEWS.HOME);
      }
      scrollToHash(target, DEFAULT_OFFSET);
    },
    [activeView, showMenSite, showWomenSite]
  );

  useEffect(() => {
    if (initialHashHandled.current) return;
    initialHashHandled.current = true;
    const { hash } = window.location;
    if (!hash) return;
    handleNavigate(hash);
  }, [handleNavigate]);

  useEffect(() => {
    if (activeView === VIEWS.HOME && pendingHash) {
      scrollToHash(pendingHash, DEFAULT_OFFSET);
      setPendingHash(null);
    }
  }, [activeView, pendingHash]);

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const { classList } = document.body;
    classList.toggle('theme-men', activeView === VIEWS.MEN);
    classList.toggle('theme-women', activeView === VIEWS.WOMEN);
    if (activeView === VIEWS.HOME) {
      classList.remove('theme-men', 'theme-women');
    }
    return () => {
      classList.remove('theme-men', 'theme-women');
    };
  }, [activeView]);

  return (
    <>
      {activeView === VIEWS.HOME ? (
        <HomeView
          onNavigate={handleNavigate}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onShowMenSite={showMenSite}
          onShowWomenSite={showWomenSite}
          selectedSede={selectedSede}
          onSelectSede={setSelectedSede}
        />
      ) : null}
      {activeView === VIEWS.MEN ? (
        <MenSiteView
          onNavigate={handleNavigate}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onShowWomenSite={showWomenSite}
        />
      ) : null}
      {activeView === VIEWS.WOMEN ? (
        <WomenSiteView
          onNavigate={handleNavigate}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onShowMenSite={showMenSite}
        />
      ) : null}
      <FloatingNavButtons
        onNavigate={handleNavigate}
        isHidden={privacyOpen || modelOpen}
        activeView={activeView}
      />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ModelModal open={modelOpen} onClose={() => setModelOpen(false)} />
    </>
  );
}
