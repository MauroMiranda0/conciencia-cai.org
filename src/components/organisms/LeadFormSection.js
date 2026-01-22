// @ts-check

import { Button } from '../atoms/Button.js';
import { Input } from '../atoms/Input.js';

/**
 * Sprint 2: solo estructura UI del formulario.
 * - Sin validaciones
 * - Sin honeypot/timing/turnstile
 * - Sin submit real
 *
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.subtitle
 * @returns {HTMLElement}
 */
export function LeadFormSection({ title, subtitle }) {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'contacto';
  section.setAttribute('aria-label', 'Contacto');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.className = 'h2';
  h2.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = subtitle;

  const card = document.createElement('div');
  card.className = 'card card--form';

  const form = document.createElement('form');
  form.id = 'leadForm';
  form.noValidate = true;

  const grid = document.createElement('div');
  grid.className = 'grid-2';

  grid.append(
    Input({
      id: 'nombre',
      name: 'nombre',
      label: 'Nombre',
      type: 'text',
      required: true,
      autocomplete: 'name',
      helpText: '',
    }),
    Input({
      id: 'telefono',
      name: 'telefono',
      label: 'Teléfono (10 dígitos)',
      type: 'tel',
      required: true,
      autocomplete: 'tel',
      helpText: '',
    }),
    Input({
      id: 'email',
      name: 'email',
      label: 'Correo',
      type: 'email',
      required: true,
      autocomplete: 'email',
      helpText: '',
    }),
    buildSedeSelect()
  );

  const messageField = document.createElement('div');
  messageField.className = 'field';

  const msgLabel = document.createElement('label');
  msgLabel.htmlFor = 'mensaje';
  msgLabel.textContent = 'Mensaje (opcional)';

  const textarea = document.createElement('textarea');
  textarea.id = 'mensaje';
  textarea.name = 'mensaje';
  textarea.rows = 4;

  const msgHelp = document.createElement('p');
  msgHelp.className = 'help';
  msgHelp.setAttribute('aria-live', 'polite');
  msgHelp.textContent = '';

  messageField.append(msgLabel, textarea, msgHelp);

  const footer = document.createElement('div');
  footer.className = 'form-footer';

  const submit = Button({
    label: 'Enviar',
    type: 'submit',
    variant: 'primary',
    tone: 'neutral',
    ariaLabel: 'Enviar formulario',
  });

  const legal = document.createElement('p');
  legal.className = 'muted';
  legal.innerHTML = 'Al enviar aceptas nuestro <a href="#" id="openPrivacy">Aviso de Privacidad</a>.';

  footer.append(submit, legal);

  const status = document.createElement('div');
  status.className = 'form-status';
  status.id = 'formStatus';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  form.append(grid, messageField, footer, status);
  card.append(form);

  container.append(h2, p, card);
  section.append(container);

  // Bloqueamos submit real en Sprint 2 (no hay lógica aún)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Gracias. Un especialista se comunicará contigo de forma confidencial.';
  });

  return section;
}

/** @returns {HTMLDivElement} */
function buildSedeSelect() {
  const wrap = document.createElement('div');
  wrap.className = 'field';

  const label = document.createElement('label');
  label.htmlFor = 'sede';
  label.textContent = '¿A qué sede deseas contactar?';

  const select = document.createElement('select');
  select.id = 'sede';
  select.name = 'sede';
  select.required = true;

  const opt0 = document.createElement('option');
  opt0.value = '';
  opt0.selected = true;
  opt0.textContent = 'Selecciona una opción';

  const optWomen = document.createElement('option');
  optWomen.value = 'mujeres';
  optWomen.textContent = 'Sede Mujeres';

  const optMen = document.createElement('option');
  optMen.value = 'hombres';
  optMen.textContent = 'Sede Hombres';

  select.append(opt0, optWomen, optMen);

  const help = document.createElement('p');
  help.className = 'help';
  help.setAttribute('aria-live', 'polite');
  help.textContent = '';

  wrap.append(label, select, help);
  return wrap;
}
