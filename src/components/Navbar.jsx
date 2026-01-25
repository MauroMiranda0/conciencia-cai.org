import logoAzul from '../assets/brand/logoAzul.jpg';
import logoRosa from '../assets/brand/logoRosa.jpg';
import '../styles/components/Navbar.scss';

const LINKS = [
  { href: '#metodo', label: 'Modelo' },
  { href: '#contacto', label: 'Contacto / Valoración' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/', label: 'Facebook', icon: 'facebook' },
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: 'instagram' },
];

export default function Navbar({ onNavigate }) {
  return (
    <header className="navbar" role="banner">
      <div className="container navbar__inner">
        <div className="navbar__logos">
          <LogoCard src={logoAzul} alt="CON-CIENCIA Varonil" />
          <div className="navbar__copy">
            <p className="navbar__title">Centro de Atención Integral de las Adicciones</p>
            <p className="navbar__subtitle">
              Atención profesional · Confidencialidad · Acompañamiento
            </p>
          </div>
          <LogoCard src={logoRosa} alt="CON-CIENCIA Femenil" />
        </div>
        <div className="navbar__actions">
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
          <div className="navbar__social" aria-label="Redes sociales">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="navbar__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={`Visitar ${social.label}`}
              >
                {social.icon === 'facebook' ? <FacebookIcon /> : <InstagramIcon />}
              </a>
            ))}
          </div>
        </div>
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3H13.5V9.6c0-.9.3-1.5 1.6-1.5H16V5.3C15.8 5.2 15 5 14 5c-2.3 0-3.8 1.4-3.8 4v1.9H8v3h2.2v7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5zm-6.1-7.9a4.1 4.1 0 1 0 4.1 4.1 4.1 4.1 0 0 0-4.1-4.1zm0 6.5A2.4 2.4 0 1 1 15.6 13a2.4 2.4 0 0 1-2.4 2.4zm5.2-7.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
    </svg>
  );
}
