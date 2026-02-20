const WHATSAPP_NUMBER = '5217712063098';
const DEFAULT_WHATSAPP_TEXT = 'Hola, quiero agendar una valoración';

/**
 * @param {string} [message]
 */
export function buildWhatsappUrl(message = DEFAULT_WHATSAPP_TEXT) {
  const text = (message || '').trim();
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${query}`;
}

export { DEFAULT_WHATSAPP_TEXT, WHATSAPP_NUMBER };
