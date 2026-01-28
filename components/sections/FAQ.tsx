'use client';

import { motion } from 'framer-motion';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';

const faqItems: AccordionItem[] = [
  {
    question: 'What services does GenziAbroad offer?',
    answer: 'We offer comprehensive consultancy services including business consulting, HR advisory, financial planning, international expansion support, legal compliance, and innovation strategy. Our services are tailored to meet the specific needs of each client.',
  },
  {
    question: 'Which regions do you serve?',
    answer: 'We primarily serve clients in Pakistan and Europe, with expertise in navigating business landscapes across both regions. Our international network allows us to support clients with cross-border operations and expansion plans.',
  },
  {
    question: 'How do I book a consultation?',
    answer: 'You can book a consultation by clicking the "Book Now" button on our website, which will direct you to our Calendly scheduling page. Alternatively, you can contact us directly via WhatsApp or email to arrange a consultation.',
  },
  {
    question: 'What is the typical duration of a consultancy engagement?',
    answer: 'The duration varies based on your specific needs and project scope. Initial consultations typically last 1-2 hours, while comprehensive projects can span several months. We work flexibly to accommodate your timeline and objectives.',
  },
  {
    question: 'Do you offer both in-person and virtual consultations?',
    answer: 'Yes, we offer both in-person meetings (in select locations) and virtual consultations via video conferencing. This flexibility ensures we can serve clients effectively regardless of their location.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'Our team has experience across multiple industries including technology, finance, manufacturing, healthcare, retail, and professional services. We leverage cross-industry insights to provide innovative solutions.',
  },
  {
    question: 'How do you ensure confidentiality?',
    answer: 'Client confidentiality is paramount. We sign non-disclosure agreements (NDAs) and maintain strict data protection protocols. All client information is handled with the utmost security and discretion.',
  },
  {
    question: 'What are your consultation fees?',
    answer: 'Our fees vary depending on the scope and complexity of the project. We offer flexible pricing models including hourly rates, project-based fees, and retainer arrangements. Contact us for a customized quote based on your specific needs.',
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
