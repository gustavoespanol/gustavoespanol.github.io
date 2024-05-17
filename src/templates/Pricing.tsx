import { useTranslations } from 'next-intl';

import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';

const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section title={t('title')}>
      <PricingInformation />
    </Section>
  );
};

export { Pricing };
