import logoAzul from '../assets/brand/logoAzul.jpg';
import logoRosa from '../assets/brand/logoRosa.jpg';
import '../styles/components/Navbar.scss';

const LINKS = [
  { href: '#sedes', label: 'Sedes' },
  { href: '#metodo', label: 'Método' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar({ onNavigate }) {
  return (
    <header className="navbar" role="banner">
      <div className="container navbar__inner">
        <div className="navbar__logos">
          <LogoCard src={logoAzul} alt="CON-CIENCIA Hombres" />
          <div className="navbar__copy">
            <p className="navbar__title">Centro de Atención Integral de las Adicciones</p>
            <p className="navbar__subtitle">
              Atención profesional · Confidencialidad · Acompañamiento
            </p>
          </div>
          <LogoCard src={logoRosa} alt="CON-CIENCIA Mujeres" />
        </div>
        <nav aria-label="Navegación principal" className="navbar__nav">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(link.href);
              }}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function LogoCard({ src, alt }) {
  return (
    <div className="navbar__logo-card">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}
