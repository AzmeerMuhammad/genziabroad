'use client';

import { Briefcase, Users, TrendingUp, Globe, FileText, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Briefcase,
    title: 'University Admissions',
    description: 'Expert guidance in selecting and securing admissions in top European universities that match your academic goals and career aspirations.',
  },
  {
    icon: FileText,
    title: 'Visa Processing',
    description: 'Complete visa application support with document preparation, interview coaching, and follow-up to ensure smooth visa approval.',
  },
  {
    icon: Globe,
    title: 'Document Attestation',
    description: 'Professional document attestation and verification services for all your educational certificates and required paperwork.',
  },
  {
    icon: Users,
    title: 'Complete Package (No Accommodation)',
    description: 'Full-service package covering admission, visa processing, and document handling - everything except accommodation arrangements.',
  },
  {
    icon: TrendingUp,
    title: 'Complete Package (With Accommodation)',
    description: 'All-inclusive service including admission, visa, documents, and secure accommodation arrangements in your destination city.',
  },
  {
    icon: Lightbulb,
    title: 'University Transfer Service',
    description: 'For international students already in Europe - assistance with changing universities and managing the transfer process seamlessly.',
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
            Comprehensive student support services designed to make your study abroad journey
            smooth, stress-free, and successful from start to finish.
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
