import '../styles/components/SiteCard.scss';

export default function SiteCard({ title, description, location, tone = 'men', sede, onSelect }) {
  return (
    <article className={`site-card site-card--${tone}`}>
      <div className="site-card__badge" aria-hidden="true" />
      <div className="site-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="site-card__location">{location}</p>
        <button type="button" className="btn btn--primary" onClick={() => onSelect?.(sede)}>
          Contactar
        </button>
      </div>
    </article>
  );
}
