import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter logo={<Logo />} name={AppConfig.name}>
        <li>
          <Link href="#method">{t('method')}</Link>
        </li>

        <li>
          <Link href="#services">{t('services')}</Link>
        </li>

        <li>
          <Link href="#pricing">{t('pricing')}</Link>
        </li>

        <li>
          <Link href="#contact">{t('contact')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  );
};

export { Footer };
