// @ts-check

import { SiteCard } from '../molecules/SiteCard.js';

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.subtitle
 * @returns {HTMLElement}
 */
export function SitesSection({ title, subtitle }) {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'sedes';
  section.setAttribute('aria-label', 'Nuestras sedes en Pachuca');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.className = 'h2';
  h2.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = subtitle;

  const grid = document.createElement('div');
  grid.className = 'grid-2';

  grid.append(
    SiteCard({
      sede: 'hombres',
      title: 'Sede Hombres',
      description: 'Espacio de estructura, disciplina y reconstrucción personal.',
      locationText: 'Ubicación: (pendiente zona/colonia)',
    }),
    SiteCard({
      sede: 'mujeres',
      title: 'Sede Mujeres',
      description: 'Espacio de contención, sanación emocional y acompañamiento.',
      locationText: 'Ubicación: (pendiente zona/colonia)',
    })
  );

  container.append(h2, p, grid);
  section.append(container);
  return section;
}
