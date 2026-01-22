// @ts-check

const methodIconUrl = new globalThis.URL('../../assets/icons/method.svg', import.meta.url).href;

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.text
 * @returns {HTMLElement}
 */
export function InfoCard({ title, text }) {
  const card = document.createElement('div');
  card.className = 'card card--info';

  const icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = methodIconUrl;
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');

  const h3 = document.createElement('h3');
  h3.className = 'h3';
  h3.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = text;

  card.append(icon, h3, p);
  return card;
}
