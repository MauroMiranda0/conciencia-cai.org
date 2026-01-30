import { useState } from 'react';
import HomeView from './views/HomeView.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import ModelModal from './components/ModelModal.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';
import './styles/components/Footer.scss';

const DEFAULT_OFFSET = 92;

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);

  const handleNavigate = (hash) => {
    if (!hash) return;
    if (hash === '#metodo') {
      setModelOpen(true);
      return;
    }
    const target = hash === '#inicio' ? '#main' : hash;
    scrollToHash(target, DEFAULT_OFFSET);
  };

  return (
    <>
      <HomeView
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ModelModal open={modelOpen} onClose={() => setModelOpen(false)} />
    </>
  );
}
