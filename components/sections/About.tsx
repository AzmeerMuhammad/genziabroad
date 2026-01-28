'use client';

import { Target, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower students from Pakistan to achieve their dreams of studying in Europe through comprehensive support and guidance at every step of their journey.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Student success, transparency, and personalized attention are at the core of everything we do. We treat every student like family.',
  },
  {
    icon: Award,
    title: 'Our Expertise',
    description: 'Years of experience in admissions, visa processing, document attestation, and student support across European universities.',
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
            We are Pakistan's trusted student consultancy firm, specializing in helping students
            secure admissions in European universities and managing their entire study abroad journey.
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
