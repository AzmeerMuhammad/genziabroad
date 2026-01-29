// ============================================================================
// GenziAbroad Content Data File
// ============================================================================
// This file contains all text content, lists, and configuration data.
// Edit this file to update content across the entire website.
// ============================================================================

import { LucideIcon, Briefcase, Users, TrendingUp, Target, Heart, Award, Mail, Phone, MapPin, Clock, Globe, FileText, Lightbulb } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface CompanyDetails {
  name: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  whatsappBookingLink: string;
  officeLocation: string;
  businessHours: string;
  calendlyUrl: string;
  logoPlaceholder: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  iconName: 'Facebook' | 'Youtube' | 'Instagram' | 'Twitter' | 'Linkedin';
  href: string;
}

export interface HeroContent {
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  buttonText: string;
}

export interface ServiceItem {
  iconName: 'Briefcase' | 'Users' | 'TrendingUp' | 'Globe' | 'FileText' | 'Lightbulb';
  title: string;
  description: string;
}

export interface ServiceDetailedItem extends ServiceItem {
  details: string[];
}

export interface ValueItem {
  iconName: 'Target' | 'Heart' | 'Award';
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
}

export interface TestimonialDetailedItem {
  name: string;
  program: string;
  country: string;
  image: string;
  rating: number;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
}

export interface TeamMemberDetailed extends TeamMember {
  qualifications: string;
  specialization: string;
  experience: string;
  achievements: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfoItem {
  iconName: 'Mail' | 'Phone' | 'MapPin' | 'Clock';
  label: string;
  value: string;
  href: string | null;
}

export interface SectionContent {
  title: string;
  subtitle: string;
}

export interface BookNowContent {
  title: string;
  subtitle: string;
  calendlyButtonText: string;
  whatsappButtonText: string;
  footerText: string;
}

export interface CTAContent {
  title: string;
  subtitle: string;
  buttonText: string;
}

// ============================================================================
// COMPANY DETAILS
// ============================================================================

export const companyDetails: CompanyDetails = {
  name: 'GenziAbroad',
  email: 'hello@genziabroad.com',
  phone: '+49 176 16986058',
  whatsappNumber: '4917616986058',
  whatsappLink: 'https://wa.me/4917616986058?text=Hello!%20I%20have%20a%20question.',
  whatsappBookingLink: 'https://wa.me/4917616986058?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation.',
  officeLocation: 'Karachi, Pakistan',
  businessHours: 'Mon-Fri: 9:00 AM - 6:00 PM (PKT)',
  calendlyUrl: 'https://calendly.com/your-account/consultation',
  logoPlaceholder: 'LOGO HERE',
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navLinks: NavLink[] = [
  { href: '/#services', label: 'Services' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#book-now', label: 'Book Now' },
];

export const mobileNavLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Now', href: '#book-now' },
];

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', iconName: 'Facebook', href: '#' },
  { name: 'YouTube', iconName: 'Youtube', href: '#' },
  { name: 'Instagram', iconName: 'Instagram', href: '#' },
  { name: 'Twitter', iconName: 'Twitter', href: '#' },
  { name: 'LinkedIn', iconName: 'Linkedin', href: '#' },
];

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroContent: HeroContent = {
  headline: 'Your Gateway to',
  headlineHighlight: 'Study in Europe',
  subheadline: 'Complete student consultancy services from admission to accommodation. Let us help you achieve your dream of studying abroad in Europe.',
  buttonText: 'Book Your Consultation',
};

// ============================================================================
// SERVICES (Homepage - 3 items)
// ============================================================================

export const servicesSection: SectionContent = {
  title: 'Our Services',
  subtitle: 'Comprehensive student support services designed to make your study abroad journey smooth, stress-free, and successful from start to finish.',
};

export const services: ServiceItem[] = [
  {
    iconName: 'Briefcase',
    title: 'University Admissions',
    description: 'Expert guidance in selecting and securing admissions in top European universities that match your academic goals.',
  },
  {
    iconName: 'Users',
    title: 'Complete Package (No Accommodation)',
    description: 'Full-service package covering admission, visa processing, and document handling - everything except accommodation.',
  },
  {
    iconName: 'TrendingUp',
    title: 'Complete Package (With Accommodation)',
    description: 'All-inclusive service including admission, visa, documents, and secure accommodation in your destination city.',
  },
];

export const servicesExploreButtonText = 'Explore All Services';

// ============================================================================
// SERVICES PAGE (Detailed - 6 items)
// ============================================================================

export const servicesPageSection: SectionContent = {
  title: 'Our Services',
  subtitle: 'Comprehensive student support services designed to make your study abroad journey smooth, stress-free, and successful from start to finish.',
};

export const servicesDetailed: ServiceDetailedItem[] = [
  {
    iconName: 'Briefcase',
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
    iconName: 'FileText',
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
    iconName: 'Globe',
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
    iconName: 'Users',
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
    iconName: 'TrendingUp',
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
    iconName: 'Lightbulb',
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

export const servicesPageCTA: CTAContent = {
  title: 'Ready to Start Your Journey?',
  subtitle: 'Book a free consultation to discuss which service package is right for you',
  buttonText: 'Book Your Consultation',
};

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const aboutSection: SectionContent = {
  title: 'About GenziAbroad',
  subtitle: "We are Pakistan's trusted student consultancy firm, specializing in helping students secure admissions in European universities and managing their entire study abroad journey.",
};

export const values: ValueItem[] = [
  {
    iconName: 'Target',
    title: 'Our Mission',
    description: 'To empower students from Pakistan to achieve their dreams of studying in Europe through comprehensive support and guidance at every step of their journey.',
  },
  {
    iconName: 'Heart',
    title: 'Our Values',
    description: 'Student success, transparency, and personalized attention are at the core of everything we do. We treat every student like family.',
  },
  {
    iconName: 'Award',
    title: 'Our Expertise',
    description: 'Years of experience in admissions, visa processing, document attestation, and student support across European universities.',
  },
];

// ============================================================================
// TESTIMONIALS (Homepage - 3 items)
// ============================================================================

export const testimonialsSection: SectionContent = {
  title: 'Student Success Stories',
  subtitle: "Don't just take our word for it. Here's what our students have to say about their experience with GenziAbroad.",
};

export const testimonials: TestimonialItem[] = [
  {
    name: 'Ahmed Hassan',
    role: 'Computer Science Student',
    location: 'Munich, Germany',
    rating: 5,
    text: "GenziAbroad made my dream come true! From admission to visa and finding accommodation in Munich, they handled everything professionally. Now I'm studying at my dream university!",
  },
  {
    name: 'Ayesha Malik',
    role: 'Business Administration Student',
    location: 'Amsterdam, Netherlands',
    rating: 5,
    text: 'The complete package with accommodation was worth every penny. They guided me through every step and even helped me settle in Amsterdam. Highly recommended!',
  },
  {
    name: 'Ali Raza',
    role: 'Engineering Student',
    location: 'Berlin, Germany',
    rating: 5,
    text: 'I used their university transfer service when I wanted to switch universities. The process was smooth and stress-free. Great support throughout!',
  },
];

export const testimonialsExploreButtonText = 'Read More Success Stories';

// ============================================================================
// TESTIMONIALS PAGE (Detailed - 12 items)
// ============================================================================

export const testimonialsPageSection: SectionContent = {
  title: 'Student Success Stories',
  subtitle: "Real experiences from students who achieved their dream of studying in Europe with GenziAbroad's expert guidance and support.",
};

export const testimonialsDetailed: TestimonialDetailedItem[] = [
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
    text: "I was overwhelmed by the application process until I found GenziAbroad. They simplified everything - from document attestation to visa interview prep. Now I'm thriving in Amsterdam, all thanks to their professional support!",
  },
  {
    name: 'Hassan Ali',
    program: 'Mechanical Engineering, TU Berlin',
    country: 'Germany',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    text: "The complete package service is worth every penny. I didn't have to worry about a single thing - GenziAbroad handled my admission, visa, documents, and even found me affordable housing in Berlin. Highly recommended!",
  },
  {
    name: 'Zainab Iqbal',
    program: 'Data Science, KTH Stockholm',
    country: 'Sweden',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    rating: 5,
    text: "Switching from my university in Pakistan to KTH Stockholm seemed impossible, but GenziAbroad's expertise in admissions and visa processing made it seamless. The pre-departure orientation prepared me perfectly for life in Sweden.",
  },
  {
    name: 'Bilal Ahmed',
    program: 'Medicine, Charles University Prague',
    country: 'Czech Republic',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    rating: 5,
    text: "Medical school admissions in Europe are notoriously competitive. GenziAbroad helped me craft a compelling application and prepared me thoroughly for the entrance exam. I'm now in my second year at Charles University!",
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
    text: "As a working professional, I didn't have time to manage the admission process myself. GenziAbroad's team handled everything while I focused on my GMAT. Their SOP guidance was exceptional - I got into my dream business school!",
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
    text: "GenziAbroad helped me build a portfolio that stood out. Their guidance on the creative application process for RCA was invaluable. I'm now studying at one of the world's best art schools!",
  },
];

export const testimonialsPageCTA: CTAContent = {
  title: 'Start Your Success Story Today',
  subtitle: 'Join hundreds of Pakistani students who are now studying at top European universities',
  buttonText: 'Book Your Consultation',
};

// ============================================================================
// TEAM (Homepage - 4 members)
// ============================================================================

export const teamSection: SectionContent = {
  title: 'Meet Our Team',
  subtitle: 'Our dedicated team of education consultants and experts are here to guide you every step of the way to your European study destination.',
};

export const teamMembers: TeamMember[] = [
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

export const teamExploreButtonText = 'Meet the Full Team';

// ============================================================================
// TEAM PAGE (Detailed - 8 members)
// ============================================================================

export const teamPageSection: SectionContent = {
  title: 'Meet Our Expert Team',
  subtitle: 'Our dedicated team of education consultants, visa experts, and student support specialists are here to guide you every step of the way to your European study destination.',
};

export const teamMembersDetailed: TeamMemberDetailed[] = [
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

export const teamPageCTA: CTAContent = {
  title: 'Work With Our Expert Team',
  subtitle: 'Schedule a consultation with our team and take the first step towards your European education',
  buttonText: 'Book Your Consultation',
};

// ============================================================================
// FAQs (Sidebar Modal - 8 items)
// ============================================================================

export const faqModalTitle = 'Frequently Asked Questions';
export const faqModalFooterText = "Still have questions? We're here to help!";
export const faqModalContactButtonText = 'Contact Us';
export const faqModalWhatsappButtonText = 'WhatsApp Us';

export const faqsModal: FAQItem[] = [
  {
    question: 'What countries do you cover?',
    answer: 'We specialize in European countries including Germany, Netherlands, Sweden, Austria, France, Spain, Italy, Czech Republic, Poland, and more. We help you choose the best destination based on your program and budget.',
  },
  {
    question: "What's included in the Complete Package?",
    answer: 'Our Complete Package includes university selection and application, document preparation and attestation, visa processing and interview coaching, pre-departure orientation, and optional accommodation arrangements. We guide you from start to finish.',
  },
  {
    question: 'How long does the admission process take?',
    answer: 'The timeline varies by country and university, but typically ranges from 3-6 months for the complete process from application to visa approval. We help you plan ahead to meet all deadlines.',
  },
  {
    question: 'Can you help with university transfers?',
    answer: 'Yes! Our University Transfer Service is designed for students already studying in Europe who want to change universities. We handle credit transfers, new applications, and visa updates.',
  },
  {
    question: 'What documents do I need?',
    answer: "Typically you'll need academic transcripts, degree certificates, passport, financial documents, language proficiency test scores (IELTS/TOEFL), and recommendation letters. We provide a detailed checklist based on your target country.",
  },
  {
    question: 'Do you charge for initial consultation?',
    answer: 'No, your first consultation with us is completely free! We assess your profile, discuss your goals, and recommend the best path forward without any obligation.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees vary based on the service package you choose. Contact us for a detailed quote tailored to your needs. We offer transparent pricing with no hidden costs.',
  },
  {
    question: 'Do you provide support after I reach Europe?',
    answer: "Absolutely! We provide post-arrival support including city orientation, university enrollment assistance, and ongoing student support. Our team in Europe is always available to help.",
  },
];

// ============================================================================
// FAQs (Section on Homepage - 8 items)
// ============================================================================

export const faqSection: SectionContent = {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions about our services, process, and how we can help your business succeed.',
};

export const faqsSection: FAQItem[] = [
  {
    question: 'What services does GenziAbroad offer?',
    answer: 'We offer complete student consultancy services including university admissions, visa processing, document attestation and verification, accommodation arrangements, and university transfer services for students already in Europe. We have packages both with and without accommodation.',
  },
  {
    question: 'Which European countries do you help students get admitted to?',
    answer: 'We specialize in securing admissions across Europe, with primary focus on Germany, Netherlands, Austria, Poland, Czech Republic, and other EU countries. Our network includes partnerships with numerous universities across the continent.',
  },
  {
    question: "What's the difference between your service packages?",
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
    answer: "Typically you'll need academic transcripts, degree certificates, passport, language proficiency test results (IELTS/TOEFL/German language certificates), motivation letter, and CV. We provide a complete checklist and help with document attestation and verification.",
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

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contactSection: SectionContent = {
  title: 'Get In Touch',
  subtitle: 'Ready to start your European study journey? Contact us today to discuss how we can help you achieve your dream of studying abroad.',
};

export const contactInfo: ContactInfoItem[] = [
  {
    iconName: 'Mail',
    label: 'Email',
    value: 'hello@genziabroad.com',
    href: 'mailto:hello@genziabroad.com',
  },
  {
    iconName: 'Phone',
    label: 'Phone',
    value: '+49 176 16986058',
    href: 'tel:+49 176 16986058',
  },
  {
    iconName: 'MapPin',
    label: 'Office Location',
    value: 'Karachi, Pakistan',
    href: null,
  },
  {
    iconName: 'Clock',
    label: 'Business Hours',
    value: 'Mon-Fri: 9:00 AM - 6:00 PM (PKT)',
    href: null,
  },
];

export const contactWhatsappSection = {
  title: 'Quick Questions?',
  subtitle: 'Message us on WhatsApp for instant answers about admissions and services',
  buttonText: 'WhatsApp Us',
};

// ============================================================================
// BOOK NOW SECTION
// ============================================================================

export const bookNowContent: BookNowContent = {
  title: 'Ready to Study in Europe?',
  subtitle: 'Book your free consultation today and take the first step towards your European education dream with GenziAbroad.',
  calendlyButtonText: 'Schedule on Calendly',
  whatsappButtonText: 'Book via WhatsApp',
  footerText: 'No commitment required • Free 30-minute consultation',
};

// ============================================================================
// COMMON BUTTON TEXTS
// ============================================================================

export const commonButtons = {
  bookConsultation: 'Book Your Consultation',
  backToHome: 'Back to Home',
  contactUs: 'Contact Us',
  whatsappUs: 'WhatsApp Us',
};

// ============================================================================
// BACKGROUND IMAGES
// ============================================================================

export const backgroundImages = {
  services: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
  testimonials: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
  faq: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
  pages: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
};
