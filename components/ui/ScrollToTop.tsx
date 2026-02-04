'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const lastPathname = useRef(pathname);

  // Mark component as mounted on client side
  useEffect(() => {
    setIsClient(true);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Small delay to ensure hash is available after navigation
    const timeoutId = setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      } else if (lastPathname.current !== pathname) {
        // Only scroll to top if pathname actually changed and no hash
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }

      lastPathname.current = pathname;
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, isClient]);

  return null;
}