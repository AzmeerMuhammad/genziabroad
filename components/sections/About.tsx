'use client';

import { Target, Heart, Award, LucideIcon, ArrowRight, Rocket, Zap, ThumbsUp, Star, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { values, aboutSection, backgroundImages, aboutExploreButtonText } from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Heart,
  Award,
  Rocket,
  Zap,
  ThumbsUp,
  Star,
  Shield,
  CheckCircle,
};

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages.about})` }}
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
            {aboutSection.title}
          </h2>
          <p className="text-lg font-sans text-gray-600 max-w-3xl mx-auto">
            {aboutSection.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = iconMap[value.iconName];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 p-8 rounded-xl hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg mb-6" style={{ backgroundColor: '#e6e9f0' }}>
                  <Icon className="w-7 h-7" style={{ color: '#051650' }} />
                </div>
                <h3 className="text-xl font-semibold font-serif text-gray-900 mb-3">{value.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-4"
            style={{ backgroundColor: '#051650' }}
          >
            {aboutExploreButtonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
