import logoAzul from '../assets/brand/logoAzul.jpg';
import logoRosa from '../assets/brand/logoRosa.jpg';
import '../styles/components/Navbar.scss';

/**
 * @typedef {Object} NavbarProps
 * @property {(hash?: string) => void} [onNavigate]
 */

/**
 * @param {NavbarProps} props
 */
export default function Navbar({ onNavigate }) {
  /**
   * @param {import('react').MouseEvent<HTMLAnchorElement | HTMLButtonElement> | null} event
   * @param {string} hash
   */
  const handleNavigate = (event, hash) => {
    event?.preventDefault();
    onNavigate?.(hash);
  };

  return (
    <header className="navbar" role="banner">
      <div className="nav container">
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
      </div>
    </header>
  );
}
