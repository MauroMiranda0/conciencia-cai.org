import '../styles/components/SiteCard.scss';

export default function SiteCard({
  title,
  description,
  location,
  tone = 'men',
  sede,
  onSelect,
  points = [],
  className = '',
}) {
  return (
    <article className={`site-card site-card--${tone} ${className}`.trim()}>
      <div className="site-card__badge" aria-hidden="true" />
      <div className="site-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        {points.length > 0 && (
          <ul className="site-card__list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <p className="site-card__location">{location}</p>
        <button type="button" className="btn btn--primary" onClick={() => onSelect?.(sede)}>
          Contactar
        </button>
      </div>
    </article>
  );
}
