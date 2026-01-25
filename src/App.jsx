import Navbar from './components/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';

export default function App() {
  const handleNavigate = (hash) => {
    scrollToHash(hash, 92);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <main>
        <HeroSection onNavigate={handleNavigate} />
      </main>
    </>
  );
}
