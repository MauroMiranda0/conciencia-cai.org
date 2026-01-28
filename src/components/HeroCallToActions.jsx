/**
 * HeroSiteGrid
 * - Props:
 *   - `sites`: [{ title, focus, description, highlights[], tone, sede }]
 *   - `onContactSite`: callback para iniciar contacto con la sede seleccionada.
 *   - `onViewSede`: callback para mostrar info filtrada por variante ('men' | 'women').
 */
import './HeroSiteGrid.scss';

export default function HeroSiteGrid({ sites, onContactSite, onViewSede }) {
  return (
    <div className="hero-vista__sites" aria-label="Sedes especializadas">
      {sites.map((site) => (
        <article
          key={site.title}
          className={`hero-vista__site-card hero-vista__site-card--${site.tone}`}
        >
          <p className="hero-vista__site-focus">{site.focus}</p>
          <h3>{site.title}</h3>
          <p className="hero-vista__site-description">{site.description}</p>
          <ul role="list">
            {site.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="hero-vista__site-actions">
            <button
              type="button"
              className="btn btn--secondary hero-sites__btn"
              onClick={() => onContactSite?.(site.sede)}
            >
              Hablar con esta sede
            </button>
            <button
              type="button"
              className="btn btn--ghost hero-sites__link"
              onClick={() => onViewSede?.(site.tone)}
            >
              Información de la sede
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
