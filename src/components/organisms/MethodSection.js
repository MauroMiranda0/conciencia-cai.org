// @ts-check

import { InfoCard } from '../molecules/InfoCard.js';

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.subtitle
 * @returns {HTMLElement}
 */
export function MethodSection({ title, subtitle }) {
  const section = document.createElement('section');
  section.className = 'section section--alt';
  section.id = 'metodo';
  section.setAttribute('aria-label', 'Método Minnesota');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.className = 'h2';
  h2.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = subtitle;

  const grid = document.createElement('div');
  grid.className = 'grid-3';

  grid.append(
    InfoCard({
      title: 'Dignidad y contención',
      text: 'Tratamiento centrado en la persona, con seguridad emocional desde el primer contacto.',
    }),
    InfoCard({
      title: 'Equipo multidisciplinario',
      text: 'Médicos, psicólogos y terapeutas en un proceso clínico supervisado.',
    }),
    InfoCard({
      title: '12 Pasos + ciencia médica',
      text: 'Integración del programa de 12 pasos con estructura terapéutica profesional.',
    })
  );

  container.append(h2, p, grid);
  section.append(container);
  return section;
}
