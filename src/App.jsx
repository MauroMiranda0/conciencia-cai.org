import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ConsentBanner from './components/ConsentBanner.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import CookiePrefsModal from './components/CookiePrefsModal.jsx';
import HeroSection from './sections/HeroSection.jsx';
import SitesSection from './sections/SitesSection.jsx';
import MethodSection from './sections/MethodSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import { scrollToHash } from './utils/dom.js';
import { getConsent, setConsent as persistConsent } from './utils/storage.js';
import './styles/globals.scss';
import './styles/components/Button.scss';

const DEFAULT_CONSENT = { state: 'unknown', analytics: false, marketing: false };

export default function App() {
  const [theme, setTheme] = useState('neutral');
  const [selectedSede, setSelectedSede] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [consent, setConsent] = useState(() => getConsent());

  useEffect(() => {
    document.body.classList.remove('theme-men', 'theme-women', 'theme-neutral');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleSedeSelect = (sede) => {
    if (!sede) return;
    setSelectedSede(sede);
    setTheme(sede === 'mujeres' ? 'women' : 'men');
    scrollToHash('#contacto', 92);
  };

  const handleConsentChange = (next) => {
    setConsent(next);
    persistConsent(next);
  };

  const consentBanner =
    consent.state === 'unknown'
      ? {
          onAccept: () =>
            handleConsentChange({ state: 'accepted', analytics: true, marketing: true }),
          onReject: () =>
            handleConsentChange({ state: 'rejected', analytics: false, marketing: false }),
        }
      : null;

  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Navbar onNavigate={(hash) => scrollToHash(hash, 92)} />
      <main id="main">
        <HeroSection onSelectSede={handleSedeSelect} />
        <SitesSection onSelectSede={handleSedeSelect} />
        <MethodSection />
        <ContactSection
          selectedSede={selectedSede}
          onSelectSede={handleSedeSelect}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      </main>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookiePrefsModal
        open={prefsOpen}
        onClose={() => setPrefsOpen(false)}
        settings={consent.state === 'unknown' ? DEFAULT_CONSENT : consent}
        onSave={(prefs) => {
          handleConsentChange({ state: 'custom', ...prefs });
          setPrefsOpen(false);
        }}
      />
      {consentBanner && (
        <ConsentBanner
          onAccept={consentBanner.onAccept}
          onReject={consentBanner.onReject}
          onOpenPrefs={() => setPrefsOpen(true)}
        />
      )}
    </>
  );
}
