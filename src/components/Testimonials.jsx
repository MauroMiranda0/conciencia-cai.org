import '../styles/components/Testimonials.scss';

/**
 * @typedef {Object} Testimonial
 * @property {string} quote
 * @property {string} author
 * @property {string} [role]
 */

/**
 * @typedef {Object} TestimonialsProps
 * @property {Testimonial[]} [items]
 * @property {string} [title]
 * @property {string} [eyebrow]
 * @property {string} [description]
 * @property {'men' | 'women' | 'mixed'} [tone]
 */

/**
 * @param {TestimonialsProps} props
 */
export default function Testimonials({ items = [], title, eyebrow, description, tone = 'mixed' }) {
  if (!items.length) return null;

  return (
    <section className={`testimonials testimonials--${tone}`} aria-label={title ?? 'Testimonios de acompañamiento'}>
      <div className="container testimonials__grid">
        <div className="testimonials__intro">
          {eyebrow ? <p className="hero-vista__trust-eyebrow">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {description ? <p className="text-muted">{description}</p> : null}
        </div>
        <div className="testimonials__list" role="list">
          {items.map((item) => (
            <article className="testimonial" key={`${item.author}-${item.quote}`} role="listitem">
              <p className="testimonial__quote">“{item.quote}”</p>
              <div className="testimonial__author">
                <strong>{item.author}</strong>
                {item.role ? <span>{item.role}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
