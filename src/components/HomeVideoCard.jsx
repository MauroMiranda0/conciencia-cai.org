import { useEffect, useRef, useState } from 'react';

/**
 * @typedef {Object} HomeVideoSources
 * @property {string} mp4
 * @property {string} webm
 */

/**
 * @typedef {Object} HomeVideoItem
 * @property {string} title
 * @property {string} description
 * @property {string} poster
 * @property {HomeVideoSources} sources
 */

/**
 * @param {HomeVideoItem} props
 */
export default function HomeVideoCard({ title, description, poster, sources }) {
  const [shouldLoadPlayer, setShouldLoadPlayer] = useState(false);
  const [activatedByClick, setActivatedByClick] = useState(false);
  const containerRef = useRef(
    /** @type {HTMLArticleElement | null} */ (null)
  );
  const videoRef = useRef(
    /** @type {HTMLVideoElement | null} */ (null)
  );
  const observerRef = useRef(
    /** @type {IntersectionObserver | null} */ (null)
  );

  useEffect(() => {
    if (shouldLoadPlayer || !containerRef.current) {
      return;
    }
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setShouldLoadPlayer(true);
      return;
    }
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadPlayer(true);
            observer.disconnect();
            observerRef.current = null;
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(node);
    observerRef.current = observer;
    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [shouldLoadPlayer]);

  useEffect(() => {
    if (shouldLoadPlayer && activatedByClick && videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay might be blocked; user can press play manually
      });
    }
  }, [activatedByClick, shouldLoadPlayer]);

  const handleActivate = () => {
    setActivatedByClick(true);
    setShouldLoadPlayer(true);
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  };

  return (
    <article className="home-videos__card site-card" role="listitem" ref={containerRef}>
      <div className={`home-videos__player${shouldLoadPlayer ? ' home-videos__player--loaded' : ''}`}>
        {shouldLoadPlayer ? (
          <video
            ref={videoRef}
            controls
            preload="none"
            poster={poster}
            playsInline
            tabIndex={0}
          >
            <source src={sources.webm} type="video/webm" />
            <source src={sources.mp4} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        ) : (
          <button type="button" className="home-videos__poster" onClick={handleActivate} aria-label={`Reproducir ${title}`}>
            <img src={poster} alt={`Previsualización de ${title}`} loading="lazy" />
            <span className="home-videos__poster-play" aria-hidden="true">
              ▶
            </span>
            <span className="home-videos__poster-cta">Reproducir</span>
          </button>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
