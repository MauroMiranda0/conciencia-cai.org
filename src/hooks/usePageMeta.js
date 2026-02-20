import { useEffect } from 'react';

function ensureTag(selector, createTag) {
  let node = document.querySelector(selector);
  if (!node) {
    node = createTag();
    document.head.appendChild(node);
  }
  return node;
}

function setMetaContent(key, value, attribute = 'name') {
  if (!value) return;
  const meta = ensureTag(`meta[${attribute}="${key}"]`, () => {
    const newMeta = document.createElement('meta');
    newMeta.setAttribute(attribute, key);
    return newMeta;
  });
  meta.setAttribute('content', value);
}

function setLink(tagName, rel, href) {
  if (!href) return;
  const link = ensureTag(`${tagName}[rel="${rel}"]`, () => {
    const node = document.createElement(tagName);
    node.setAttribute('rel', rel);
    return node;
  });
  link.setAttribute('href', href);
}

/**
 * @param {{
 *  title?: string;
 *  description?: string;
 *  canonical?: string;
 *  image?: string;
 }} meta
 */
export default function usePageMeta({ title, description, canonical, image }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaContent('og:title', title, 'property');
      setMetaContent('twitter:title', title);
    }
    if (description) {
      setMetaContent('description', description);
      setMetaContent('og:description', description, 'property');
      setMetaContent('twitter:description', description);
    }
    if (canonical) {
      setLink('link', 'canonical', canonical);
      setMetaContent('og:url', canonical, 'property');
    }
    if (image) {
      setMetaContent('og:image', image, 'property');
      setMetaContent('twitter:image', image);
      setMetaContent('twitter:card', 'summary_large_image');
    }
  }, [title, description, canonical, image]);
}
