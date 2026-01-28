import '../styles/components/SiteCard.scss';

export default function SiteCard({
  title,
  subtitle = '',
  description,
  location,
  tone = 'men',
  sede,
  onSelect,
  onView,
  points = [],
  className = '',
}) {
  return (
    <article className={`site-card site-card--${tone} ${className}`.trim()}>
      <div className="site-card__badge" aria-hidden="true" />
      <div className="site-card__body">
        {subtitle && <p className="site-card__subtitle">{subtitle}</p>}
        <h3>{title}</h3>
        <p className="site-card__description">{description}</p>
        {points.length > 0 && (
          <ul className="site-card__list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <p className="site-card__location">{location}</p>
        <div className="site-card__actions">
          <button type="button" className="btn btn--primary" onClick={() => onSelect?.(sede)}>
            Hablar con esta sede
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onView?.(tone)}>
            Información
          </button>
        </div>
      </div>
    </article>
  );
}
