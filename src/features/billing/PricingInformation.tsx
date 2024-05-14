import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import type { PlanType } from '@/types/Plans';
import { PricingPlanList } from '@/utils/AppConfig';

const PricingInformation = (props: { buttonList: Record<PlanType, React.ReactNode> }) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-3 gap-x-6">
      {PricingPlanList.map((plan) => (
        <PricingCard
          key={plan.id}
          planType={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >
          <PricingFeature>{t('feature_email_support')}</PricingFeature>
        </PricingCard>
      ))}
    </div>
  );
};

export { PricingInformation };
