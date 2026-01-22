// @ts-check

/**
 * @typedef {'button'|'submit'|'reset'} ButtonType
 * @typedef {'primary'|'secondary'|'ghost'} ButtonVariant
 * @typedef {'neutral'|'men'|'women'} ButtonTone
 */

/**
 * @param {object} params
 * @param {string} params.label
 * @param {ButtonType} [params.type]
 * @param {ButtonVariant} [params.variant]
 * @param {ButtonTone} [params.tone]
 * @param {string} [params.href] - Si existe, renderiza <a>, si no <button>
 * @param {string} [params.ariaLabel]
 * @param {string} [params.className]
 * @returns {HTMLButtonElement|HTMLAnchorElement}
 */
export function Button({
  label,
  type = 'button',
  variant = 'primary',
  tone = 'neutral',
  href,
  ariaLabel,
  className = '',
}) {
  const base = `btn btn--${variant} btn--${tone} ${className}`.trim();

  if (href) {
    const a = document.createElement('a');
    a.className = base;
    a.href = href;
    a.textContent = label;
    if (ariaLabel) a.setAttribute('aria-label', ariaLabel);
    return a;
  }

  const btn = document.createElement('button');
  btn.className = base;
  btn.type = type;
  btn.textContent = label;
  if (ariaLabel) btn.setAttribute('aria-label', ariaLabel);
  return btn;
}
