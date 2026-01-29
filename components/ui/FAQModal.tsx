'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Accordion from './Accordion';
import {
  faqsModal,
  faqModalTitle,
  faqModalFooterText,
  faqModalContactButtonText,
  faqModalWhatsappButtonText,
  companyDetails
} from '@/src/data/content';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FAQModal({ isOpen, onClose }: FAQModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
              <h2 className="font-serif text-xl text-gray-900">
                {faqModalTitle}
              </h2>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close FAQs"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <Accordion items={faqsModal} />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
              <p className="font-sans text-center text-gray-600 mb-4">
                {faqModalFooterText}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/#contact"
                  onClick={onClose}
                  className="px-6 py-2.5 text-white font-medium rounded-md transition-colors text-center hover:opacity-90"
                  style={{ backgroundColor: '#051650' }}
                >
                  {faqModalContactButtonText}
                </a>
                <a
                  href={companyDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors text-center"
                >
                  {faqModalWhatsappButtonText}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
