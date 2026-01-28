import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import HomeView from './views/HomeView.jsx';
import SedePage from './views/SedePage.jsx';
import { scrollToHash } from './utils/dom.js';
import { isSedeRoute, useRoute } from './utils/router.js';
import './styles/globals.scss';
import './styles/components/Button.scss';
import './styles/components/Footer.scss';

const ROUTES = {
  HOME: '/',
  MEN: '/sede/varonil',
  WOMEN: '/sede/femenil',
};

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [selectedSede, setSelectedSede] = useState('');
  const [path, navigate] = useRoute();

  const currentTheme = useMemo(() => isSedeRoute(path) ?? 'default', [path]);

  useEffect(() => {
    document.body.dataset.theme = currentTheme;
  }, [currentTheme]);

  const handleNavigate = (hash) => {
    scrollToHash(hash, 92);
  };

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const handleViewSede = (variant) => {
    if (variant === 'men') {
      handleRouteChange(ROUTES.MEN);
    } else if (variant === 'women') {
      handleRouteChange(ROUTES.WOMEN);
    }
  };

  const handleSelectSede = (sede) => {
    setSelectedSede(sede);
  };

  const renderRoute = () => {
    if (path === ROUTES.MEN) {
      return (
        <SedePage
          variant="men"
          onNavigate={handleNavigate}
          onRouteChange={handleRouteChange}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onSelectSede={handleSelectSede}
        />
      );
    }
    if (path === ROUTES.WOMEN) {
      return (
        <SedePage
          variant="women"
          onNavigate={handleNavigate}
          onRouteChange={handleRouteChange}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onSelectSede={handleSelectSede}
        />
      );
    }
    return (
      <HomeView
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onSelectSede={handleSelectSede}
        onViewSede={handleViewSede}
        selectedSede={selectedSede}
      />
    );
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar
        onNavigate={handleNavigate}
        onRouteChange={handleRouteChange}
        currentRoute={path}
      />
      <main id="main">{renderRoute()}</main>
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        currentTheme={currentTheme}
        onRouteChange={handleRouteChange}
      />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
