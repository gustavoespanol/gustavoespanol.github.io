import { useTranslations } from 'next-intl';

import { Section } from '@/features/landing/Section';

const Method = () => {
  const t = useTranslations('Method');

  return (
    <div className="bg-map bg-cover bg-no-repeat">
      <Section title={t('title')}>
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3"></div>
      </Section>
    </div>
  );
};

export { Method };
