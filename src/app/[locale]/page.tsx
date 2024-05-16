'use client';

import { Contact } from '@/templates/Contact';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';
import { Pricing } from '@/templates/Pricing';
import { Services } from '@/templates/Services';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
