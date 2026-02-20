import '../styles/components/MapEmbed.scss';

/**
 * @typedef {Object} MapEmbedProps
 * @property {string} title
 * @property {string} address
 * @property {string} [phone]
 * @property {string} mapSrc
 */

/**
 * @param {MapEmbedProps} props
 */
const ALLOWED_MAP_HOSTS = ['maps.google.com', 'www.google.com'];

function resolveSafeMapSrc(mapSrc, fallbackQuery) {
  try {
    const parsed = new URL(mapSrc);
    if (ALLOWED_MAP_HOSTS.includes(parsed.hostname)) {
      return mapSrc;
    }
  } catch (_error) {
    // swallow and fallback
  }
  return `https://maps.google.com/maps?q=${fallbackQuery}&output=embed`;
}

export default function MapEmbed({ title, address, phone, mapSrc }) {
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://maps.google.com/?q=${encodedAddress}`;
  const safeMapSrc = resolveSafeMapSrc(mapSrc, encodedAddress);
  return (
    <div className="map-card" aria-label={title}>
      <h3>{title}</h3>
      <p>{address}</p>
      {phone ? (
        <p>
          <a href={`tel:${phone.replace(/\\s+/g, '')}`}>Línea directa {phone}</a>
        </p>
      ) : null}
      <iframe
        src={safeMapSrc}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={`Mapa ${title}`}
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
      <p>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-card__link">
          Abrir en Google Maps
        </a>
      </p>
    </div>
  );
}
