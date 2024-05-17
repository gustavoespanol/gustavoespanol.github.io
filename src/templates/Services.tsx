import { useTranslations } from 'next-intl';

import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';
import { cn } from '@/utils/Helpers';

const Services = () => {
  const t = useTranslations('Services');

  return (
    <div className={cn('w-full bg-secondary')}>
      <Section title={t('title')}>
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard title={t('service1_title')}>{t('service1_description')}</FeatureCard>

          <FeatureCard title={t('service2_title')}>{t('service2_description')}</FeatureCard>

          <FeatureCard title={t('service3_title')}>{t('service3_description')}</FeatureCard>
        </div>
      </Section>
    </div>
  );
};

export { Services };
