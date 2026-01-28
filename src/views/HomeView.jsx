import Navbar from '../components/Navbar.jsx';
import HeroGallery from '../components/HeroGallery.jsx';
import Footer from '../components/Footer.jsx';

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

export default function HomeView({ onNavigate, onOpenPrivacy }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigate={onNavigate} />
      <main id="main" className="home-view__stage" aria-label="Inicio">
          <HeroGallery promises={HERO_PROMISES} />
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} />
    </>
  );
}
