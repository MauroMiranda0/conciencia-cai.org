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
  'Coordinar admisiones, seguimiento clínico y comunicación con familiares autorizados.',
  'Cumplir con disposiciones legales y normativas aplicables.',
];

const SECONDARY_PURPOSES = [
  'Enviar información sobre programas, talleres y actualizaciones institucionales.',
  'Realizar encuestas de satisfacción o estudios estadísticos internos.',
];

const ARCO_STEPS = [
  'Nombre completo y medio para recibir respuesta.',
  'Copia de identificación oficial o poder del representante.',
  'Descripción clara de los datos o derechos que desea ejercer.',
];

export default function PrivacyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Aviso de Privacidad">
      <div className="modal-card modal-card--privacy">
        <header className="modal-card__header">
          <p className="eyebrow">Aviso de Privacidad Integral</p>
          <h2>Conciencia CAI · Centro de Atención Integral</h2>
          <p className="modal-card__lede">
            Responsable: Conciencia CAI, con domicilio en Pachuca, Hidalgo. Protegemos tus datos
            personales bajo los principios de licitud, consentimiento, información, calidad,
            finalidad, lealtad, proporcionalidad y responsabilidad.
          </p>
        </header>
        <div className="modal-card__body">
          <section className="privacy-block">
            <h3>Datos personales que podemos solicitar</h3>
            <ul>
              {DATA_TYPES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="privacy-block">
            <h3>Finalidades del tratamiento</h3>
            <p className="privacy-block__label">Primarias:</p>
            <ul>
              {PRIMARY_PURPOSES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="privacy-block__label">Secundarias:</p>
            <ul>
              {SECONDARY_PURPOSES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="privacy-note">
              Puedes oponerte a las finalidades secundarias enviando un correo a{' '}
              <a href="mailto:privacidad@conciencia-cai.org">privacidad@conciencia-cai.org</a>.
            </p>
          </section>
          <section className="privacy-block">
            <h3>Transferencias y conservación</h3>
            <p>
              No transferimos tus datos sin consentimiento, salvo a terceros que colaboran en la
              prestación de servicios clínicos o cuando lo requiera la autoridad competente. Los
              expedientes se resguardan con medidas físicas y digitales; se conservan únicamente el
              tiempo necesario para cumplir las obligaciones legales.
            </p>
          </section>
          <section className="privacy-block">
            <h3>Derechos ARCO y revocación</h3>
            <p>
              Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición, o
              revocar tu consentimiento enviando una solicitud a{' '}
              <a href="mailto:privacidad@conciencia-cai.org">privacidad@conciencia-cai.org</a>. Incluye:
            </p>
            <ul>
              {ARCO_STEPS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Responderemos en un máximo de 20 días hábiles.</p>
          </section>
          <section className="privacy-block">
            <h3>Cambios</h3>
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
