'use client';

import { motion } from 'framer-motion';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';

const faqItems: AccordionItem[] = [
  {
    question: 'What services does GenziAbroad offer?',
    answer: 'We offer complete student consultancy services including university admissions, visa processing, document attestation and verification, accommodation arrangements, and university transfer services for students already in Europe. We have packages both with and without accommodation.',
  },
  {
    question: 'Which European countries do you help students get admitted to?',
    answer: 'We specialize in securing admissions across Europe, with primary focus on Germany, Netherlands, Austria, Poland, Czech Republic, and other EU countries. Our network includes partnerships with numerous universities across the continent.',
  },
  {
    question: 'What\'s the difference between your service packages?',
    answer: 'We offer two main packages: (1) Complete Package without Accommodation - includes admission, visa processing, and document handling. (2) Complete Package with Accommodation - includes everything plus secure housing arrangements in your destination city. We also offer standalone services for students who need specific support.',
  },
  {
    question: 'How long does the admission and visa process take?',
    answer: 'The timeline varies by university and country, but typically the complete process takes 3-6 months from application to visa approval. We work efficiently to ensure you meet all deadlines and start your program on time.',
  },
  {
    question: 'Do you help students already studying in Europe?',
    answer: 'Yes! We offer university transfer services for international students already in Europe who want to change universities. We handle the entire transfer process including admission to the new university, visa updates, and accommodation if needed.',
  },
  {
    question: 'What documents do I need for the application process?',
    answer: 'Typically you\'ll need academic transcripts, degree certificates, passport, language proficiency test results (IELTS/TOEFL/German language certificates), motivation letter, and CV. We provide a complete checklist and help with document attestation and verification.',
  },
  {
    question: 'How much does your service cost?',
    answer: 'Our fees vary depending on the package you choose and the services required. We offer transparent pricing with no hidden charges. Contact us for a detailed quote based on your specific needs and destination country.',
  },
  {
    question: 'Do you provide post-arrival support?',
    answer: 'Yes! For students who choose our complete package with accommodation, we provide support with settling in, including help with registration, bank account opening guidance, and orientation to your new city.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can
            help your business succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
