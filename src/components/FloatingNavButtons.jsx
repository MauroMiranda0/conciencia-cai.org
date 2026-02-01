import '../styles/components/FloatingNavButtons.scss';

const WHATSAPP_URL = 'https://wa.me/5217711234567?text=Hola%2C%20quiero%20agendar%20una%20valoraci%C3%B3n';
const FLOATING_BUTTONS = [
  { hash: '#metodo', label: 'Modelo Minnesota', type: 'hash', icon: MethodIcon },
  { href: WHATSAPP_URL, label: 'Agenda tu valoración', type: 'external', icon: WhatsappIcon },
];

/**
 * @typedef {Object} FloatingNavButtonsProps
 * @property {(hash?: string) => void} [onNavigate]
 */

/**
 * @param {FloatingNavButtonsProps} props
 */
export default function FloatingNavButtons({ onNavigate }) {
  /**
   * @param {import('react').MouseEvent<HTMLButtonElement>} event
   * @param {string|undefined} hash
   */
  const handleClick = (event, hash) => {
    event.preventDefault();
    onNavigate?.(hash);
  };

  return (
    <div className="floating-nav" role="navigation" aria-label="Accesos principales">
      {FLOATING_BUTTONS.map((button) => {
        const Icon = button.icon;
        if (button.type === 'hash') {
          return (
            <button
              key={button.label}
              type="button"
              className="floating-nav__button"
              aria-label={button.label}
              onClick={(event) => handleClick(event, button.hash)}
            >
              <span className="floating-nav__icon" aria-hidden="true">
                <Icon />
              </span>
            </button>
          );
        }
        return (
          <a
            key={button.label}
            href={button.href}
            className="floating-nav__button"
            aria-label={button.label}
            target="_blank"
            rel="noreferrer"
          >
            <span className="floating-nav__icon" aria-hidden="true">
              <Icon />
            </span>
          </a>
        );
      })}
    </div>
  );
}

function MethodIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M6 3h10.5A3.5 3.5 0 0 1 20 6.5V20a1 1 0 0 1-1.52.85L14 18.27l-4.48 2.58A1 1 0 0 1 8 20V5H6z" />
      <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2H15a1 1 0 0 1 0 2H9.5A1.5 1.5 0 0 1 8 2.5z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 2a8 8 0 0 1 6.7 12.4 1 1 0 0 0-.12.8l.8 2.7-2.7-.7a1 1 0 0 0-.78.12A8 8 0 1 1 12 4m-3 3a1 1 0 0 0-.92 1.39c.2.52.7 1.67.78 1.79a1 1 0 0 0 .12.21l.08.1c.24.31.39.5.55.7s.32.36.52.56c.67.66 1.43 1.26 2.26 1.76.65.4 1.22.68 1.72.92a1 1 0 0 0 1.36-.45l.56-1.14a1 1 0 0 0-.23-1.2l-.47-.42a1 1 0 0 0-1.08-.16l-.17.08-.18.1a.4.4 0 0 1-.14 0c-.15-.06-.39-.14-.73-.33a6.1 6.1 0 0 1-1.92-1.58 7 7 0 0 1-.57-.84.37.37 0 0 1 0-.14l.08-.18.06-.16a1 1 0 0 0-.15-1l-.35-.4-.31-.35-.16-.15a1 1 0 0 0-.76-.3z" />
    </svg>
  );
}
