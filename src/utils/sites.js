const MEN_KEYWORDS = [
  'men',
  'masculina',
  'varonil',
  'hombres',
  'sede varonil',
  'sede masculina',
];

const WOMEN_KEYWORDS = [
  'women',
  'femenina',
  'femenil',
  'mujeres',
  'sede femenil',
  'sede femenina',
];

/**
 * Retorna 'men', 'women' o null según el tono/sede proporcionado.
 * @param {string} [tone]
 * @param {string} [sede]
 * @returns {'men' | 'women' | null}
 */
export function inferSiteGender(tone, sede) {
  const normalizedTone = (tone ?? '').trim().toLowerCase();
  const normalizedSede = (sede ?? '').trim().toLowerCase();
  if (MEN_KEYWORDS.includes(normalizedTone) || MEN_KEYWORDS.includes(normalizedSede)) return 'men';
  if (WOMEN_KEYWORDS.includes(normalizedTone) || WOMEN_KEYWORDS.includes(normalizedSede)) return 'women';
  return null;
}

/**
 * Normaliza el valor de sede a 'hombres' o 'mujeres' cuando es posible.
 * @param {string} [sede]
 * @returns {string}
 */
export function normalizeSedeValue(sede) {
  const normalized = (sede ?? '').trim().toLowerCase();
  if (!normalized) return '';
  if (MEN_KEYWORDS.includes(normalized)) return 'hombres';
  if (WOMEN_KEYWORDS.includes(normalized)) return 'mujeres';
  return normalized;
}
