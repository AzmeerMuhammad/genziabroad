'use client';

import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { bookNowContent, companyDetails } from '@/src/data/content';

export default function BookNow() {
  return (
    <section id="book-now" className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #051650, #082054)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-6">
            <Calendar className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">
            {bookNowContent.title}
          </h2>

          <p className="text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto" style={{ color: '#b8c5e0' }}>
            {bookNowContent.subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={companyDetails.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-medium rounded-md shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
              style={{ color: '#051650' }}
            >
              <Calendar className="w-5 h-5" />
              {bookNowContent.calendlyButtonText}
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={companyDetails.whatsappBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md transition-all focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-white"
              style={{ transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#051650'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              {bookNowContent.whatsappButtonText}
            </a>
          </motion.div>

          <p className="mt-8 text-sm font-sans" style={{ color: '#b8c5e0' }}>
            {bookNowContent.footerText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
