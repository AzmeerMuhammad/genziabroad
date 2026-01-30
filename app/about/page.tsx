'use client';

import { Target, Heart, Award, CheckCircle, ArrowLeft, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import HeroBackground from '@/components/ui/HeroBackground';
import {
  aboutPageSection,
  aboutStory,
  aboutStats,
  aboutWhyChooseUs,
  values,
  aboutPageCTA,
  commonButtons,
  backgroundImages,
} from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Heart,
  Award,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <HeroBackground imageSrc={backgroundImages.aboutPage} alt="About background" />

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
                {aboutPageSection.title}
              </h1>
              <p className="text-lg md:text-xl font-sans text-white/80 max-w-3xl mx-auto">
                {aboutPageSection.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="relative py-16 bg-white overflow-hidden">
          {/* Subtle Background Image */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImages.aboutPage})` }}
            />
          </div>

          <div className="container-custom px-4 md:px-8 relative z-10">
            {/* Our Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-8 md:p-10 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-6">
                {aboutStory.title}
              </h2>
              <div className="space-y-4">
                {aboutStory.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg font-sans text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {aboutStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-xl p-6 text-center"
                >
                  <div
                    className="text-3xl md:text-4xl font-bold font-serif mb-2"
                    style={{ color: '#051650' }}
                  >
                    {stat.number}
                  </div>
                  <div className="font-sans text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-8 md:p-10 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-8 text-center">
                {aboutWhyChooseUs.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutWhyChooseUs.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold font-serif text-gray-900 mb-1">
                        {reason.title}
                      </h3>
                      <p className="font-sans text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => {
                  const Icon = iconMap[value.iconName];
                  return (
                    <div
                      key={value.title}
                      className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 p-8 rounded-xl hover:-translate-y-1 transition-transform"
                    >
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-lg mb-6"
                        style={{ backgroundColor: '#e6e9f0' }}
                      >
                        <Icon className="w-7 h-7" style={{ color: '#051650' }} />
                      </div>
                      <h3 className="text-xl font-semibold font-serif text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="font-sans text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
                {aboutPageCTA.title}
              </h2>
              <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
                {aboutPageCTA.subtitle}
              </p>
              <Link
                href="/#book-now"
                className="inline-block px-8 py-4 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#051650' }}
              >
                {aboutPageCTA.buttonText}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
