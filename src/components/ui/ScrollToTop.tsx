'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // Mark component as mounted on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side after hydration
    if (!isClient) return;

    // Small delay to ensure React hydration is complete
    const initialDelay = setTimeout(() => {
      // 1. Disable browser's native scroll restoration
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      // 2. Check if there's a hash in the URL (e.g., /#book-now, /#services)
      if (window.location.hash) {
        // If there is a hash, scroll to that section instead of top
        const hash = window.location.hash;
        const id = hash.substring(1); // Remove the # symbol

        const scrollTimeout = setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }, 100);

        return () => clearTimeout(scrollTimeout);
      }

      // 3. Only scroll to top if there's NO hash
      const scrollTimeout = setTimeout(() => {
        // Force scroll to top without manipulating styles
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 10);

      return () => clearTimeout(scrollTimeout);
    }, 50);

    return () => clearTimeout(initialDelay);
  }, [pathname, isClient]);

  return null;
}