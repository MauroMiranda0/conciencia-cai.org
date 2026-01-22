// @ts-check

import { Badge } from '../atoms/Badge.js';

/**
 * @param {object} params
 * @param {string[]} params.items
 * @returns {HTMLDivElement}
 */
export function TrustBar({ items }) {
  const wrap = document.createElement('div');
  wrap.className = 'trustbar';
  wrap.setAttribute('aria-label', 'Señales de confianza');

  items.forEach((text) => {
    wrap.append(Badge({ text }));
  });

  return wrap;
}
