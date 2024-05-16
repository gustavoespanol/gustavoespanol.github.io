import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { PricingPlanList } from '@/utils/AppConfig';

const PricingInformation = () => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {PricingPlanList.map((plan) => (
        <PricingCard key={plan.id} planType={plan.id} price={plan.price}>
          {plan.features.map((feature) => (
            <PricingFeature key={feature}>{t(feature)}</PricingFeature>
          ))}
        </PricingCard>
      ))}
    </div>
  );
};

export { PricingInformation };
