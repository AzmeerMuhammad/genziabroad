'use client';

import { Briefcase, Users, TrendingUp, Globe, FileText, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Strategic planning and business development guidance to help your company grow and thrive in competitive markets.',
  },
  {
    icon: Users,
    title: 'HR Consulting',
    description: 'Human resources management, talent acquisition, and organizational development solutions tailored to your needs.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Advisory',
    description: 'Expert financial planning, investment strategies, and risk management to secure your financial future.',
  },
  {
    icon: Globe,
    title: 'International Expansion',
    description: 'Navigate global markets with confidence through our expertise in international business operations.',
  },
  {
    icon: FileText,
    title: 'Legal Compliance',
    description: 'Ensure your business meets all regulatory requirements with our comprehensive compliance consulting.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Strategy',
    description: 'Drive innovation and digital transformation to stay ahead in the rapidly evolving business landscape.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive consultancy solutions designed to address your unique challenges
            and unlock new opportunities for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-lg mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
