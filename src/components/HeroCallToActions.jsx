import '../styles/components/HeroCallToActions.scss';

/**
 * @typedef {Object} HeroSiteSummary
 * @property {string} [focus]
 * @property {string} [title]
 * @property {string} [description]
 * @property {'men' | 'women' | string} [tone]
 * @property {string} [sede]
 * @property {string[]} [highlights]
 */

/**
 * @typedef {Object} HeroCTACardProps
 * @property {HeroSiteSummary} [site]
 * @property {() => void} [onShowMenSite]
 * @property {(sede?: string) => void} [onSelectSede]
 * @property {(hash?: string) => void} [onNavigate]
 */

/**
 * @param {HeroCTACardProps} props
 */
export function HeroCallToActionCard({ site, onShowMenSite, onSelectSede, onNavigate }) {
  if (!site) return null;
  /** @type {string[]} */
  const highlights = site.highlights ?? [];
  const tone = site.tone ?? 'men';

  const handleClick = () => {
    const isMenSite = tone === 'men' || site?.sede === 'hombres';
    if (isMenSite) {
      onShowMenSite?.();
      onNavigate?.('#sede-varonil');
      return;
    }
    onSelectSede?.(site?.sede ?? tone);
    onNavigate?.('#contacto');
  };

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
          onClick={handleClick}
        >
          Información de esta sede
        </button>
      </div>
    </article>
  );
}

/**
 * @param {HeroCTACardProps} props
 */
export function HeroCallToActionMen({ site, onShowMenSite, onSelectSede, onNavigate }) {
  return (
    <div className="hero-call-to-action hero-call-to-action--men">
      <HeroCallToActionCard
        site={{ tone: 'men', ...(site ?? {}) }}
        onShowMenSite={onShowMenSite}
        onSelectSede={onSelectSede}
        onNavigate={onNavigate}
      />
    </div>
  );
}

/**
 * @param {HeroCTACardProps} props
 */
export function HeroCallToActionWomen({ site, onSelectSede, onNavigate }) {
  return (
    <div className="hero-call-to-action hero-call-to-action--women">
      <HeroCallToActionCard
        site={{ tone: 'women', ...(site ?? {}) }}
        onSelectSede={onSelectSede}
        onNavigate={onNavigate}
      />
    </div>
  );
}

/**
 * @typedef {Object} HeroCallToActionsProps
 * @property {HeroSiteSummary[]} [sites]
 * @property {() => void} [onShowMenSite]
 * @property {(sede?: string) => void} [onSelectSede]
 * @property {(hash?: string) => void} [onNavigate]
 */

/**
 * @param {HeroCallToActionsProps} props
 */
export default function HeroCallToActions({ sites = [], onShowMenSite, onSelectSede, onNavigate }) {
  if (!sites.length) return null;

  return (
    <div className="hero-call-to-actions hero-vista__sites" aria-label="Sedes especializadas">
      {sites.map((site) => (
        <HeroCallToActionCard key={site.title} site={site} onShowMenSite={onShowMenSite} onSelectSede={onSelectSede} onNavigate={onNavigate} />
      ))}
    </div>
  );
}
