// @ts-check

/**
 * Scroll suave hacia un id considerando offset (header sticky).
 * @param {string} hash - Ej: "#contacto"
 * @param {number} offsetPx
 */
export function scrollToHash(hash, offsetPx = 80) {
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offsetPx;
  window.scrollTo({ top, behavior: 'smooth' });
}
