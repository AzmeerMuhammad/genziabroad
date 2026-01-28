'use client';

import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ali Hassan',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in international business consulting, Ali leads our team with vision and expertise.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'ali@genziabroad.com',
  },
  {
    name: 'Emma Schmidt',
    role: 'Senior Consultant',
    bio: 'Emma specializes in European market expansion and has helped numerous companies establish successful operations abroad.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'emma@genziabroad.com',
  },
  {
    name: 'Ahmed Malik',
    role: 'Financial Advisor',
    bio: 'Ahmed brings deep financial expertise and has guided clients through complex investment decisions across multiple sectors.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'ahmed@genziabroad.com',
  },
  {
    name: 'Sophie Anderson',
    role: 'Legal Consultant',
    bio: 'Sophie ensures our clients navigate regulatory landscapes smoothly with her extensive knowledge of international law.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    linkedin: '#',
    email: 'sophie@genziabroad.com',
  },
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience across
            multiple industries and markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
