'use client';

import { Star, Quote, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Ahmed Khan',
    program: 'Computer Science, TU Munich',
    country: 'Germany',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    text: 'GenziAbroad made my dream of studying in Germany a reality. From university selection to visa approval, their team guided me every step of the way. The accommodation support was invaluable - I had a place to stay before I even landed in Munich!',
  },
  {
    name: 'Fatima Malik',
    program: 'Business Administration, University of Amsterdam',
    country: 'Netherlands',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    rating: 5,
    text: 'I was overwhelmed by the application process until I found GenziAbroad. They simplified everything - from document attestation to visa interview prep. Now I\'m thriving in Amsterdam, all thanks to their professional support!',
  },
  {
    name: 'Hassan Ali',
    program: 'Mechanical Engineering, TU Berlin',
    country: 'Germany',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    text: 'The complete package service is worth every penny. I didn\'t have to worry about a single thing - GenziAbroad handled my admission, visa, documents, and even found me affordable housing in Berlin. Highly recommended!',
  },
  {
    name: 'Zainab Iqbal',
    program: 'Data Science, KTH Stockholm',
    country: 'Sweden',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    rating: 5,
    text: 'Switching from my university in Pakistan to KTH Stockholm seemed impossible, but GenziAbroad\'s expertise in admissions and visa processing made it seamless. The pre-departure orientation prepared me perfectly for life in Sweden.',
  },
  {
    name: 'Bilal Ahmed',
    program: 'Medicine, Charles University Prague',
    country: 'Czech Republic',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    rating: 5,
    text: 'Medical school admissions in Europe are notoriously competitive. GenziAbroad helped me craft a compelling application and prepared me thoroughly for the entrance exam. I\'m now in my second year at Charles University!',
  },
  {
    name: 'Sana Rauf',
    program: 'Architecture, Politecnico di Milano',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    rating: 5,
    text: 'The document attestation process was so confusing until GenziAbroad took over. They handled everything from HEC to MOFA attestation, and even the Italian embassy requirements. Professional service from start to finish.',
  },
  {
    name: 'Omar Farooq',
    program: 'MBA, ESADE Barcelona',
    country: 'Spain',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    text: 'As a working professional, I didn\'t have time to manage the admission process myself. GenziAbroad\'s team handled everything while I focused on my GMAT. Their SOP guidance was exceptional - I got into my dream business school!',
  },
  {
    name: 'Ayesha Saeed',
    program: 'Psychology, University of Vienna',
    country: 'Austria',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    rating: 5,
    text: 'I used the university transfer service when I wanted to move from my university in Poland to Vienna. GenziAbroad made the transfer smooth, handling credit transfers and visa updates. Excellent service for students already in Europe!',
  },
  {
    name: 'Hamza Raza',
    program: 'Civil Engineering, ETH Zurich',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80',
    rating: 5,
    text: 'ETH Zurich was my top choice, and GenziAbroad helped me get there. From application strategy to visa interview coaching, they covered everything. The team was always available to answer my questions, even on weekends!',
  },
  {
    name: 'Mariam Sheikh',
    program: 'International Relations, Sciences Po Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    rating: 5,
    text: 'Studying in France was my dream since high school. GenziAbroad not only got me into Sciences Po but also helped with Campus France procedures and visa application. Their knowledge of French admission requirements is impressive!',
  },
  {
    name: 'Usman Tariq',
    program: 'Renewable Energy, DTU Copenhagen',
    country: 'Denmark',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    rating: 5,
    text: 'The pre-departure orientation sessions were incredibly helpful. GenziAbroad prepared me for Danish culture, banking, and student life. When I arrived in Copenhagen, I felt ready and confident. Thank you for the amazing support!',
  },
  {
    name: 'Hira Khalid',
    program: 'Fashion Design, Royal College of Art',
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80',
    rating: 5,
    text: 'GenziAbroad helped me build a portfolio that stood out. Their guidance on the creative application process for RCA was invaluable. I\'m now studying at one of the world\'s best art schools!',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.08]">
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
            Student Success Stories
          </h1>
          <p className="text-lg md:text-xl font-sans text-gray-600 max-w-3xl mx-auto">
            Real experiences from students who achieved their dream of studying in Europe
            with GenziAbroad's expert guidance and support.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-xl p-6 hover:-translate-y-1 transition-transform"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary-200" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold font-serif text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm font-sans text-gray-500">{testimonial.program}</p>
                  <p className="text-xs font-sans text-primary-600 font-medium mt-0.5">
                    {testimonial.country}
                  </p>
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
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
            Start Your Success Story Today
          </h2>
          <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of Pakistani students who are now studying at top European universities
          </p>
          <Link
            href="/#book-now"
            className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Book Your Free Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
