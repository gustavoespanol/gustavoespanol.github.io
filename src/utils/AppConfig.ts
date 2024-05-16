import type { LocalePrefix } from '@/../node_modules/next-intl/dist/types/src/shared/types';

import { type PricingPlan } from '../types/Plans';

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
  PAIR: 'pair',
  GROUP: 'group',
} as const;

export const PricingPlanList: Array<PricingPlan> = [
  {
    id: PLAN_TYPE.INDIVIDUAL,
    price: 22,
    features: ['individual_feature_1', 'individual_feature_2', 'individual_feature_3'],
  },
  {
    id: PLAN_TYPE.PAIR,
    price: 18,
    features: ['pair_feature_1', 'pair_feature_2', 'pair_feature_3'],
  },
  {
    id: PLAN_TYPE.GROUP,
    price: 12,
    features: ['group_feature_1', 'group_feature_2', 'group_feature_3'],
  },
];
