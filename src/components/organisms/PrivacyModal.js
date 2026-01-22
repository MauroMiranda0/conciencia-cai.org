// @ts-check

/**
 * @returns {HTMLDialogElement}
 */
export function PrivacyModal() {
  const dlg = document.createElement('dialog');
  dlg.className = 'modal';
  dlg.id = 'privacyModal';
  dlg.setAttribute('aria-label', 'Aviso de Privacidad');

  const inner = document.createElement('div');
  inner.className = 'modal__inner';

  const h2 = document.createElement('h2');
  h2.className = 'h2';
  h2.textContent = 'Aviso de Privacidad';

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent =
    'Contenido pendiente. Sustituir por el texto legal autorizado por el cliente.';

  const close = document.createElement('button');
  close.className = 'btn btn--secondary btn--neutral';
  close.type = 'button';
  close.textContent = 'Cerrar';

  close.addEventListener('click', () => dlg.close());

  inner.append(h2, p, close);
  dlg.append(inner);

  return dlg;
}
