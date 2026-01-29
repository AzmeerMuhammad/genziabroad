'use client';

import { Briefcase, Users, TrendingUp, Globe, FileText, Lightbulb, CheckCircle, ArrowLeft, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { servicesDetailed, servicesPageSection, servicesPageCTA, commonButtons, backgroundImages } from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  FileText,
  Lightbulb,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImages.servicesPage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white" />
          </div>

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
                {servicesPageSection.title}
              </h1>
              <p className="text-lg md:text-xl font-sans text-white/80 max-w-3xl mx-auto">
                {servicesPageSection.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom px-4 md:px-8">
            {/* Services Grid */}
            <div className="space-y-12">
              {servicesDetailed.map((service) => {
                const Icon = iconMap[service.iconName];
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-8 md:p-10 hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon and Title */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 rounded-xl" style={{ backgroundColor: '#e6e9f0' }}>
                          <Icon className="w-8 h-8" style={{ color: '#051650' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-3">
                          {service.title}
                        </h2>
                        <p className="text-lg font-sans text-gray-600 mb-6">
                          {service.description}
                        </p>

                        {/* Details List */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="font-sans text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="mt-16 text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
                {servicesPageCTA.title}
              </h2>
              <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
                {servicesPageCTA.subtitle}
              </p>
              <Link
                href="/#book-now"
                className="inline-block px-8 py-4 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#051650' }}
              >
                {servicesPageCTA.buttonText}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
