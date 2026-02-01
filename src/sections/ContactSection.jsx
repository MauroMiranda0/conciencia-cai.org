import { useEffect, useMemo, useState } from 'react';
import { normalizeSedeValue } from '../utils/sites.js';
import '../styles/sections/ContactSection.scss';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  sede: '',
  message: '',
};

const CONTACT_MICRO_TONES = {
  care: {
    label: 'El Cuidador',
    title: 'Te acompañamos desde el primer mensaje',
    detail: 'Coordinación clínica recibe tu solicitud en tiempo real y responde con contención inmediata.',
  },
  sage: {
    label: 'El Sabio',
    title: 'Te guiamos con procesos claros',
    detail: 'Explicamos requisitos, tiempos y pasos del Modelo Minnesota antes de avanzar.',
  },
};

/**
 * @typedef {Object} ContactSectionProps
 * @property {string} [selectedSede]
 * @property {(sede: string) => void} [onSelectSede]
 * @property {() => void} [onOpenPrivacy]
 * @property {string} [id]
 * @property {string} [eyebrow]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [lockedSedeValue]
 * @property {string} [successMessage]
 * @property {string} [channelNote]
 * @property {import('react').ReactNode} [asideContent]
 */

/**
 * @param {ContactSectionProps} props
 */
export default function ContactSection({
  selectedSede,
  onSelectSede,
  onOpenPrivacy,
  id = 'contacto',
  eyebrow = 'Dar el primer paso',
  title = 'Es parte del proceso',
  description = 'Si tú o un familiar están atravesando una situación relacionada con el consumo de sustancias, no están solos. Estamos aquí para escucharles, orientarles y acompañarles en el inicio de un camino real hacia la recuperación.',
  lockedSedeValue,
  successMessage = 'Gracias. Un especialista de la sede seleccionada se comunicará contigo de forma confidencial.',
  channelNote,
  asideContent,
}) {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [errors, setErrors] = useState(
    /** @type {Record<string, string>} */ ({})
  );
  const [status, setStatus] = useState('');
  const [microTone, setMicroTone] = useState('care');
  const normalizedLockedSede = useMemo(
    () => normalizeSedeValue(lockedSedeValue),
    [lockedSedeValue]
  );
  const sedeLabel =
    normalizedLockedSede === 'hombres'
      ? 'Sede Varonil'
      : normalizedLockedSede === 'mujeres'
        ? 'Sede Femenil'
        : '';

  useEffect(() => {
    if (normalizedLockedSede) {
      setFormData((prev) => ({ ...prev, sede: normalizedLockedSede }));
      onSelectSede?.(normalizedLockedSede);
      return;
    }
    if (typeof selectedSede === 'undefined') return;
    setFormData((prev) => ({ ...prev, sede: selectedSede }));
  }, [normalizedLockedSede, onSelectSede, selectedSede]);

  const microCopy = CONTACT_MICRO_TONES[microTone] ?? CONTACT_MICRO_TONES.care;

  const handleMicroTone = (tone = 'care') => {
    setMicroTone(tone);
  };

  const getMicroHandlers = (tone = 'care') => ({
    onFocus: () => handleMicroTone(tone),
    onMouseEnter: () => handleMicroTone(tone),
  });

  /**
   * @param {import('react').ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    /** @type {Record<string, string>} */
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Requerido';
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) nextErrors.phone = 'Ingresa 10 dígitos';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim()))
      nextErrors.email = 'Correo inválido';
    if (!formData.sede) nextErrors.sede = 'Selecciona una opción';
    return nextErrors;
  };

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('Por favor revisa los campos marcados.');
      return;
    }
    setStatus(successMessage);
    setFormData((prev) => ({ ...INITIAL_STATE, sede: prev.sede }));
  };

  /**
   * @param {import('react').ChangeEvent<HTMLSelectElement>} event
   */
  const handleSedeChange = (event) => {
    handleChange(event);
    onSelectSede?.(event.target.value);
  };

  return (
    <section className="contact-section" id={id} aria-label="Contacto confidencial">
      <div className={`container contact-section__grid${asideContent ? ' contact-section__grid--with-aside' : ''}`}>
        <div className="contact-section__intro reveal">
          <p className="hero-vista__trust-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="text-muted">{description}</p>
          {channelNote ? <p className="contact-section__note">{channelNote}</p> : null}
        </div>
        <form className="contact-form reveal reveal--delay-1" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__micro" data-variant={microTone} aria-live="polite">
            <p>{microCopy.label}</p>
            <strong>{microCopy.title}</strong>
            <span>{microCopy.detail}</span>
          </div>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              {...getMicroHandlers('care')}
            />
            {errors.name && (
              <span className="field__error" role="alert" aria-live="assertive">
                {errors.name}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="phone">Teléfono (10 dígitos)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleChange}
              required
              {...getMicroHandlers('care')}
            />
            {errors.phone && (
              <span className="field__error" role="alert" aria-live="assertive">
                {errors.phone}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              {...getMicroHandlers('sage')}
            />
            {errors.email && (
              <span className="field__error" role="alert" aria-live="assertive">
                {errors.email}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="sede">¿A qué sede deseas contactar?</label>
            {normalizedLockedSede ? (
              <>
                <input type="hidden" id="sede" name="sede" value={normalizedLockedSede} readOnly />
                <p
                  className="contact-section__sede-pill"
                  aria-live="polite"
                  onMouseEnter={() => handleMicroTone('sage')}
                >
                  {sedeLabel || 'Sede seleccionada automáticamente'}
                </p>
              </>
            ) : (
              <select
                id="sede"
                name="sede"
                value={formData.sede}
                onChange={handleSedeChange}
                {...getMicroHandlers('sage')}
              >
                <option value="">Selecciona una opción</option>
                <option value="mujeres">Sede Femenil</option>
                <option value="hombres">Sede Varonil</option>
              </select>
            )}
            {errors.sede && (
              <span className="field__error" role="alert" aria-live="assertive">
                {errors.sede}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje (opcional)</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              {...getMicroHandlers('care')}
            />
          </div>
          <div className="contact-form__footer">
            <button
              type="submit"
              className="btn btn--primary"
              onMouseEnter={() => handleMicroTone('care')}
              onFocus={() => handleMicroTone('care')}
            >
              Enviar
            </button>
            <p className="text-muted">
              Al enviar aceptas nuestro{' '}
              <button type="button" className="link" onClick={onOpenPrivacy}>
                Aviso de Privacidad
              </button>
              .
            </p>
          </div>
          {status && (
            <div className="contact-form__status" role="status" aria-live="polite">
              {status}
            </div>
          )}
        </form>
        {asideContent ? <div className="contact-section__aside reveal reveal--delay-2">{asideContent}</div> : null}
      </div>
    </section>
  );
}
