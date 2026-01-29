'use client';

import { Facebook, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: '#', // User will provide the actual link
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: '#', // User will provide the actual link
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#', // User will provide the actual link
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: '#', // User will provide the actual link
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#', // User will provide the actual link
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-sans text-gray-300">
              © {currentYear} GenziAbroad. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
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
