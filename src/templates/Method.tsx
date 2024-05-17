import {
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
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
        title={'In person classes'}
        description={
          'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.'
        }
        image={OnlineClassImg}
        bullets={[
          {
            title: 'Understand your customers',
            desc: 'Then explain the first point breifly in one or two lines.',
            icon: <FaceSmileIcon />,
          },
          {
            title: 'Improve acquisition',
            desc: 'Here you can add the next benefit point.',
            icon: <ChartBarSquareIcon />,
          },
          {
            title: 'Drive customer retention',
            desc: 'This will be your last bullet point in this section.',
            icon: <CursorArrowRaysIcon />,
          },
        ]}
      />

      <MethodCard
        imgPosition="right"
        title={'Virtual classes'}
        description={
          'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.'
        }
        image={LiveClassImg}
        bullets={[
          {
            title: 'Mobile Responsive Template',
            desc: 'Nextly is designed as a mobile first responsive template.',
            icon: <DevicePhoneMobileIcon />,
          },
          {
            title: 'Powered by Next.js & TailwindCSS',
            desc: 'This template is powered by latest technologies and tools.',
            icon: <AdjustmentsHorizontalIcon />,
          },
          {
            title: 'Dark & Light Mode',
            desc: 'Nextly comes with a zero-config light & dark mode. ',
            icon: <SunIcon />,
          },
        ]}
      />
    </Section>
  );
};

export { Method };
