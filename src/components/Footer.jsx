import { useState } from 'react';
import logoAzul from '../assets/brand/logoAzul.jpg';
import logoRosa from '../assets/brand/logoRosa.jpg';
import FacebookIcon from './icons/FacebookIcon.jsx';
import InstagramIcon from './icons/InstagramIcon.jsx';
import '../styles/components/Footer.scss';

const INFO_LINKS = [
  { href: '#metodo', label: 'Modelo Minnesota' },
  { href: '#contacto', label: 'Valoración confidencial' },
  { href: '#sedes', label: 'Sedes en Pachuca' },
];

export default function Footer({ onOpenPrivacy, onNavigate }) {
  const [emailValue, setEmailValue] = useState('');
  const [status, setStatus] = useState('');

  const handleNavigate = (event, hash) => {
    event?.preventDefault();
    onNavigate?.(hash);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailValue.trim()) {
      setStatus('Ingresa un correo para recibir recursos y guías.');
      return;
    }
    setStatus('Gracias. Te enviaremos guías clínicas y materiales para familias.');
    setEmailValue('');
  };

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="container footer-grid">
          <div className="footer-col footer-contact">
            <a href="#inicio" className="nav__logo" onClick={(event) => handleNavigate(event, '#inicio')}>
              <span className="nav__logo-group">
                <img src={logoAzul} alt="Conciencia CAI Varonil" className="nav__logo-img" loading="lazy" />
              </span>

              <span className="nav__logo-copy">
                <span>Conciencia CAI</span>
                <small>Centro de Atención Integral de las Adicciones</small>
              </span>

              <span className="nav__logo-group">
                <img src={logoRosa} alt="Conciencia CAI Femenil" className="nav__logo-img" loading="lazy" />
              </span>
            </a>
            <p className="footer-detail">
              <MailIcon />
              <a href="mailto:contacto@conciencia-cai.org">contacto@conciencia-cai.org</a>
            </p>
            <p className="footer-detail">
              <PhoneIcon />
              <a href="tel:7711234567">771 123 4567</a>
            </p>
            <div className="footer-social" aria-label="Redes sociales">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="footer-col footer-info">
            <h2>Información</h2>
            <ul>
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(event) => handleNavigate(event, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" onClick={onOpenPrivacy}>
                  Aviso de privacidad
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-newsletter">
            <h2>Recibe guías y recursos</h2>
            <p>Enviamos materiales clínicos, rituales familiares y agendas de acompañamiento.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Tu correo"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
                aria-label="Correo electrónico"
              />
              <button type="submit" className="btn btn--primary">
                Suscribirme
              </button>
            </form>
            {status ? (
              <p className="newsletter-status" role="status" aria-live="polite">
                {status}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="footer-copyright">© {new Date().getFullYear()} Conciencia CAI. Todos los derechos reservados.</div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l8 4.8 8-4.8V8H4zm0 8h16V9.5l-7.4 4.4a2 2 0 0 1-2.2 0L4 9.5V16z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 3h3.1a1.5 1.5 0 0 1 1.5 1.3l.4 2.9a1.5 1.5 0 0 1-.5 1.3l-1.9 1.6a11.6 11.6 0 0 0 5 5l1.6-1.9a1.5 1.5 0 0 1 1.3-.5l2.9.4a1.5 1.5 0 0 1 1.3 1.5v3.1a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 3 8.1 1.5 1.5 0 0 1 4.5 6.6z" />
    </svg>
  );
}
