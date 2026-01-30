'use client';

import { Linkedin, Mail, GraduationCap, Award, Globe2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import HeroBackground from '@/components/ui/HeroBackground';
import { teamMembersDetailed, teamPageSection, teamPageCTA, commonButtons, backgroundImages } from '@/src/data/content';

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <HeroBackground imageSrc={backgroundImages.teamPage} alt="Team background" />

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
                {teamPageSection.title}
              </h1>
              <p className="text-lg md:text-xl font-sans text-white/80 max-w-3xl mx-auto">
                {teamPageSection.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Content */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom px-4 md:px-8">
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembersDetailed.map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    {/* Social Links */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white rounded-full transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 text-primary-600" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white rounded-full transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5 text-primary-600" />
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-1">{member.name}</h3>
                    <p className="font-sans text-primary-600 font-semibold mb-3">{member.role}</p>
                    <p className="font-sans text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#051650' }} />
                        <span className="text-xs font-sans text-gray-600">{member.qualifications}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#051650' }} />
                        <span className="text-xs font-sans text-gray-600">{member.specialization}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#051650' }} />
                        <span className="text-xs font-sans text-gray-600">{member.experience} experience</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-semibold font-serif text-gray-700 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs font-sans text-gray-600 flex items-start gap-1.5">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3 }}
              className="text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
                {teamPageCTA.title}
              </h2>
              <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
                {teamPageCTA.subtitle}
              </p>
              <Link
                href="/#book-now"
                className="inline-block px-8 py-4 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#051650' }}
              >
                {teamPageCTA.buttonText}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
