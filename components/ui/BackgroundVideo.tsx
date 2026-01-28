'use client';

import { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  videoSrc?: string;
  fallbackImage?: string;
}

export default function BackgroundVideo({
  videoSrc = '/video/hero-bg.webm',
  fallbackImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80'
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback image during SSR and initial render
  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${fallbackImage})` }}
      />

      {/* Video Element - will show on top of fallback once loaded */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  );
}
