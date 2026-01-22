// @ts-check

import { HeroSplit } from '../../components/molecules/HeroSplit.js';
import { SitesSection } from '../../components/organisms/SitesSection.js';
import { MethodSection } from '../../components/organisms/MethodSection.js';
import { LeadFormSection } from '../../components/organisms/LeadFormSection.js';

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

  const sedes = SitesSection({
    title: 'Nuestras sedes en Pachuca',
    subtitle:
      'Ubicaciones independientes para garantizar seguridad, privacidad y enfoque terapéutico por sede.',
  });

  const metodo = MethodSection({
    title: 'El Método Minnesota',
    subtitle:
      'Un estándar clínico estructurado, basado en dignidad humana y acompañamiento multidisciplinario.',
  });

  const contacto = LeadFormSection({
    title: 'Contacta de forma confidencial',
    subtitle: 'Selecciona la sede y te contactará un especialista de esa sede.',
  });

  app.append(hero, sedes, metodo, contacto);

  bindThemeHandlers();
  bindSedePrefill();
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

function bindSedePrefill() {
  const sedeLinks = document.querySelectorAll('.js-sede[data-sede]');
  const sedeSelect = /** @type {HTMLSelectElement|null} */ (document.querySelector('#sede'));

  sedeLinks.forEach((el) => {
    el.addEventListener('click', () => {
      const sede = el.getAttribute('data-sede');
      if (!sedeSelect || !sede) return;
      sedeSelect.value = sede;
      // No hacemos scroll automático aún (lo dejamos para cuando definamos UX exacta)
    });
  });
}
