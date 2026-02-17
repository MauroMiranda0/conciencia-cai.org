import ResponsivePicture from './ResponsivePicture.jsx';
import '../styles/components/Gallery.scss';

/**
 * @typedef {Object} GalleryItem
 * @property {string} src
 * @property {string} alt
 * @property {string} [caption]
 * @property {string} [label]
 * @property {string} [webp]
 * @property {string} [avif]
 */

/**
 * @typedef {Object} GalleryProps
 * @property {GalleryItem[]} [items]
 * @property {string} [title]
 * @property {string} [eyebrow]
 * @property {string} [description]
 */

/**
 * @param {GalleryProps} props
 */
export default function Gallery({ items = [], title, eyebrow, description }) {
  if (!items.length) return null;

  return (
    <section className="gallery" aria-label={title ?? 'Galería de la sede'}>
      <div className="container gallery__content">
        <div className="gallery__intro">
          {eyebrow ? <p className="hero-vista__trust-eyebrow">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {description ? <p className="text-muted">{description}</p> : null}
        </div>
        <div className="gallery__grid" role="list">
          {items.map((item) => (
            <figure className="gallery__item" key={item.src} role="listitem">
              <ResponsivePicture src={item.src} webp={item.webp} avif={item.avif} alt={item.alt} />
              <figcaption>
                {item.label ? <span>{item.label}</span> : null}
                {item.caption ? <strong>{item.caption}</strong> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
