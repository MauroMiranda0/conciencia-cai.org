const CONTACT_ENDPOINT = '/api/contact';

/**
 * Envía los datos del formulario a un endpoint interno para evitar exponer PII en consultas externas.
 * @param {{name: string, phone: string, email: string, sede: string, message: string}} payload
 * @param {AbortSignal} [signal]
 */
export async function submitContactForm(payload, signal) {
  if (typeof fetch === 'undefined') {
    throw new Error('Fetch API no disponible en este entorno.');
  }
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    signal,
    credentials: 'same-origin',
  });
  if (!response.ok) {
    throw new Error('El endpoint seguro rechazó la solicitud.');
  }
  const contentType = response.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

export { CONTACT_ENDPOINT };
