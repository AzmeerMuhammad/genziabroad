'use client';

import { Target, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide exceptional consultancy services that empower our clients to achieve their goals and exceed their expectations.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Integrity, excellence, and client satisfaction are at the core of everything we do. We build lasting relationships based on trust.',
  },
  {
    icon: Award,
    title: 'Our Expertise',
    description: 'With years of experience serving clients across Pakistan and Europe, we bring proven strategies and industry knowledge.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About GenziAbroad
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading consultancy firm dedicated to helping businesses and individuals
            achieve their ambitions through expert guidance and strategic planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-6">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
