import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import BookNow from '@/components/sections/BookNow';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
        <BookNow />
      </main>
      <WhatsAppButton
        phoneNumber="+4917616986058"
        message="Hello! I would like to book a consultation."
      />
    </>
  );
}
