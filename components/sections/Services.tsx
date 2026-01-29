'use client';

import { Briefcase, Users, TrendingUp, ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services, servicesSection, servicesExploreButtonText, backgroundImages } from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages.services})` }}
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            {servicesSection.title}
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto">
            {servicesSection.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md mb-4" style={{ backgroundColor: '#e6e9f0' }}>
                  <Icon className="w-6 h-6" style={{ color: '#051650' }} />
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
            className="inline-flex items-center gap-2 px-8 py-3 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all group hover:opacity-90"
            style={{ backgroundColor: '#051650' }}
          >
            {servicesExploreButtonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
