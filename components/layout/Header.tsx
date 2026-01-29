'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Navigation from './Navigation';
import Link from 'next/link';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#book-now', label: 'Book Now' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      // We're on home page, do smooth scroll
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo Placeholder - Top Left */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center justify-center w-40 h-10 md:w-48 md:h-12 border-2 border-dashed border-gray-300 rounded-md hover:border-gray-400 transition-colors cursor-pointer">
              <span className="text-xs md:text-sm text-gray-500 font-medium">LOGO HERE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={
                  link.label === 'Book Now'
                    ? "px-6 py-2 text-white font-medium rounded-md transition-colors hover:opacity-90"
                    : "text-gray-900 hover:text-gray-700 font-medium transition-colors"
                }
                style={
                  link.label === 'Book Now'
                    ? { backgroundColor: '#051650' }
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Trigger - Visible on Mobile Only */}
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
