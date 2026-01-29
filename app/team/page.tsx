'use client';

import { Linkedin, Mail, GraduationCap, Award, Globe2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';

const teamMembers = [
  {
    name: 'Ali Hassan',
    role: 'Founder & CEO',
    bio: 'With over 10 years of experience in international education consultancy, Ali has helped hundreds of students achieve their European study dreams.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'ali@genziabroad.com',
    qualifications: 'MBA, International Business',
    specialization: 'Strategic Planning & University Partnerships',
    experience: '10+ years',
    achievements: ['500+ successful admissions', 'Partnerships with 50+ European universities', 'Featured speaker at education conferences'],
  },
  {
    name: 'Sarah Ahmed',
    role: 'Admissions Specialist',
    bio: 'Sarah specializes in European university admissions and has secured placements for students in top universities across Germany, Netherlands, and more.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'sarah@genziabroad.com',
    qualifications: 'MS in Education Policy',
    specialization: 'STEM & Business Programs',
    experience: '7+ years',
    achievements: ['95% acceptance rate in top-tier universities', 'Expert in German and Dutch admission systems', 'Specialized in scholarship applications'],
  },
  {
    name: 'Ahmed Malik',
    role: 'Visa & Documentation Expert',
    bio: 'Ahmed handles all visa processing and document attestation with a 98% success rate, ensuring smooth approvals for our students.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'ahmed@genziabroad.com',
    qualifications: 'LLB, Immigration Law',
    specialization: 'Schengen Visa & Student Permits',
    experience: '8+ years',
    achievements: ['98% visa approval rate', '1000+ successful visa applications', 'Certified immigration consultant'],
  },
  {
    name: 'Maria Weber',
    role: 'Student Support Coordinator',
    bio: 'Based in Europe, Maria assists students with accommodation, university transfers, and settling into their new life abroad.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'maria@genziabroad.com',
    qualifications: 'BA in International Relations',
    specialization: 'Student Life & Accommodation',
    experience: '5+ years',
    achievements: ['Based in Berlin, Germany', 'Multilingual support (English, German, Urdu)', 'Expert in university transfer processes'],
  },
  {
    name: 'Dr. Kamran Raza',
    role: 'Academic Counselor',
    bio: 'Dr. Kamran provides expert academic counseling and helps students select programs that align with their career goals.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'kamran@genziabroad.com',
    qualifications: 'PhD in Educational Psychology',
    specialization: 'Career Counseling & Program Selection',
    experience: '12+ years',
    achievements: ['Specialized in medical and engineering admissions', 'Career pathway expert', 'Published researcher in education'],
  },
  {
    name: 'Zara Khan',
    role: 'Financial Aid Advisor',
    bio: 'Zara specializes in identifying scholarship opportunities and helping students secure financial aid for their European education.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'zara@genziabroad.com',
    qualifications: 'MBA in Finance',
    specialization: 'Scholarships & Financial Planning',
    experience: '6+ years',
    achievements: ['€2M+ in scholarships secured', 'Expert in DAAD and Erasmus programs', 'Financial planning for international students'],
  },
  {
    name: 'Hamza Iqbal',
    role: 'Application Coordinator',
    bio: 'Hamza manages the end-to-end application process, ensuring all documents are perfect and submitted on time.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'hamza@genziabroad.com',
    qualifications: 'BS in Computer Science',
    specialization: 'Application Management & SOP Writing',
    experience: '4+ years',
    achievements: ['300+ successful applications', 'Expert in application portals (Uni-Assist, Campus France)', 'Specialized in technical program applications'],
  },
  {
    name: 'Emma Schmidt',
    role: 'European Liaison Officer',
    bio: 'Based in Vienna, Emma maintains relationships with European universities and handles on-ground support for our students.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'emma@genziabroad.com',
    qualifications: 'MA in European Studies',
    specialization: 'University Relations & On-Ground Support',
    experience: '5+ years',
    achievements: ['Direct contacts at 40+ universities', 'Fluent in 4 languages', 'Expert in European education systems'],
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
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
          transition={{ duration: 0.25 }}
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
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-lg md:text-xl font-sans text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of education consultants, visa experts, and student support specialists
            are here to guide you every step of the way to your European study destination.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
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
            Work With Our Expert Team
          </h2>
          <p className="text-lg font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team and take the first step towards your European education
          </p>
          <Link
            href="/#book-now"
            className="inline-block px-8 py-4 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all hover:opacity-90"
            style={{ backgroundColor: '#051650' }}
          >
            Book Your Consultation
          </Link>
        </motion.div>
      </div>
    </main>
    </>
  );
}
