import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="fixed inset-x-0 top-0 z-[9] bg-white p-3 drop-shadow">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <LocaleSwitcher />
            </li>
          </>
        }
      >
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
      </CenteredMenu>
    </Section>
  );
};

export { Navbar };
