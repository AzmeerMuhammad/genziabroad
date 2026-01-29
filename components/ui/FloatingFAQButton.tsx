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
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 px-2 py-6 text-white font-medium rounded-l-md shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 hover:opacity-90"
        style={{ backgroundColor: '#051650', writingMode: 'vertical-rl' }}
        aria-label="Open FAQs"
      >
        <HelpCircle className="w-5 h-5 rotate-90" />
        <span className="text-sm tracking-wider">FAQs</span>
      </motion.button>

      <FAQModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
