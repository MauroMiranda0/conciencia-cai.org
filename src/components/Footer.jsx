import FacebookIcon from './icons/FacebookIcon.jsx';
import InstagramIcon from './icons/InstagramIcon.jsx';
import '../styles/components/Footer.scss';

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="app-footer">
      <div className="container app-footer__inner">
        <nav className="app-footer__nav" aria-label="Enlaces secundarios">
          <a href="#inicio">Inicio</a>
          <a href="#metodo">Método</a>
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
