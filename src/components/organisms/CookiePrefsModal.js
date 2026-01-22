// @ts-check

import { getConsent, setConsent } from '../../utils/storage.js';

/**
 * @returns {HTMLDialogElement}
 */
export function CookiePrefsModal() {
  const dlg = document.createElement('dialog');
  dlg.className = 'modal';
  dlg.id = 'cookiePrefsModal';
  dlg.setAttribute('aria-label', 'Preferencias de cookies');

  const inner = document.createElement('div');
  inner.className = 'modal-inner';

  const h2 = document.createElement('h2');
  h2.className = 'h2';
  h2.textContent = 'Preferencias de cookies';

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent =
    'Puedes aceptar cookies analíticas y de marketing. Las esenciales están siempre activas.';

  const form = document.createElement('form');
  form.className = 'prefs';

  const current = getConsent();

  const analytics = checkbox('analytics', 'Analíticas', current.analytics);
  const marketing = checkbox('marketing', 'Marketing', current.marketing);

  const actions = document.createElement('div');
  actions.className = 'prefs-actions';

  const save = document.createElement('button');
  save.className = 'btn btn--primary btn--neutral';
  save.type = 'submit';
  save.textContent = 'Guardar';

  const cancel = document.createElement('button');
  cancel.className = 'btn btn--secondary btn--neutral';
  cancel.type = 'button';
  cancel.textContent = 'Cancelar';

  cancel.addEventListener('click', () => dlg.close());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = /** @type {HTMLInputElement} */ (form.querySelector('input[name="analytics"]'));
    const m = /** @type {HTMLInputElement} */ (form.querySelector('input[name="marketing"]'));
    setConsent({ state: 'custom', analytics: Boolean(a?.checked), marketing: Boolean(m?.checked) });
    dlg.close();
  });

  actions.append(save, cancel);
  form.append(analytics, marketing, actions);

  inner.append(h2, p, form);
  dlg.append(inner);
  return dlg;
}

/** @param {string} name @param {string} labelText @param {boolean} checked */
function checkbox(name, labelText, checked) {
  const row = document.createElement('label');
  row.className = 'prefs-row';

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = name;
  input.checked = checked;

  const span = document.createElement('span');
  span.textContent = labelText;

  row.append(input, span);
  return row;
}
