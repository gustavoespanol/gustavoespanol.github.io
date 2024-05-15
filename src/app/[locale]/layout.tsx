import '@/styles/global.css';

import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AllLocales } from '@/utils/AppConfig';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export async function generateStaticParams() {
  return AllLocales.map((locale) => ({
    locale,
  }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(params.locale);
  // Validate that the incoming `locale` parameter is valid
  if (!AllLocales.includes(params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <body className="bg-background text-foreground antialiased">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
