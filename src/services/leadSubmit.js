// @ts-check

import { safeText, digitsOnly, isValidEmail, isValidName, isValidMXPhone } from '../security/security.js';

/**
 * @typedef {'mujeres'|'hombres'} Sede
 * @typedef {{sede:Sede, nombre:string, telefono:string, email:string, mensaje:string}} LeadPayload
 */

/**
 * Construye payload validado/sanitizado. Devuelve null si es inválido.
 * @param {FormData} fd
 * @returns {LeadPayload|null}
 */
export function buildPayload(fd) {
  const sede = /** @type {Sede|string} */ (safeText(fd.get('sede'), 20));
  const nombre = safeText(fd.get('nombre'), 60);
  const telefono = digitsOnly(fd.get('telefono'), 10);
  const email = safeText(fd.get('email'), 120);
  const mensaje = safeText(fd.get('mensaje'), 500);

  if (!['mujeres', 'hombres'].includes(sede)) return null;
  if (!isValidName(nombre)) return null;
  if (!isValidMXPhone(telefono)) return null;
  if (!isValidEmail(email)) return null;

  return /** @type {LeadPayload} */ ({ sede, nombre, telefono, email, mensaje });
}

/**
 * Envía al CRM si endpoint es HTTPS. Si no, devuelve false sin romper UX.
 * @param {string} endpointUrl
 * @param {LeadPayload} payload
 * @returns {Promise<boolean>}
 */
export async function submitLead(endpointUrl, payload) {
  if (!/^https:\/\//i.test(endpointUrl)) return false;

  try {
    const res = await fetch(endpointUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'error',
      referrerPolicy: 'strict-origin-when-cross-origin',
      mode: 'cors',
      credentials: 'omit',
    });

    return res.ok;
  } catch {
    return false;
  }
}
