import { useTranslations } from 'next-intl';
import React from 'react';

import type { PaymentInterval, PlanType } from '@/types/Plans';

const PricingCard = (props: {
  planType: PlanType;
  price: number;
  interval: PaymentInterval;
  button: React.ReactNode;
  children: React.ReactNode;
}) => {
  const tPricingPlan = useTranslations('PricingPlan');

  return (
    <div className="rounded-xl border border-border px-6 py-8 text-center">
      <div className="text-lg font-semibold">{tPricingPlan(`${props.planType}_plan_name`)}</div>

      <div className="mt-3 flex items-center justify-center">
        <div className="text-5xl font-bold">${props.price}</div>

        <div className="ml-1 text-muted-foreground">
          / {tPricingPlan(`plan_interval_${props.interval}`)}
        </div>
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {tPricingPlan(`${props.planType}_plan_description`)}
      </div>

      {props.button}

      <ul className="mt-8 space-y-3">{props.children}</ul>
    </div>
  );
};

export { PricingCard };