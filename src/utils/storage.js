// @ts-check

const KEY = 'ccai_consent_v1';

/**
 * @typedef {'unknown'|'accepted'|'rejected'|'custom'} ConsentState
 * @typedef {{state: ConsentState, analytics: boolean, marketing: boolean}} Consent
 */

const STORAGE = (typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined')
  ? globalThis.localStorage
  : null;

/** @returns {Consent} */
export function getConsent() {
  try {
    const raw = STORAGE ? STORAGE.getItem(KEY) : null;
    if (!raw) return { state: 'unknown', analytics: false, marketing: false };
    const parsed = /** @type {Consent} */ (JSON.parse(raw));
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid');
    return {
      state: parsed.state ?? 'unknown',
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return { state: 'unknown', analytics: false, marketing: false };
  }
}

/** @param {Consent} consent */
export function setConsent(consent) {
  if (!STORAGE) return;
  STORAGE.setItem(KEY, JSON.stringify(consent));
}
