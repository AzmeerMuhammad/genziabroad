# GenziAbroad Consultancy Website

A modern, professional consultancy website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Single-page layout** with smooth scrolling between sections
- **Mobile-first responsive design** with dropdown side navigation
- **Subtle animations** powered by Framer Motion
- **Optimized background video** component with fallback image
- **Sticky WhatsApp button** for instant communication
- **Book Now section** with Calendly integration placeholder
- **Accordion-based FAQ** section
- **Static export ready** for deployment to Cloudflare Pages

## Project Structure

```
genziabroad/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Header with logo placeholder & menu trigger
│   │   └── Navigation.tsx  # Mobile-first slide-in navigation
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with video background
│   │   ├── About.tsx       # About section with mission/values
│   │   ├── Services.tsx    # Services grid
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Team.tsx        # Team member profiles
│   │   ├── FAQ.tsx         # Accordion-based FAQs
│   │   ├── Contact.tsx     # Contact information
│   │   └── BookNow.tsx     # CTA section with booking buttons
│   └── ui/
│       ├── BackgroundVideo.tsx  # Optimized video component
│       ├── WhatsAppButton.tsx   # Sticky WhatsApp CTA
│       └── Accordion.tsx        # Reusable accordion component
├── public/
│   └── video/
│       └── .gitkeep        # Place hero-bg.webm here
└── [config files]
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

To create a static export for Cloudflare Pages:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Customization Guide

### Logo
Replace the logo placeholder in [Header.tsx](components/layout/Header.tsx):
- The placeholder is a dashed border box with "LOGO HERE" text
- Replace it with your logo image or SVG component
- Recommended size: 192px × 48px (adjustable via Tailwind classes)

### Background Video
1. Place your optimized video file at `public/video/hero-bg.webm`
2. Recommended specs:
   - Format: WebM (VP9 codec)
   - Resolution: 1920×1080 or lower
   - Duration: 10-20 seconds (looped)
   - Size: < 5MB

### Contact Information
Update the following files with your actual details:
- [Contact.tsx](components/sections/Contact.tsx) - Email, phone, locations
- [WhatsAppButton.tsx](components/ui/WhatsAppButton.tsx) - WhatsApp number
- [BookNow.tsx](components/sections/BookNow.tsx) - Calendly URL

### Content
All content is currently placeholder text. Update the following:
- Hero headline and subheading
- About section mission/values
- Services descriptions
- Testimonials (client names, quotes, locations)
- Team member profiles
- FAQ questions and answers

### Colors
The primary color palette is defined in [tailwind.config.ts](tailwind.config.ts):
- Modify the `primary` color scale to match your brand
- Current: Blue theme (customizable)

### Smooth Scrolling
Configured in [globals.css](app/globals.css) with `scroll-behavior: smooth`
Navigation links automatically scroll to sections with proper offset for the fixed header.

## Key Components Explained

### Header
- Fixed position at top
- Logo placeholder on the left (easily replaceable)
- Hamburger menu trigger on the right
- Sticky with backdrop blur effect

### Navigation
- Slides in from the right on mobile/tablet
- Smooth scroll to sections on click
- Auto-closes after navigation
- Uses Framer Motion for animations
- Body scroll lock when menu is open

### Background Video
- Automatically falls back to image if video file not found
- Lazy loads for performance
- Overlay gradient for text readability
- Muted autoplay for best UX

### WhatsApp Button
- Fixed bottom-right position
- Opens WhatsApp with pre-filled message
- Animated entrance with spring effect
- Hover/tap animations for interactivity

### Accordion (FAQ)
- Single-item open at a time
- Smooth expand/collapse animations
- Keyboard accessible
- Clean, minimal design

## Performance Notes

- All images use external URLs (Unsplash placeholders) - replace with optimized local images
- Video component includes fallback image
- Animations are GPU-accelerated via Framer Motion
- Static export ensures fast loading on CDN

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Next Steps

1. Replace logo placeholder with actual logo
2. Add your background video file
3. Update all contact information
4. Replace placeholder content with real copy
5. Replace Unsplash image URLs with your team photos
6. Update Calendly URL in BookNow section
7. Test on mobile devices
8. Deploy to Cloudflare Pages

## License

Private project - All rights reserved
