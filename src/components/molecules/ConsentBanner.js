// @ts-check

import { Button } from '../atoms/Button.js';
import { getConsent, setConsent } from '../../utils/storage.js';

/**
 * @param {object} params
 * @param {() => void} params.onOpenPrefs
 * @returns {HTMLElement|null}
 */
export function ConsentBanner({ onOpenPrefs }) {
  const current = getConsent();
  if (current.state !== 'unknown') return null;

  const wrap = document.createElement('section');
  wrap.className = 'consent';
  wrap.setAttribute('aria-label', 'Consentimiento de cookies');

  const container = document.createElement('div');
  container.className = 'container consent__inner';

  const text = document.createElement('p');
  text.className = 'consent__text';
  text.textContent =
    'Usamos cookies esenciales para el funcionamiento. Puedes aceptar o configurar preferencias.';

  const actions = document.createElement('div');
  actions.className = 'consent__actions';

  const accept = Button({
    label: 'Aceptar',
    variant: 'primary',
    tone: 'neutral',
    type: 'button',
    ariaLabel: 'Aceptar cookies',
  });

  const reject = Button({
    label: 'Rechazar',
    variant: 'secondary',
    tone: 'neutral',
    type: 'button',
    ariaLabel: 'Rechazar cookies',
  });

  const prefs = Button({
    label: 'Configurar',
    variant: 'ghost',
    tone: 'neutral',
    type: 'button',
    ariaLabel: 'Configurar preferencias de cookies',
  });

  accept.addEventListener('click', () => {
    setConsent({ state: 'accepted', analytics: true, marketing: true });
    wrap.remove();
  });

  reject.addEventListener('click', () => {
    setConsent({ state: 'rejected', analytics: false, marketing: false });
    wrap.remove();
  });

  prefs.addEventListener('click', () => {
    onOpenPrefs();
  });

  actions.append(accept, reject, prefs);
  container.append(text, actions);
  wrap.append(container);

  return wrap;
}
