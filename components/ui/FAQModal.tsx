'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Accordion from './Accordion';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: 'What countries do you cover?',
    answer: 'We specialize in European countries including Germany, Netherlands, Sweden, Austria, France, Spain, Italy, Czech Republic, Poland, and more. We help you choose the best destination based on your program and budget.',
  },
  {
    question: 'What\'s included in the Complete Package?',
    answer: 'Our Complete Package includes university selection and application, document preparation and attestation, visa processing and interview coaching, pre-departure orientation, and optional accommodation arrangements. We guide you from start to finish.',
  },
  {
    question: 'How long does the admission process take?',
    answer: 'The timeline varies by country and university, but typically ranges from 3-6 months for the complete process from application to visa approval. We help you plan ahead to meet all deadlines.',
  },
  {
    question: 'Can you help with university transfers?',
    answer: 'Yes! Our University Transfer Service is designed for students already studying in Europe who want to change universities. We handle credit transfers, new applications, and visa updates.',
  },
  {
    question: 'What documents do I need?',
    answer: 'Typically you\'ll need academic transcripts, degree certificates, passport, financial documents, language proficiency test scores (IELTS/TOEFL), and recommendation letters. We provide a detailed checklist based on your target country.',
  },
  {
    question: 'Do you charge for initial consultation?',
    answer: 'No, your first consultation with us is completely free! We assess your profile, discuss your goals, and recommend the best path forward without any obligation.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees vary based on the service package you choose. Contact us for a detailed quote tailored to your needs. We offer transparent pricing with no hidden costs.',
  },
  {
    question: 'Do you provide support after I reach Europe?',
    answer: 'Absolutely! We provide post-arrival support including city orientation, university enrollment assistance, and ongoing student support. Our team in Europe is always available to help.',
  },
];

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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 w-[90vw] max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-100 shrink-0">
              <div className="flex-1 pr-4">
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="font-sans text-gray-600 mt-1">
                  Find answers to common questions about our services
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Close FAQs"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <Accordion items={faqs} />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl shrink-0">
              <p className="font-sans text-center text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#contact"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-md transition-colors text-center"
                >
                  Contact Us
                </a>
                <a
                  href="https://wa.me/923001234567?text=Hello!%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}