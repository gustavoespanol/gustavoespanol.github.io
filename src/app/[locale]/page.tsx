'use client';

import { CTA } from '@/templates/CTA';
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
      <CTA />
      <Footer />
    </>
  );
}
