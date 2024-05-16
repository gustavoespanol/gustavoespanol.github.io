import type { PLAN_TYPE } from '@/utils/AppConfig';

import type { EnumValues } from './Enum';

export type PlanType = EnumValues<typeof PLAN_TYPE>;

export type PricingPlan = {
  id: PlanType;
  price: number;
  features: string[];
};
