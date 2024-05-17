'use client';

import { Contact } from '@/templates/Contact';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Method } from '@/templates/Method';
import { Navbar } from '@/templates/Navbar';
import { Pricing } from '@/templates/Pricing';
import { Services } from '@/templates/Services';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Method />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
