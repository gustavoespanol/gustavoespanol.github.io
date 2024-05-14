import type { PLAN_TYPE } from '@/utils/AppConfig';

import type { EnumValues } from './Enum';

export type PlanType = EnumValues<typeof PLAN_TYPE>;

export const PAYMENT_INTERVAL = {
  MONTH: 'month',
  YEAR: 'year',
} as const;

export type PaymentInterval = EnumValues<typeof PAYMENT_INTERVAL>;

export type PricingPlan = {
  id: PlanType;
  price: number;
  interval: PaymentInterval;
};
