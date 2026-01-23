import '../styles/components/ConsentBanner.scss';

export default function ConsentBanner({ onAccept, onReject, onOpenPrefs }) {
  if (!onAccept) return null;

  return (
    <section className="consent-banner" aria-label="Consentimiento de cookies">
      <div className="container consent-banner__inner">
        <p>
          Usamos cookies esenciales para operar este sitio. Puedes aceptar, rechazar o ajustar tus
          preferencias en cualquier momento.
        </p>
        <div className="consent-banner__actions">
          <button className="btn btn--ghost" type="button" onClick={onOpenPrefs}>
            Configurar
          </button>
          <button className="btn btn--secondary" type="button" onClick={onReject}>
            Rechazar
          </button>
          <button className="btn btn--primary" type="button" onClick={onAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
}
