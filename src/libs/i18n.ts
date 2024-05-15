import { notFound } from 'next/navigation';
import { getRequestConfig, unstable_setRequestLocale } from 'next-intl/server';

import { AllLocales } from '@/utils/AppConfig';

export default getRequestConfig(async ({ locale }) => {
  unstable_setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!AllLocales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
