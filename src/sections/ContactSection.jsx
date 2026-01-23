import { useEffect, useState } from 'react';
import '../styles/sections/ContactSection.scss';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  sede: '',
  message: '',
};

export default function ContactSection({ selectedSede, onSelectSede, onOpenPrivacy }) {
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
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim())) nextErrors.email = 'Correo inválido';
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

  return (
    <section className="contact-section" id="contacto" aria-label="Contacto">
      <div className="container contact-section__grid">
        <div>
          <p className="eyebrow">Contacto confidencial</p>
          <h2>Agenda una consulta especializada</h2>
          <p className="text-muted">
            Selecciona la sede y un especialista te acompañará paso a paso para definir el plan de
            ingreso.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
              <option value="mujeres">Sede Mujeres</option>
              <option value="hombres">Sede Hombres</option>
            </select>
            {errors.sede && <span className="field__error">{errors.sede}</span>}
          </div>
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
      </div>
    </section>
  );
}
