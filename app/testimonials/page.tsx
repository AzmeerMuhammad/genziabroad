'use client';

import { Star, Quote, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import HeroBackground from '@/components/ui/HeroBackground';
import { testimonialsDetailed, testimonialsPageSection, testimonialsPageCTA, commonButtons, backgroundImages } from '@/src/data/content';

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <HeroBackground imageSrc={backgroundImages.testimonialsPage} alt="Testimonials background" />

          <div className="container-custom px-4 md:px-8 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {commonButtons.backToHome}
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">
                {testimonialsPageSection.title}
              </h1>
              <p className="text-lg md:text-xl font-sans text-white/80 max-w-3xl mx-auto">
                {testimonialsPageSection.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Content */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom px-4 md:px-8">
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonialsDetailed.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-xl p-6 hover:-translate-y-1 transition-transform"
                >
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-primary-200" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold font-serif text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm font-sans text-gray-500">{testimonial.program}</p>
                      <p className="text-xs font-sans text-primary-600 font-medium mt-0.5">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
                {testimonialsPageCTA.title}
              </h2>
              <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
                {testimonialsPageCTA.subtitle}
              </p>
              <Link
                href="/#book-now"
                className="inline-block px-8 py-4 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#051650' }}
              >
                {testimonialsPageCTA.buttonText}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
