'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundVideo from '@/components/ui/BackgroundVideo';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.querySelector('#book-now');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
            Your Gateway to
            <span className="block">Study in Europe</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Complete student consultancy services from admission to accommodation.
            Let us help you achieve your dream of studying abroad in Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#051650] hover:bg-[#051650]/90 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-gray-700"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
