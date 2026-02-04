import type { Metadata } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import "./globals.css";
import FloatingFAQButton from "@/components/ui/FloatingFAQButton";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

// Preload the hero background image
const heroImageUrl = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-serif',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "GenziAbroad - Study in Europe | Student Consultancy Pakistan",
  description: "Complete student consultancy services for studying in Europe. We handle admissions, visa processing, document attestation, and accommodation. Your gateway to European education.",
  keywords: "study in Europe, student consultancy Pakistan, university admission, visa processing, study abroad, European universities, student visa, accommodation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href={heroImageUrl} as="image" />
      </head>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
        <ScrollToTop />
        {children}
        <Footer />
        <FloatingFAQButton />
      </body>
    </html>
  );
}
