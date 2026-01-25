import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleNavigate = (hash) => {
    scrollToHash(hash, 92);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <main>
        <HeroSection onNavigate={handleNavigate} onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
