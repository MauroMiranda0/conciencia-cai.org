import logoAzul from '../assets/brand/logoAzul.jpg';
import logoRosa from '../assets/brand/logoRosa.jpg';
import FacebookIcon from './icons/FacebookIcon.jsx';
import InstagramIcon from './icons/InstagramIcon.jsx';
import '../styles/components/Footer.scss';

const FOOTER_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#metodo', label: 'Modelo' },
  { href: '#contacto', label: 'Valoración' },
];

export default function Footer({ onOpenPrivacy, onNavigate }) {
  const handleNavigate = (event, hash) => {
    event?.preventDefault();
    onNavigate?.(hash);
  };

  return (
    <footer className="app-footer">
      <nav className="nav container nav--footer" aria-label="Navegación secundaria">
        <a
          href="#inicio"
          className="nav__logo nav__logo--footer"
          onClick={(event) => handleNavigate(event, '#inicio')}
        >
          <span className="nav__logo-group">
            <img src={logoAzul} alt="Conciencia CAI Varonil" className="nav__logo-img" loading="lazy" />
            <img src={logoRosa} alt="Conciencia CAI Femenil" className="nav__logo-img" loading="lazy" />
          </span>
          <span className="nav__logo-copy">
            <span>Conciencia CAI</span>
            <small>Centro de Atención Integral de las Adicciones</small>
          </span>
        </a>
        <div className="nav__menu nav__menu--footer">
          <ul className="nav__list">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href} className="nav__item">
                <a href={link.href} className="nav__link" onClick={(event) => handleNavigate(event, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__buttons nav__buttons--footer">
            <button type="button" className="nav__button-ghost" onClick={onOpenPrivacy}>
              Aviso de privacidad
            </button>
          </div>
          <div className="nav__social" aria-label="Redes sociales">
            <a
              href="https://www.facebook.com/"
              className="nav__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              className="nav__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </nav>
      <p className="app-footer__note">© {new Date().getFullYear()}, MR reserved.</p>
    </footer>
  );
}
