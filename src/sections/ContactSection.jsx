import { useEffect, useState } from 'react';
import '../styles/sections/ContactSection.scss';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  sede: '',
  message: '',
};

const ASSURANCES = [
  'Respuesta en menos de 15 minutos en horario 24/7.',
  'La información se resguarda con nuestro Aviso de Privacidad.',
  'Coordinamos visitas guiadas y acompañamiento para familias foráneas.',
];

const SEDE_LABEL = {
  mujeres: 'Sede Femenil',
  hombres: 'Sede Varonil',
};

export default function ContactSection({
  selectedSede,
  onSelectSede,
  onOpenPrivacy,
  lockSede = false,
  mapEmbedUrl = '',
  mapLabel = '',
}) {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (selectedSede) {
      setFormData((prev) => ({ ...prev, sede: selectedSede }));
    }
  }, [selectedSede]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Requerido';
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) nextErrors.phone = 'Ingresa 10 dígitos';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim()))
      nextErrors.email = 'Correo inválido';
    if (!formData.sede) nextErrors.sede = 'Selecciona una opción';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('Por favor revisa los campos marcados.');
      return;
    }
    setStatus(
      'Gracias. Un especialista de la sede seleccionada se comunicará contigo de forma confidencial.'
    );
    setFormData((prev) => ({ ...INITIAL_STATE, sede: prev.sede }));
  };

  const gridClass = ['contact-section__grid'];
  if (mapEmbedUrl) gridClass.push('contact-section__grid--map');

  return (
    <section className="contact-section" id="contacto" aria-label="Contacto">
      <div className={`container ${gridClass.join(' ')}`}>
        <div className="contact-section__intro reveal">
          <p className="eyebrow">Dar el primer paso</p>
          <h2>Hablemos con confianza y sin juicios</h2>
          <p>
            Sabemos que pedir ayuda requiere valor. Nuestro equipo recibe cada mensaje con total
            confidencialidad y responde con la calidez de quienes acompañan procesos complejos todos
            los días.
          </p>
          <p className="text-muted">
            Cuéntanos qué está ocurriendo y a qué sede deseas acercarte. Te guiaremos para definir
            la valoración, horarios de visita y los acuerdos iniciales con la familia.
          </p>
          <ul className="contact-section__assurances">
            {ASSURANCES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <form className="contact-form reveal reveal--delay-1" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <span className="field__error">{errors.name}</span>}
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
            />
            {errors.phone && <span className="field__error">{errors.phone}</span>}
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
            />
            {errors.email && <span className="field__error">{errors.email}</span>}
          </div>
          {!lockSede ? (
            <div className="field">
              <label htmlFor="sede">¿A qué sede deseas contactar?</label>
              <select
                id="sede"
                name="sede"
                value={formData.sede}
                onChange={(event) => {
                  handleChange(event);
                  onSelectSede?.(event.target.value);
                }}
              >
                <option value="">Selecciona una opción</option>
                <option value="mujeres">Sede Femenina</option>
                <option value="hombres">Sede Masculina</option>
              </select>
              {errors.sede && <span className="field__error">{errors.sede}</span>}
            </div>
          ) : (
            <div className="field">
              <label htmlFor="sede-fija">Sede a contactar</label>
              <input
                id="sede-fija"
                value={SEDE_LABEL[formData.sede] || 'Sede asignada'}
                readOnly
                aria-readonly="true"
              />
              <input type="hidden" name="sede" value={formData.sede} />
            </div>
          )}
          <div className="field">
            <label htmlFor="message">Mensaje (opcional)</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="contact-form__footer">
            <button type="submit" className="btn btn--primary">
              Enviar y agendar valoración
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
        {mapEmbedUrl && (
          <div className="contact-section__map" aria-label="Ubicación de la sede">
            <p className="contact-section__map-label">{mapLabel}</p>
            <iframe
              title={mapLabel || 'Mapa de la sede'}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  );
}
