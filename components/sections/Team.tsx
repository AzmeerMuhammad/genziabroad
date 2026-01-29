'use client';

import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Ali Hassan',
    role: 'Founder & CEO',
    bio: 'With over 10 years of experience in international education consultancy, Ali has helped hundreds of students achieve their European study dreams.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'ali@genziabroad.com',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Admissions Specialist',
    bio: 'Sarah specializes in European university admissions and has secured placements for students in top universities across Germany, Netherlands, and more.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'sarah@genziabroad.com',
  },
  {
    name: 'Ahmed Malik',
    role: 'Visa & Documentation Expert',
    bio: 'Ahmed handles all visa processing and document attestation with a 98% success rate, ensuring smooth approvals for our students.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'ahmed@genziabroad.com',
  },
  {
    name: 'Maria Weber',
    role: 'Student Support Coordinator',
    bio: 'Based in Europe, Maria assists students with accommodation, university transfers, and settling into their new life abroad.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'maria@genziabroad.com',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative section-padding bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)' }}
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
            Meet Our Team
          </h2>
          <p className="text-lg font-sans text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of education consultants and experts are here to guide you
            every step of the way to your European study destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <div className="text-center">
                <h3 className="text-xl font-semibold font-serif text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium font-sans mb-3">{member.role}</p>
                <p className="text-sm font-sans text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all group"
          >
            Meet the Full Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
