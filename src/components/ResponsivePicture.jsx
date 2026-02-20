/**
 * @typedef {Object} ResponsivePictureProps
 * @property {string} src
 * @property {string} alt
 * @property {string} [webp]
 * @property {string} [avif]
 * @property {import('react').ImgHTMLAttributes<HTMLImageElement>} [imgProps]
 * @property {'high' | 'low' | 'auto'} [fetchpriority]
 */

/**
 * Render an image with AVIF/WEBP fallbacks when provided.
 *
 * @param {ResponsivePictureProps & import('react').ImgHTMLAttributes<HTMLImageElement>} props
 */
export default function ResponsivePicture({
  src,
  alt,
  webp,
  avif,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority = 'auto',
  ...imgProps
}) {
  const hasSources = Boolean(avif || webp);

  if (!hasSources) {
    return <img src={src} alt={alt} loading={loading} decoding={decoding} fetchpriority={fetchpriority} {...imgProps} />;
  }

  return (
    <picture>
      {avif ? <source srcSet={avif} type="image/avif" /> : null}
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img src={src} alt={alt} loading={loading} decoding={decoding} fetchpriority={fetchpriority} {...imgProps} />
    </picture>
  );
}
