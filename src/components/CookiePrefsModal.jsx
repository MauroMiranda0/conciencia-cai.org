import { useEffect, useState } from 'react';
import '../styles/components/Modal.scss';

export default function CookiePrefsModal({ open, onClose, settings, onSave }) {
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  if (!open) return null;

  const handleToggle = (key) => {
    setLocalSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(localSettings);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Preferencias de cookies">
      <form className="modal-card" onSubmit={handleSubmit}>
        <h2>Preferencias de cookies</h2>
        <p>Controla qué categorías opcionales deseas permitir.</p>
        <fieldset className="modal-card__group">
          <legend>Opcionales</legend>
          <label className="toggle">
            <input
              type="checkbox"
              checked={localSettings.analytics}
              onChange={() => handleToggle('analytics')}
            />
            <span>Analíticas</span>
          </label>
          <label className="toggle">
            <input
              type="checkbox"
              checked={localSettings.marketing}
              onChange={() => handleToggle('marketing')}
            />
            <span>Marketing</span>
          </label>
        </fieldset>
        <div className="modal-card__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="btn btn--primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
