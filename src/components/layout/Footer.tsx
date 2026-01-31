'use client';

import { Facebook, Youtube, Instagram, Twitter, Linkedin, LucideIcon } from 'lucide-react';
import { socialLinks, companyDetails } from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-sans text-gray-300">
              © {currentYear} {companyDetails.name}. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.iconName];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
