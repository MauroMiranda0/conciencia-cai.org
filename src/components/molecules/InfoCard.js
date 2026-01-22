// @ts-check

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.text
 * @returns {HTMLElement}
 */
export function InfoCard({ title, text }) {
  const card = document.createElement('div');
  card.className = 'card card--info';

  const h3 = document.createElement('h3');
  h3.className = 'h3';
  h3.textContent = title;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = text;

  card.append(h3, p);
  return card;
}
