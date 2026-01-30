import '../styles/components/HeroCallToActions.scss';

export function HeroCallToActionCard({ site, onViewSedeDetail }) {
  if (!site) return null;
  const highlights = site.highlights ?? [];
  const tone = site.tone ?? 'men';

  return (
    <article className={`hero-vista__site-card hero-vista__site-card--${tone}`}>
      {site.focus ? <p className="hero-vista__site-focus">{site.focus}</p> : null}
      <h3>{site.title}</h3>
      {site.description ? <p className="hero-vista__site-description">{site.description}</p> : null}
      {highlights.length > 0 ? (
        <ul role="list">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      <div className="hero-vista__site-actions">
        <button
          type="button"
          className="btn btn--primary hero-sites__btn"
          onClick={() => onViewSedeDetail?.(site)}
        >
          Información de esta sede
        </button>
      </div>
    </article>
  );
}

export function HeroCallToActionMen({ site, onViewSedeDetail }) {
  return (
    <div className="hero-call-to-action hero-call-to-action--men">
      <HeroCallToActionCard site={{ tone: 'men', ...(site ?? {}) }} onViewSedeDetail={onViewSedeDetail} />
    </div>
  );
}

export function HeroCallToActionWomen({ site, onViewSedeDetail }) {
  return (
    <div className="hero-call-to-action hero-call-to-action--women">
      <HeroCallToActionCard site={{ tone: 'women', ...(site ?? {}) }} onViewSedeDetail={onViewSedeDetail} />
    </div>
  );
}

export default function HeroCallToActions({ sites = [], onViewSedeDetail }) {
  if (!sites.length) return null;

  return (
    <div className="hero-call-to-actions hero-vista__sites" aria-label="Sedes especializadas">
      {sites.map((site) => (
        <HeroCallToActionCard key={site.title} site={site} onViewSedeDetail={onViewSedeDetail} />
      ))}
    </div>
  );
}
