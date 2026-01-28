import FacebookIcon from './icons/FacebookIcon.jsx';
import InstagramIcon from './icons/InstagramIcon.jsx';
import '../styles/components/Footer.scss';
import { SECTION_LINKS } from '../utils/navigation.js';

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="app-footer">
      <div className="container app-footer__inner">
        
        <nav className="app-footer__nav" aria-label="Enlaces secundarios">
          {SECTION_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button type="button" className="app-footer__link" onClick={onOpenPrivacy}>
            Privacidad
          </button>
          <div className="app-footer__social">
            <a
              href="https://www.facebook.com/"
              className="app-footer__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              className="app-footer__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </nav>
        <p className="app-footer__note">© {new Date().getFullYear()}, MR reserved.</p>
      </div>
    </footer>
  );
}
