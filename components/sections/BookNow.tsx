'use client';

import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookNow() {
  const calendlyUrl = 'https://calendly.com/your-account/consultation'; // Placeholder URL

  return (
    <section id="book-now" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Study in Europe?
          </h2>

          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards your
            European education dream with GenziAbroad.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <Calendar className="w-5 h-5" />
              Schedule on Calendly
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/923001234567?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Book via WhatsApp
            </a>
          </motion.div>

          <p className="mt-8 text-sm text-primary-200">
            No commitment required • Free 30-minute consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
