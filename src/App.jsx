import { useState } from 'react';
import HomeView from './views/HomeView.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';
import './styles/components/Footer.scss';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleNavigate = (hash) => {
    scrollToHash(hash, 92);
  };

  return (
    <>
      <HomeView
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
