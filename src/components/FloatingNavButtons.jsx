import '../styles/components/FloatingNavButtons.scss';

const FLOATING_BUTTONS = [
  { hash: '#metodo', label: 'Modelo Minnesota' },
  { hash: '#contacto', label: 'Agenda tu valoración' },
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
   * @param {string} hash
   */
  const handleClick = (event, hash) => {
    event.preventDefault();
    onNavigate?.(hash);
  };

  return (
    <div className="floating-nav" role="navigation" aria-label="Accesos principales">
      {FLOATING_BUTTONS.map((button) => (
        <button
          key={button.hash}
          type="button"
          className="floating-nav__button"
          onClick={(event) => handleClick(event, button.hash)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
