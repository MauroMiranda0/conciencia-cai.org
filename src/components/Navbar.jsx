import { useState } from 'react';
import logoAzul from '../assets/brand/logoAzul.jpg';
import logoRosa from '../assets/brand/logoRosa.jpg';
import '../styles/components/Navbar.scss';

const LINKS = [
  { href: '#metodo', label: 'Modelo' },
  { href: '#contacto', label: 'Valoración' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/', label: 'Facebook', icon: 'facebook' },
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: 'instagram' },
];

export default function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (event, hash) => {
    event?.preventDefault();
    setMenuOpen(false);
    onNavigate?.(hash);
  };

  return (
    <header className="navbar" role="banner">
      <nav className="nav container">
        <a href="#inicio" className="nav__logo" onClick={(event) => handleNavigate(event, '#inicio')}>
          <span className="nav__logo-group">
            <img src={logoAzul} alt="Conciencia CAI Varonil" className="nav__logo-img" loading="lazy" />
            <img src={logoRosa} alt="Conciencia CAI Femenil" className="nav__logo-img" loading="lazy" />
          </span>
          <span className="nav__logo-copy">
            <span>Conciencia CAI</span>
            <small>Centro de Atención Integral de las Adicciones</small>
          </span>
        </a>

        <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`} id="nav-menu">
          
          <div className="nav__buttons">
            <button
              type="button"
              className="nav__button-link"
              onClick={() => handleNavigate(null, '#metodo')}
            >
              Modelo Minnesota
            </button>
            <button
              type="button"
              className="nav__button-ghost"
              onClick={() => handleNavigate(null, '#contacto')}
            >
              Agenda tu valoración
            </button>
          </div>
          <div className="nav__social" aria-label="Redes sociales">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="nav__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={`Visitar ${social.label}`}
              >
                {social.icon === 'facebook' ? <FacebookIcon /> : <InstagramIcon />}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="nav__close"
            id="nav-close"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>

        <button
          type="button"
          className="nav__toggle"
          id="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
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
