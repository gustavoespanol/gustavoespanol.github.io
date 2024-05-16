import type { LocalePrefix } from '@/../node_modules/next-intl/dist/types/src/shared/types';

import { PAYMENT_INTERVAL, type PricingPlan } from '../types/Plans';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Gustavo Español',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'fr', name: 'Français' },
    { id: 'es', name: 'Español' },
    { id: 'pt', name: 'Português' },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map((locale) => locale.id);

export const PLAN_TYPE = {
  INDIVIDUAL: 'individual',
  GROUP: 'group',
} as const;

export const PricingPlanList: Array<PricingPlan> = [
  {
    id: PLAN_TYPE.INDIVIDUAL,
    price: 18,
    interval: PAYMENT_INTERVAL.MONTH,
  },
  {
    id: PLAN_TYPE.GROUP,
    price: 15,
    interval: PAYMENT_INTERVAL.MONTH,
  },
];
