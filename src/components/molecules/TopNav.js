// @ts-check

import { Button } from '../atoms/Button.js';

/**
 * @returns {HTMLElement}
 */
export function TopNav() {
  const header = document.createElement('header');
  header.className = 'topbar';
  header.setAttribute('role', 'banner');

  const container = document.createElement('div');
  container.className = 'container topbar-inner';

  const brand = document.createElement('div');
  brand.className = 'brand';

  const name = document.createElement('p');
  name.className = 'brand-name';
  name.textContent = 'Clínica de Rehabilitación';

  const location = document.createElement('p');
  location.className = 'brand-location';
  location.textContent = 'Pachuca, Hidalgo';

  brand.append(name, location);

  const nav = document.createElement('nav');
  nav.className = 'topnav';
  nav.setAttribute('aria-label', 'Navegación principal');

  nav.append(
    navLink('#sedes', 'Sedes'),
    navLink('#metodo', 'Método'),
    navLink('#contacto', 'Contacto')
  );

  const cta = Button({
    label: 'Contactar',
    href: '#contacto',
    variant: 'primary',
    tone: 'neutral',
    ariaLabel: 'Ir a contacto',
  });

  container.append(brand, nav, cta);
  header.append(container);
  return header;
}

/** @param {string} href @param {string} label */
function navLink(href, label) {
  const a = document.createElement('a');
  a.className = 'topnav-link';
  a.href = href;
  a.textContent = label;
  return a;
}
