// @ts-check

import { Button } from '../atoms/Button.js';
import { TrustBar } from './TrustBar.js';

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.subtitle
 * @param {{label:string, sede:'hombres'|'mujeres', href?:string}[]} params.ctas
 * @param {string[]} params.trustItems
 * @returns {HTMLElement}
 */
export function HeroSplit({ title, subtitle, ctas, trustItems }) {
  const section = document.createElement('section');
  section.className = 'section hero';
  section.setAttribute('aria-label', 'Inicio');

  const container = document.createElement('div');
  container.className = 'container hero-inner';

  const copy = document.createElement('div');
  copy.className = 'hero-copy stack';

  const h1 = document.createElement('h1');
  h1.className = 'h1';
  h1.textContent = title;

  const p = document.createElement('p');
  p.className = 'p muted';
  p.textContent = subtitle;

  const ctaRow = document.createElement('div');
  ctaRow.className = 'cta-row';
  ctaRow.setAttribute('role', 'group');
  ctaRow.setAttribute('aria-label', 'Elegir sede');

  ctas.forEach((c) => {
    const btn = Button({
      label: c.label,
      href: c.href ?? '#contacto',
      variant: 'primary',
      tone: 'neutral',
      ariaLabel: c.label,
      className: 'js-sede',
    });
    btn.setAttribute('data-sede', c.sede);
    ctaRow.append(btn);
  });

  const trustbar = TrustBar({ items: trustItems });

  copy.append(h1, p, ctaRow, trustbar);

  const visual = document.createElement('div');
  visual.className = 'hero-visual';
  visual.setAttribute('aria-hidden', 'true');

  const split = document.createElement('div');
  split.className = 'hero-split';

  const men = document.createElement('div');
  men.className = 'hero-pane hero-pane--men';

  const women = document.createElement('div');
  women.className = 'hero-pane hero-pane--women';

  split.append(men, women);
  visual.append(split);

  container.append(copy, visual);
  section.append(container);
  return section;
}
