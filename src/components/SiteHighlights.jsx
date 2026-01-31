/**
 * @typedef {Object} SiteHighlight
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef {Object} SiteHighlightsProps
 * @property {SiteHighlight[]} [items]
 * @property {string} [className]
 */

/**
 * @param {SiteHighlightsProps} props
 */
export default function SiteHighlights({ items = [], className }) {
  const highlights = Array.isArray(items) ? items : [];

  if (!highlights.length) return null;

  return (
    <ul className={className} role="list">
      {highlights.map((highlight, index) => {
        const key = highlight?.title?.length ? `${highlight.title}-${index}` : `highlight-${index}`;
        return (
          <li key={key}>
            {highlight?.title ? <strong>{highlight.title}</strong> : null}
            {highlight?.description ? <span>{highlight.description}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}
