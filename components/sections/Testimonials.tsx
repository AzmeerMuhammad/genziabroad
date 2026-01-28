'use client';

import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Computer Science Student',
    location: 'Munich, Germany',
    rating: 5,
    text: 'GenziAbroad made my dream come true! From admission to visa and finding accommodation in Munich, they handled everything professionally. Now I\'m studying at my dream university!',
  },
  {
    name: 'Ayesha Malik',
    role: 'Business Administration Student',
    location: 'Amsterdam, Netherlands',
    rating: 5,
    text: 'The complete package with accommodation was worth every penny. They guided me through every step and even helped me settle in Amsterdam. Highly recommended!',
  },
  {
    name: 'Ali Raza',
    role: 'Engineering Student',
    location: 'Berlin, Germany',
    rating: 5,
    text: 'I used their university transfer service when I wanted to switch universities. The process was smooth and stress-free. Great support throughout!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our students have to say about
            their experience with GenziAbroad.
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all group"
          >
            Read More Success Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
