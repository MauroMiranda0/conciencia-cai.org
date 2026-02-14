import '../styles/components/FloatingNavButtons.scss';

const WHATSAPP_URL = 'https://wa.me/5217711234567?text=Hola%2C%20quiero%20agendar%20una%20valoraci%C3%B3n';
const MEN_FLOATING_BUTTONS = [
  { hash: '#inicio', label: 'Ir al inicio', type: 'hash', icon: HomeIcon },
  { hash: '#sede-femenil', label: 'Ver sede femenil', type: 'hash', icon: FemaleIcon },
];

const BASE_FLOATING_BUTTONS = [
  { hash: '#metodo', label: 'Modelo Minnesota', type: 'hash', icon: MethodIcon },
  { href: WHATSAPP_URL, label: 'Agenda tu valoración', type: 'external', icon: WhatsappIcon },
];

/**
 * @typedef {Object} FloatingNavButtonsProps
 * @property {(hash?: string) => void} [onNavigate]
 * @property {boolean} [isHidden]
 * @property {'home' | 'men' | 'women'} [activeView]
 */

/**
 * @param {FloatingNavButtonsProps} props
 */
export default function FloatingNavButtons({ onNavigate, isHidden, activeView }) {
  if (isHidden) {
    return null;
  }
  /**
   * @param {import('react').MouseEvent<HTMLButtonElement>} event
   * @param {string|undefined} hash
   */
  const handleClick = (event, hash) => {
    event.preventDefault();
    onNavigate?.(hash);
  };

  const buttons =
    activeView === 'men' ? [...MEN_FLOATING_BUTTONS, ...BASE_FLOATING_BUTTONS] : BASE_FLOATING_BUTTONS;

  return (
    <div className="floating-nav" role="navigation" aria-label="Accesos principales">
      {buttons.map((button) => {
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
      <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42L11 12.59V4a1 1 0 0 1 1-1z" />
      <path d="M6 15a1 1 0 0 0-1 1v3.5A2.5 2.5 0 0 0 7.5 22h9a2.5 2.5 0 0 0 2.5-2.5V16a1 1 0 0 0-2 0v3.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V16a1 1 0 0 0-1-1z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M11.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4L18 11.8V19a2 2 0 0 1-2 2h-2v-5h-4v5H8a2 2 0 0 1-2-2v-7.2l-.3.3a1 1 0 1 1-1.4-1.4l7-7z" />
    </svg>
  );
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M12 2a6 6 0 0 0-1 11.9V16H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-2.1A6 6 0 0 0 12 2m0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
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
