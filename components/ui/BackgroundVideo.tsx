'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface BackgroundVideoProps {
  videoSrc?: string;
  fallbackImage?: string;
}

export default function BackgroundVideo({
  videoSrc = '/video/hero-bg.webm',
  fallbackImage = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80'
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback image - using Next.js Image for optimization */}
      <Image
        src={fallbackImage}
        alt="Background"
        fill
        priority
        quality={80}
        className="object-cover"
        sizes="100vw"
      />

      {/* Video Element - only render on client to avoid hydration mismatch */}
      {mounted && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  );
}
