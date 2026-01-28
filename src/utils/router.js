import { useCallback, useEffect, useState } from 'react';

const DEFAULT_ROUTE = '/';

function getPath() {
  if (typeof window === 'undefined') return DEFAULT_ROUTE;
  return window.location.pathname || DEFAULT_ROUTE;
}

export function useRoute() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const handlePopState = () => {
      setPath(getPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((nextPath, { replace = false } = {}) => {
    if (typeof window === 'undefined' || nextPath === path) return;
    if (replace) {
      window.history.replaceState({}, '', nextPath);
    } else {
      window.history.pushState({}, '', nextPath);
    }
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  return [path, navigate];
}

export function isSedeRoute(pathname) {
  if (pathname === '/sede/varonil') return 'men';
  if (pathname === '/sede/femenil') return 'women';
  return null;
}
