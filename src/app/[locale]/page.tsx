import { getTranslations } from 'next-intl/server';

import { CTA } from '@/templates/CTA';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';
import { Pricing } from '@/templates/Pricing';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
