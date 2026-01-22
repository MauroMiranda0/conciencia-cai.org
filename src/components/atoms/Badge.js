// @ts-check

/**
 * @param {object} params
 * @param {string} params.text
 * @returns {HTMLDivElement}
 */
export function Badge({ text }) {
  const el = document.createElement('div');
  el.className = 'badge';

  const dot = document.createElement('span');
  dot.className = 'badge-dot';
  dot.setAttribute('aria-hidden', 'true');

  const t = document.createElement('span');
  t.className = 'badge-text';
  t.textContent = text;

  el.append(dot, t);
  return el;
}
