// @ts-check

import { Button } from '../atoms/Button.js';
import { Input } from '../atoms/Input.js';
import { initFormGuards } from '../../security/formGuard.js';
import { buildPayload, submitLead } from '../../services/leadSubmit.js';
/** @type {{INTEGRATIONS?: {crmEndpointHttps?: string}}} */
const CONFIG = {};

/**
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

  // Honeypot + timestamp (anti-spam)
  form.append(buildHoneypot());
  form.append(buildTimestamp());

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

  const messageField = buildMessageField();

  const footer = document.createElement('div');
  footer.className = 'form-footer';

  const submitBtn = Button({
    label: 'Enviar',
    type: 'submit',
    variant: 'primary',
    tone: 'neutral',
    ariaLabel: 'Enviar formulario',
  });

  const legal = document.createElement('p');
  legal.className = 'muted';
  legal.innerHTML = 'Al enviar aceptas nuestro <a href="#" id="openPrivacy">Aviso de Privacidad</a>.';

  footer.append(submitBtn, legal);

  const status = document.createElement('div');
  status.className = 'form-status';
  status.id = 'formStatus';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  form.append(grid, messageField, footer, status);
  card.append(form);

  container.append(h2, p, card);
  section.append(container);

  // Activar guards anti-spam
  initFormGuards(form);

  // Submit seguro
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    clearFieldErrors(form);
    status.textContent = '';

    const fd = new (globalThis.FormData)(form);
    const payload = buildPayload(fd);

    if (!payload) {
      // Mensajes neutros, sin detallar qué falló exactamente del lado “sistema”
      setFieldError(form, 'nombre', 'Revisa este campo.');
      setFieldError(form, 'telefono', 'Revisa este campo.');
      setFieldError(form, 'email', 'Revisa este campo.');
      setFieldError(form, 'sede', 'Selecciona una opción.');
      status.textContent = 'Por favor revisa los campos marcados.';
      return;
    }

    // Intento de envío a CRM solo si existe endpoint HTTPS (sin suponer)
    const endpoint = CONFIG?.INTEGRATIONS?.crmEndpointHttps ?? '';
    const ok = await submitLead(endpoint, payload);

    // Respuesta uniforme (no revelar integración)
    status.textContent =
      'Gracias. Un especialista de la sede seleccionada se comunicará contigo de forma confidencial.';

    // No “reseteamos” sede seleccionada automáticamente
    if (ok) form.reset();
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

/** @returns {HTMLDivElement} */
function buildMessageField() {
  const wrap = document.createElement('div');
  wrap.className = 'field';

  const label = document.createElement('label');
  label.htmlFor = 'mensaje';
  label.textContent = 'Mensaje (opcional)';

  const textarea = document.createElement('textarea');
  textarea.id = 'mensaje';
  textarea.name = 'mensaje';
  textarea.rows = 4;

  const help = document.createElement('p');
  help.className = 'help';
  help.setAttribute('aria-live', 'polite');
  help.textContent = '';

  wrap.append(label, textarea, help);
  return wrap;
}

function buildHoneypot() {
  const hp = document.createElement('div');
  hp.className = 'hp';
  hp.setAttribute('aria-hidden', 'true');

  const label = document.createElement('label');
  label.htmlFor = 'empresa';
  label.textContent = 'Empresa';

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'empresa';
  input.name = 'empresa';
  input.autocomplete = 'off';
  input.tabIndex = -1;

  hp.append(label, input);
  return hp;
}

function buildTimestamp() {
  const ts = document.createElement('input');
  ts.type = 'hidden';
  ts.id = 'ts';
  ts.name = 'ts';
  return ts;
}

/** @param {HTMLFormElement} form */
function clearFieldErrors(form) {
  const fields = form.querySelectorAll('.field');
  fields.forEach((f) => f.classList.remove('field--error'));

  const helps = form.querySelectorAll('.help');
  helps.forEach((h) => (h.textContent = ''));
}


/** @param {HTMLFormElement} form @param {string} fieldName @param {string} msg */
function setFieldError(form, fieldName, msg) {
  const field = form.querySelector(`[name="${fieldName}"]`);
  const wrap = field?.closest('.field');
  const help = wrap?.querySelector('.help');

  if (wrap) wrap.classList.add('field--error');
  if (help) help.textContent = msg;
}
