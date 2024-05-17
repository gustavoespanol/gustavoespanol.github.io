import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { RocketIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';
import { cn } from '@/utils/Helpers';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className={cn('w-full bg-secondary')}>
      <Section className="py-20 pb-16 md:py-32 md:pb-24">
        <CenteredHero
          title={t.rich('title', {
            important: (chunks) => (
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
          description={t('description')}
          buttons={
            <a className={buttonVariants({ size: 'lg' })} href="#contact">
              <RocketIcon className="mr-2 size-5" />
              {t('button')}
            </a>
          }
        />
      </Section>
    </div>
  );
};

export { Hero };
