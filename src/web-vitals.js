function observe(type, callback) {
  if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') {
    return;
  }
  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ type, buffered: true });
    return observer;
  } catch (_error) {
    return undefined;
  }
}

function reportLCP(callback) {
  let reported = false;
  observe('largest-contentful-paint', (entries) => {
    if (reported) return;
    const lastEntry = entries[entries.length - 1];
    if (!lastEntry) return;
    reported = true;
    callback({ name: 'LCP', value: lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime });
  });
}

function reportCLS(callback) {
  let clsValue = 0;
  observe('layout-shift', (entries) => {
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        callback({ name: 'CLS', value: clsValue });
      }
    });
  });
}

function reportFID(callback) {
  observe('first-input', (entries) => {
    const entry = entries[0];
    if (!entry) return;
    callback({ name: 'FID', value: entry.processingStart - entry.startTime });
  });
}

function reportINP(callback) {
  observe('event', (entries) => {
    const last = entries[entries.length - 1];
    if (!last) return;
    callback({ name: 'INP', value: last.duration });
  });
}

function reportTTFB(callback) {
  if (typeof window === 'undefined' || typeof performance === 'undefined') return;
  const [nav] = performance.getEntriesByType('navigation');
  if (!nav) return;
  callback({ name: 'TTFB', value: nav.responseStart });
}

export default function reportWebVitals(callback = console.log) {
  if (typeof window === 'undefined') return;
  const safeCallback = (metric) => {
    try {
      callback(metric);
    } catch (_error) {
      console.warn('Web Vitals callback failed', _error);
    }
  };
  reportLCP(safeCallback);
  reportCLS(safeCallback);
  reportFID(safeCallback);
  reportINP(safeCallback);
  reportTTFB(safeCallback);
}
