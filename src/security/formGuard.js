// @ts-check

/**
 * Añade controles anti-spam:
 * - Honeypot (campo invisible)
 * - Timestamp mínimo (bloqueo si submit demasiado rápido)
 *
 * @param {HTMLFormElement} formEl
 */
export function initFormGuards(formEl) {
  // Timestamp
  const ts = /** @type {HTMLInputElement|null} */ (
    formEl.querySelector('input[name="ts"]')
  );
  if (ts) ts.value = Date.now().toString();

  formEl.addEventListener('submit', (e) => {
    const hp = /** @type {HTMLInputElement|null} */ (
      formEl.querySelector('input[name="empresa"]')
    );
    const sentTs = Number((ts?.value || 0));
    const elapsed = Date.now() - sentTs;

    // Bloqueo silencioso (no revelar lógica)
    if (hp && hp.value.trim() !== '') {
      e.preventDefault();
      return;
    }
    if (elapsed > 0 && elapsed < 2500) {
      e.preventDefault();
      return;
    }
  });
}
