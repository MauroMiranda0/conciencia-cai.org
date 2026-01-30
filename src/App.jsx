import { useEffect, useState } from 'react';
import HomeView from './views/HomeView.jsx';
import MenSiteView from './views/MenSiteView.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import ModelModal from './components/ModelModal.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';
import './styles/components/Footer.scss';

const DEFAULT_OFFSET = 92;
const VIEWS = {
  HOME: 'home',
  MEN: 'men',
};

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [activeView, setActiveView] = useState(VIEWS.HOME);
  const [pendingHash, setPendingHash] = useState(null);

  const handleNavigate = (hash) => {
    if (!hash) return;
    if (hash === '#metodo') {
      setModelOpen(true);
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
  };

  useEffect(() => {
    if (activeView === VIEWS.HOME && pendingHash) {
      scrollToHash(pendingHash, DEFAULT_OFFSET);
      setPendingHash(null);
    }
  }, [activeView, pendingHash]);

  const handleViewSedeDetail = (site) => {
    const tone = site?.tone ?? site?.sede ?? '';
    if (tone === 'men' || tone === 'hombres') {
      setActiveView(VIEWS.MEN);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  return (
    <>
      {activeView === VIEWS.HOME ? (
        <HomeView
          onNavigate={handleNavigate}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onViewSedeDetail={handleViewSedeDetail}
        />
      ) : null}
      {activeView === VIEWS.MEN ? (
        <MenSiteView onNavigate={handleNavigate} onOpenPrivacy={() => setPrivacyOpen(true)} />
      ) : null}
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ModelModal open={modelOpen} onClose={() => setModelOpen(false)} />
    </>
  );
}
