'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import Link from 'next/link';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#book-now', label: 'Book Now' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo Placeholder - Top Left */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-40 h-10 md:w-48 md:h-12 border-2 border-dashed border-gray-300 rounded-md">
              <span className="text-xs md:text-sm text-gray-500 font-medium">LOGO HERE</span>
            </div>
          </div>

          {/* Desktop Navigation Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Trigger - Visible on Mobile Only */}
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
