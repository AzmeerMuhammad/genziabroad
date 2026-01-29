'use client';

import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { testimonials, testimonialsSection, testimonialsExploreButtonText, backgroundImages } from '@/src/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding bg-gradient-to-br from-primary-50 to-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages.testimonials})` }}
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-4">
            {testimonialsSection.title}
          </h2>
          <p className="text-lg font-sans text-gray-600 max-w-3xl mx-auto">
            {testimonialsSection.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 p-8 rounded-xl hover:-translate-y-1 transition-transform relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-blue-200" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold font-serif text-gray-900">{testimonial.name}</p>
                <p className="text-sm font-sans text-gray-600">{testimonial.role}</p>
                <p className="text-sm font-sans text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-3 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all group hover:opacity-90"
            style={{ backgroundColor: '#051650' }}
          >
            {testimonialsExploreButtonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
