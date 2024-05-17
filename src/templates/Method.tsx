import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ComputerDesktopIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

import { MethodCard } from '@/features/landing/MethodCard';
import { Section } from '@/features/landing/Section';
import LiveClassImg from '@/public/assets/images/live-class.png';
import OnlineClassImg from '@/public/assets/images/online-class.png';

const Method = () => {
  const t = useTranslations('Method');

  return (
    <Section id="method" title={t('title')}>
      <MethodCard
        imgPosition="left"
        title={t('online_title')}
        description={t('online_description')}
        image={OnlineClassImg}
        bullets={[
          {
            title: t('online_bullet1_title'),
            desc: t('online_bullet1_description'),
            icon: <CalendarDaysIcon />,
          },
          {
            title: t('online_bullet2_title'),
            desc: t('online_bullet2_description'),
            icon: <ComputerDesktopIcon />,
          },
          {
            title: t('online_bullet3_title'),
            desc: t('online_bullet3_description'),
            icon: <ChatBubbleLeftRightIcon />,
          },
        ]}
      />

      <MethodCard
        imgPosition="right"
        title={t('in-person_title')}
        description={t('in-person_description')}
        image={LiveClassImg}
        bullets={[
          {
            title: t('in-person_bullet1_title'),
            desc: t('in-person_bullet1_description'),
            icon: <ChatBubbleOvalLeftEllipsisIcon />,
          },
          {
            title: t('in-person_bullet2_title'),
            desc: t('in-person_bullet2_description'),
            icon: <UserGroupIcon />,
          },
          {
            title: t('in-person_bullet3_title'),
            desc: t('in-person_bullet3_description'),
            icon: <MapPinIcon />,
          },
        ]}
      />
    </Section>
  );
};

export { Method };
