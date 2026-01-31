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

    // Disable browser's native scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Check if there's a hash in the URL (e.g., /#book-now, /#services)
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      // Use requestAnimationFrame for faster, smoother scrolling
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      });
      return;
    }

    // Only scroll to top if there's NO hash
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, isClient]);

  return null;
}