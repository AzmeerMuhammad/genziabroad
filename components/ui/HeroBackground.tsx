'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  imageSrc: string;
  alt?: string;
}

export default function HeroBackground({ imageSrc, alt = 'Hero background' }: HeroBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0">
      {/* Solid dark background - shows immediately, no flash */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Background Image with Next.js optimization and priority loading */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white" />
    </div>
  );
}
