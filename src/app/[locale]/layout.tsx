import '@/styles/global.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(params.locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

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
