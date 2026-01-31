import '../styles/components/HeroCallToActions.scss';
import { inferSiteGender, normalizeSedeValue } from '../utils/sites.js';

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
 * @property {() => void} [onShowWomenSite]
 * @property {(sede?: string) => void} [onSelectSede]
 * @property {(hash?: string) => void} [onNavigate]
 * @property {(intent?: 'men' | 'women' | 'default') => void} [onIntentChange]
 */

/**
 * @param {HeroCTACardProps} props
 */
export function HeroCallToActionCard({
  site,
  onShowMenSite,
  onShowWomenSite,
  onSelectSede,
  onNavigate,
  onIntentChange,
}) {
  if (!site) return null;
  /** @type {string[]} */
  const highlights = site.highlights ?? [];
  const tone = (site.tone ?? 'men').toLowerCase();
  const normalizedTone = tone;
  const gender = inferSiteGender(site?.tone, site?.sede);
  const toneMatchesMen = gender === 'men';
  const toneMatchesWomen = gender === 'women';
  const toneClass = gender ?? normalizedTone;
  const preferredSede = normalizeSedeValue(site?.sede ?? tone);

  const navigateTo = (hash = '#contacto') => {
    onNavigate?.(hash);
  };

  const handleClick = () => {
    if (toneMatchesMen) {
      onSelectSede?.(preferredSede);
      onShowMenSite?.();
      if (onShowMenSite) {
        navigateTo('#sede-varonil');
      } else {
        navigateTo('#contacto');
      }
      return;
    }
    if (toneMatchesWomen) {
      onSelectSede?.(preferredSede);
      onShowWomenSite?.();
      if (onShowWomenSite) {
        navigateTo('#sede-femenil');
      } else {
        navigateTo('#contacto');
      }
      return;
    }
    onSelectSede?.(preferredSede);
    navigateTo('#contacto');
  };

  const handleIntentChange = (intent) => {
    onIntentChange?.(intent);
  };

  return (
    <article
      className={`hero-vista__site-card hero-vista__site-card--${toneClass}`}
      onMouseEnter={() => handleIntentChange(toneMatchesMen ? 'men' : toneMatchesWomen ? 'women' : 'default')}
      onMouseLeave={() => handleIntentChange('default')}
      onFocusCapture={() =>
        handleIntentChange(toneMatchesMen ? 'men' : toneMatchesWomen ? 'women' : 'default')
      }
      onBlurCapture={() => handleIntentChange('default')}
    >
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
          onMouseEnter={() => handleIntentChange(toneMatchesMen ? 'men' : toneMatchesWomen ? 'women' : 'default')}
          onMouseLeave={() => handleIntentChange('default')}
          onFocus={() =>
            handleIntentChange(toneMatchesMen ? 'men' : toneMatchesWomen ? 'women' : 'default')
          }
          onBlur={() => handleIntentChange('default')}
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
export function HeroCallToActionMen({
  site,
  onShowMenSite,
  onShowWomenSite,
  onSelectSede,
  onNavigate,
  onIntentChange,
}) {
  const normalizedMenSite = {
    ...(site ?? {}),
    tone: 'men',
    sede: site?.sede ?? 'hombres',
  };

  return (
    <div className="hero-call-to-action hero-call-to-action--men">
      <HeroCallToActionCard
        site={normalizedMenSite}
        onShowMenSite={onShowMenSite}
        onShowWomenSite={onShowWomenSite}
        onSelectSede={onSelectSede}
        onNavigate={onNavigate}
        onIntentChange={onIntentChange}
      />
    </div>
  );
}

/**
 * @param {HeroCTACardProps} props
 */
export function HeroCallToActionWomen({ site, onShowWomenSite, onSelectSede, onNavigate, onIntentChange }) {
  const normalizedWomenSite = {
    ...(site ?? {}),
    tone: 'women',
    sede: site?.sede ?? 'mujeres',
  };

  return (
    <div className="hero-call-to-action hero-call-to-action--women">
      <HeroCallToActionCard
        site={normalizedWomenSite}
        onShowWomenSite={onShowWomenSite}
        onSelectSede={onSelectSede}
        onNavigate={onNavigate}
        onIntentChange={onIntentChange}
      />
    </div>
  );
}

/**
 * @typedef {Object} HeroCallToActionsProps
 * @property {HeroSiteSummary[]} [sites]
 * @property {() => void} [onShowMenSite]
 * @property {() => void} [onShowWomenSite]
 * @property {(sede?: string) => void} [onSelectSede]
 * @property {(hash?: string) => void} [onNavigate]
 * @property {(intent?: 'men' | 'women' | 'default') => void} [onIntentChange]
 */

/**
 * @param {HeroCallToActionsProps} props
 */
export default function HeroCallToActions({
  sites = [],
  onShowMenSite,
  onShowWomenSite,
  onSelectSede,
  onNavigate,
  onIntentChange,
}) {
  if (!sites.length) return null;

  return (
    <div className="hero-call-to-actions hero-vista__sites" aria-label="Sedes especializadas">
      {sites.map((site) => (
        <HeroCallToActionCard
          key={site.title}
          site={site}
          onShowMenSite={onShowMenSite}
          onShowWomenSite={onShowWomenSite}
          onSelectSede={onSelectSede}
          onNavigate={onNavigate}
          onIntentChange={onIntentChange}
        />
      ))}
    </div>
  );
}
