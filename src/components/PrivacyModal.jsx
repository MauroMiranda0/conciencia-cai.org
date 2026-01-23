import '../styles/components/Modal.scss';

export default function PrivacyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Aviso de Privacidad">
      <div className="modal-card">
        <h2>Aviso de Privacidad</h2>
        <p>
          Este aviso es un marcador de posición. Sustituye este texto con el contenido legal
          autorizado por el cliente para describir la recopilación y uso de datos personales.
        </p>
        <button type="button" className="btn btn--secondary" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
