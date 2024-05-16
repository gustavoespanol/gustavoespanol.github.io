import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/landing/ContactForm';
import { Section } from '@/features/landing/Section';

const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <Section id="contact">
      <div className="rounded-xl bg-muted bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-6 py-10 text-center">
        <div className="text-3xl font-bold text-primary-foreground">{t('title')}</div>

        <div className="mt-2 text-lg font-medium text-muted">{t('description')}</div>

        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export { Contact };
