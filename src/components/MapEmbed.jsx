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
export default function MapEmbed({ title, address, phone, mapSrc }) {
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://maps.google.com/?q=${encodedAddress}`;
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
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa ${title}`}
      />
      <p>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-card__link">
          Abrir en Google Maps
        </a>
      </p>
    </div>
  );
}
