import '../styles/components/HeroCallToActions.scss';

export function HeroCallToActionCard({ site, onContactSite}) {
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
          onClick={() => onContactSite?.(site.sede ?? tone)}
        >
          Información de esta sede
        </button>
      </div>
    </article>
  );
}

export function HeroCallToActionMen({ site, onContactSite, onViewSede }) {
  return (
    <div className="hero-call-to-action hero-call-to-action--men">
      <HeroCallToActionCard
        site={{ tone: 'men', ...(site ?? {}) }}
        onContactSite={onContactSite}
        onViewSede={onViewSede}
      />
    </div>
  );
}

export function HeroCallToActionWomen({ site, onContactSite, onViewSede }) {
  return (
    <div className="hero-call-to-action hero-call-to-action--women">
      <HeroCallToActionCard
        site={{ tone: 'women', ...(site ?? {}) }}
        onContactSite={onContactSite}
        onViewSede={onViewSede}
      />
    </div>
  );
}

export default function HeroCallToActions({ sites = [], onContactSite, onViewSede }) {
  if (!sites.length) return null;

  return (
    <div className="hero-call-to-actions hero-vista__sites" aria-label="Sedes especializadas">
      {sites.map((site) => (
        <HeroCallToActionCard
          key={site.title}
          site={site}
          onContactSite={onContactSite}
          onViewSede={onViewSede}
        />
      ))}
    </div>
  );
}
