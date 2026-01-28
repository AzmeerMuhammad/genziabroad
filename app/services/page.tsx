'use client';

import { Briefcase, Users, TrendingUp, Globe, FileText, Lightbulb, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: Briefcase,
    title: 'University Admissions',
    description: 'Expert guidance in selecting and securing admissions in top European universities that match your academic goals and career aspirations.',
    details: [
      'Personalized university selection based on your profile and goals',
      'Application strategy and timeline planning',
      'Statement of Purpose (SOP) and essay guidance',
      'Document preparation and verification',
      'Application submission and tracking',
      'Acceptance negotiation and offer evaluation',
    ],
  },
  {
    icon: FileText,
    title: 'Visa Processing',
    description: 'Complete visa application support with document preparation, interview coaching, and follow-up to ensure smooth visa approval.',
    details: [
      'Comprehensive visa consultation and requirements analysis',
      'Document checklist and preparation assistance',
      'Visa application form completion',
      'Financial documentation guidance',
      'Interview preparation and mock sessions',
      'Embassy submission and follow-up support',
      'Post-approval travel guidance',
    ],
  },
  {
    icon: Globe,
    title: 'Document Attestation',
    description: 'Professional document attestation and verification services for all your educational certificates and required paperwork.',
    details: [
      'Educational certificate attestation (HEC, MOFA)',
      'Birth certificate and family documents',
      'Police clearance certificate assistance',
      'Medical certificate verification',
      'Translation services for non-English documents',
      'Apostille services where required',
    ],
  },
  {
    icon: Users,
    title: 'Complete Package (No Accommodation)',
    description: 'Full-service package covering admission, visa processing, and document handling - everything except accommodation arrangements.',
    details: [
      'All services from University Admissions package',
      'Complete visa processing and support',
      'Full document attestation services',
      'Pre-departure orientation sessions',
      'Airport and travel guidance',
      'Student support helpline',
      'Post-arrival city orientation (virtual)',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Complete Package (With Accommodation)',
    description: 'All-inclusive service including admission, visa, documents, and secure accommodation arrangements in your destination city.',
    details: [
      'Everything included in Complete Package (No Accommodation)',
      'Student housing research and recommendations',
      'Accommodation booking assistance',
      'Lease agreement review and guidance',
      'Landlord communication support',
      'Move-in coordination and checklist',
      'Housing troubleshooting for first 3 months',
    ],
  },
  {
    icon: Lightbulb,
    title: 'University Transfer Service',
    description: 'For international students already in Europe - assistance with changing universities and managing the transfer process seamlessly.',
    details: [
      'Transfer eligibility assessment',
      'Credit transfer and course equivalency evaluation',
      'New university selection and application',
      'Visa extension or transfer support',
      'Document verification for transfer',
      'Communication with current and new institutions',
      'Residence permit update guidance',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80)' }}
        />
      </div>
      <div className="container-custom px-4 md:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl font-sans text-gray-600 max-w-3xl mx-auto">
            Comprehensive student support services designed to make your study abroad journey
            smooth, stress-free, and successful from start to finish.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-8 md:p-10 hover:-translate-y-1 transition-transform"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Title */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl">
                      <Icon className="w-8 h-8 text-blue-600" />
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
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss which service package is right for you
          </p>
          <Link
            href="/#book-now"
            className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Book Your Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
