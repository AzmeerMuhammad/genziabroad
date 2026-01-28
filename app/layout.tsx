import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
