import '../styles/components/Modal.scss';

const DATA_TYPES = [
  'Identificación: nombre, edad, sexo y fecha de nacimiento.',
  'Contacto: teléfono, correo electrónico y domicilio.',
  'Datos sensibles: información médica, psicológica y antecedentes de consumo.',
  'Datos patrimoniales indispensables para la contratación del servicio.',
];

const PRIMARY_PURPOSES = [
  'Evaluar la situación clínica y emocional del solicitante.',
  'Elaborar expedientes médicos, terapéuticos y administrativos.',
  'Coordinación clínica y comunicación con familiares autorizados.',
  'Cumplimiento de obligaciones legales y regulatorias.',
];

const SECONDARY_PURPOSES = [
  'Enviar información sobre programas y actualizaciones.',
  'Realizar encuestas de satisfacción o estudios internos.',
];

const ARCO_STEPS = [
  'Nombre completo y medio para recibir respuesta.',
  'Copia de identificación oficial o poder del representante.',
  'Descripción clara de los datos o derechos que deseas ejercer.',
];

/**
 * @typedef {Object} PrivacyModalProps
 * @property {boolean} [open]
 * @property {() => void} [onClose]
 */

/**
 * @param {PrivacyModalProps} props
 */
export default function PrivacyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Aviso de Privacidad">
      <div className="modal-card modal-card--info">
        <header className="modal-card__header">
          <p className="modal-card__eyebrow">Protección de datos · Conciencia CAI</p>
          <h2>Aviso de Privacidad Integral</h2>
          <p className="modal-card__lede">
            Responsable: Conciencia CAI, con domicilio en Pachuca, Hidalgo. Tratamos tus datos bajo
            principios de licitud, información, calidad, seguridad y responsabilidad.
          </p>
        </header>
        <div className="modal-card__body">
          <section className="modal-card__group">
            <h3>Datos personales que recabamos</h3>
            <ul>
              {DATA_TYPES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="modal-card__group">
            <h3>Finalidades del tratamiento</h3>
            <p className="modal-card__label">Primarias</p>
            <ul>
              {PRIMARY_PURPOSES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="modal-card__label">Secundarias</p>
            <ul>
              {SECONDARY_PURPOSES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="modal-card__note">
              Puedes oponerte a las finalidades secundarias enviando un correo a{' '}
              <a href="mailto:privacidad@conciencia-cai.org">privacidad@conciencia-cai.org</a>.
            </p>
          </section>
          <section className="modal-card__group">
            <h3>Transferencias y conservación</h3>
            <p>
              No transferimos tus datos sin consentimiento, salvo a proveedores que colaboran en el
              servicio clínico o cuando lo requiera la autoridad competente. Los expedientes se
              resguardan con medidas físicas y digitales durante el tiempo necesario para cumplir
              con las obligaciones legales.
            </p>
          </section>
          <section className="modal-card__group">
            <h3>Derechos ARCO y revocación</h3>
            <p>
              Envía tu solicitud a{' '}
              <a href="mailto:privacidad@conciencia-cai.org">privacidad@conciencia-cai.org</a> e
              incluye:
            </p>
            <ul>
              {ARCO_STEPS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="modal-card__note">Responderemos en un máximo de 20 días hábiles.</p>
          </section>
          <section className="modal-card__group">
            <h3>Cambios al aviso</h3>
            <p>
              Cualquier modificación se publicará en{' '}
              <a href="https://conciencia-cai.org/aviso" target="_blank" rel="noreferrer">
                conciencia-cai.org/aviso
              </a>{' '}
              o se notificará por correo. Última actualización: 25 de enero de 2026.
            </p>
          </section>
        </div>
        <div className="modal-card__actions">
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
