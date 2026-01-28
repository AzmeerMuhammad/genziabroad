'use client';

import { Briefcase, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: Briefcase,
    title: 'University Admissions',
    description: 'Expert guidance in selecting and securing admissions in top European universities that match your academic goals.',
  },
  {
    icon: Users,
    title: 'Complete Package (No Accommodation)',
    description: 'Full-service package covering admission, visa processing, and document handling - everything except accommodation.',
  },
  {
    icon: TrendingUp,
    title: 'Complete Package (With Accommodation)',
    description: 'All-inclusive service including admission, visa, documents, and secure accommodation in your destination city.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive student support services designed to make your study abroad journey
            smooth, stress-free, and successful from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-md mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all group"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
