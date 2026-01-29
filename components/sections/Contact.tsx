'use client';

import { Mail, Phone, MapPin, Clock, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo, contactSection, contactWhatsappSection, companyDetails, backgroundImages } from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
  Clock,
};

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages.contact})` }}
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
            {contactSection.title}
          </h2>
          <p className="text-lg font-sans text-gray-600 max-w-3xl mx-auto">
            {contactSection.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = iconMap[item.iconName];
              const content = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-xl hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-serif text-gray-900 mb-1">{item.label}</h3>
                    <p className="font-sans text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl">
              <h3 className="text-xl font-semibold font-serif text-gray-900 mb-3">
                {contactWhatsappSection.title}
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                {contactWhatsappSection.subtitle}
              </p>
              <a
                href={companyDetails.whatsappBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                <Phone className="w-5 h-5" />
                {contactWhatsappSection.buttonText}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
