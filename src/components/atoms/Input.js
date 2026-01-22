// @ts-check

/**
 * @typedef {'text'|'email'|'tel'} InputType
 */

/**
 * @param {object} params
 * @param {string} params.id
 * @param {string} params.name
 * @param {string} params.label
 * @param {InputType} params.type
 * @param {boolean} [params.required]
 * @param {string} [params.placeholder]
 * @param {string} [params.autocomplete]
 * @param {string} [params.helpText]
 * @returns {HTMLDivElement}
 */
export function Input({
  id,
  name,
  label,
  type,
  required = false,
  placeholder = '',
  autocomplete = '',
  helpText = '',
}) {
  const wrap = document.createElement('div');
  wrap.className = 'field';

  const lab = document.createElement('label');
  lab.htmlFor = id;
  lab.textContent = label;

  const input = document.createElement('input');
  input.id = id;
  input.name = name;
  input.type = type;
  input.required = required;
  if (placeholder) input.placeholder = placeholder;
  if (autocomplete) input.setAttribute('autocomplete', autocomplete);

  const help = document.createElement('p');
  help.className = 'help';
  help.setAttribute('aria-live', 'polite');
  help.textContent = helpText;

  wrap.append(lab, input, help);
  return wrap;
}
