'use client';

import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FAQModal from './FAQModal';

export default function FloatingFAQButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-l-lg shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-primary-300"
        aria-label="Open FAQs"
        style={{ writingMode: 'vertical-rl' }}
      >
        <HelpCircle className="w-5 h-5 rotate-90" />
        <span className="text-sm tracking-wider">FAQs</span>
      </motion.button>

      <FAQModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
