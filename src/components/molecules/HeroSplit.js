// @ts-check

import { Button } from '../atoms/Button.js';
import { TrustBar } from './TrustBar.js';

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.subtitle
 * @param {{label:string, sede:'hombres'|'mujeres'}[]} params.ctas
 * @param {string[]} params.trustItems
 * @returns {HTMLElement}
 */
export function HeroSplit({ title, subtitle, ctas, trustItems }) {
  const section = document.createElement('section');
  section.className = 'section hero';
  section.setAttribute('aria-label', 'Inicio');

  const container = document.createElement('div');
  container.className = 'container';

  const h1 = document.createElement('h1');
  h1.className = 'h1';
  h1.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = subtitle;

  const ctaRow = document.createElement('div');
  ctaRow.className = 'cta-row';
  ctaRow.setAttribute('role', 'group');
  ctaRow.setAttribute('aria-label', 'Elegir sede');

  ctas.forEach((c) => {
    const btn = Button({
      label: c.label,
      href: '#',
      variant: 'primary',
      tone: 'neutral',
      ariaLabel: c.label,
      className: 'js-sede',
    });
    btn.setAttribute('data-sede', c.sede);
    ctaRow.append(btn);
  });

  const trustbar = TrustBar({ items: trustItems });

  container.append(h1, p, ctaRow, trustbar);
  section.append(container);

  return section;
}
