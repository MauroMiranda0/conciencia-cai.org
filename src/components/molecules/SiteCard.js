// @ts-check

import { Button } from '../atoms/Button.js';

/**
 * @typedef {'hombres'|'mujeres'} Sede
 */

/**
 * @param {object} params
 * @param {Sede} params.sede
 * @param {string} params.title
 * @param {string} params.description
 * @param {string} params.locationText
 * @returns {HTMLElement}
 */
export function SiteCard({ sede, title, description, locationText }) {
  const card = document.createElement('article');
  card.className = `card card--site card--${sede}`;
  card.setAttribute('aria-label', title);

  const h3 = document.createElement('h3');
  h3.className = 'h3';
  h3.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = description;

  const loc = document.createElement('p');
  loc.className = 'muted';
  loc.textContent = locationText;

  const cta = Button({
    label: 'Contactar esta sede',
    href: '#',
    variant: 'secondary',
    tone: 'neutral',
    ariaLabel: `Contactar ${title}`,
    className: 'js-sede',
  });
  cta.setAttribute('data-sede', sede);

  card.append(h3, p, loc, cta);
  return card;
}
