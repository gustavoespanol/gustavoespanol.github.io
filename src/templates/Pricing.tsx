import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { Section } from '@/features/landing/Section';
import { PricingPlanList } from '@/utils/AppConfig';

const Pricing = () => {
  const t = useTranslations('PricingPlan');

  return (
    <Section id="pricing" title={t('title')}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
        {PricingPlanList.map((plan) => (
          <PricingCard key={plan.id} planType={plan.id} price={plan.price}>
            {plan.features.map((feature) => (
              <PricingFeature key={feature}>{t(feature)}</PricingFeature>
            ))}
          </PricingCard>
        ))}
      </div>
    </Section>
  );
};

export { Pricing };
