// @ts-check

/**
 * @typedef {string|number|boolean|null|undefined|{ toString(): string }} Stringable
 */

/**
 * Normalize input to a trimmed string.
 * @param {Stringable} str
 * @returns {string}
 */
export function normalize(str) {
    return (str ?? '').toString().trim();
}

/**
 * @typedef {(str: Stringable) => string} StringTransformer
 * @typedef {(input: string) => boolean} Validator
 */

/**
 * Strip HTML tags from input.
 * @param {Stringable} str
 * @returns {string}
 */
export function stripTags(str) {
    return normalize(str).replace(/<[^>]*>/g, '');
}

/**
 * @interface UrlBlocker
 * @property {(str: Stringable) => string} block
 */

/**
 * @callback BlockUrlsFn
 * @param {Stringable} str
 * @returns {string}
 */

/**
 * Block URLs from input string.
 * @param {Stringable} str
 * @returns {string}
 */
export function blockUrls(str) {
    const s = normalize(str);
    if (/(https?:\/\/|www\.|wa\.me\/|bit\.ly\/)/i.test(s)) return '';
    return s;
}

/**
 * @typedef {(str: Stringable, maxLen?: number) => string} SafeTextFn
 */

/**
 * Clean text from HTML and URLs, then truncate.
 * @param {Stringable} str
 * @param {number} [maxLen=120]
 * @returns {string}
 */
export function safeText(str, maxLen = 120) {
    const s = blockUrls(stripTags(str));
    return s.slice(0, maxLen);
}

/**
 * @callback DigitsOnlyFn
 * @param {Stringable} str
 * @param {number} [maxLen]
 * @returns {string}
 */

/**
 * @interface DigitFilter
 * @property {DigitsOnlyFn} digitsOnly
 */
/**
 * Extract digits from input and truncate to maxLen.
 * @param {Stringable} str
 * @param {number} [maxLen=10]
 * @returns {string}
 */
export function digitsOnly(str, maxLen = 10) {
    return normalize(str).replace(/\D/g, '').slice(0, maxLen);
}

/**
 * @param {Stringable} phone10
 * @returns {boolean}
 */
export function isValidMXPhone(phone10) {
  const s = normalize(phone10);
  return /^[0-9]{10}$/.test(s);
}

/**
 * @param {Stringable} name
 * @returns {boolean}
 */
export function isValidName(name) {
  const s = normalize(name);
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,60}$/.test(s);
}

/**
 * @param {Stringable} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const s = normalize(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}
