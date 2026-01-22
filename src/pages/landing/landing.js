// @ts-check

import { HeroSplit } from '../../components/molecules/HeroSplit.js';

export function renderLanding() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.textContent = '';

  const hero = HeroSplit({
    title: 'Recuperación integral en Pachuca',
    subtitle: 'Dos sedes independientes, atención confidencial y acompañamiento profesional.',
    ctas: [
      { label: 'Sede Hombres', sede: 'hombres' },
      { label: 'Sede Mujeres', sede: 'mujeres' },
    ],
    trustItems: [
      'Atención confidencial y humana',
      'Proceso clínico supervisado',
      'Acompañamiento profesional',
    ],
  });

  app.append(hero);

  bindThemeHandlers();
}

function bindThemeHandlers() {
  const sedeLinks = document.querySelectorAll('.js-sede[data-sede]');
  sedeLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const sede = el.getAttribute('data-sede');
      if (!sede) return;

      document.body.classList.remove('theme-neutral', 'theme-men', 'theme-women');
      if (sede === 'hombres') document.body.classList.add('theme-men');
      else if (sede === 'mujeres') document.body.classList.add('theme-women');
      else document.body.classList.add('theme-neutral');
    });
  });
}
