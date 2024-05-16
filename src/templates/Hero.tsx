import { EnvelopeClosedIcon, RocketIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { Section } from '@/features/landing/Section';
import { TextBoxHero } from '@/features/landing/TextBoxHero';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-32 pb-24">
      <>
        <div className="w-full flex-wrap place-items-center items-center overflow-hidden">
          <div className="flex size-full max-h-screen items-center justify-center overflow-hidden">
            <div className="z-10 flex h-auto max-h-full w-full flex-col items-stretch gap-1 px-4 pb-[120px] pt-[60px] lg:max-h-[calc(100%-120px)] lg:flex-row lg:gap-8 lg:p-0">
              <div
                className="relative flex h-auto w-full justify-center text-center text-4xl lg:text-right lg:text-6xl"
                style={{ aspectRatio: '1 / 1' }}
              >
                <div
                  className="absolute h-full w-auto bg-white drop-shadow-lg"
                  style={{
                    aspectRatio: '2.1 / 3.4',
                    transform: 'scale(0.8) translateX(45%) rotate(2deg)',
                  }}
                >
                  <div className="size-full p-[7.5%] pb-[18.2%] pt-[8.5%]">
                    <div
                      className="size-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(/assets/images/gustavo1.jpeg)`,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="absolute h-full w-auto bg-white drop-shadow-lg"
                  style={{
                    aspectRatio: '2.1 / 3.4',
                    transform: 'scale(0.8) translateX(-35%) rotate(-10deg)',
                    zIndex: -1,
                  }}
                >
                  <div className="size-full p-[7.5%] pb-[18.2%] pt-[8.5%]">
                    <div
                      className="size-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(/assets/images/gustavo2.jpeg)`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="w-full self-center">
                <div className="flex flex-col items-center gap-2 ">
                  <TextBoxHero
                    title={t.rich('title', {
                      important: (chunks) => (
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                          {chunks}
                        </span>
                      ),
                    })}
                    description={t('description')}
                    buttons={
                      <>
                        <a
                          className={buttonVariants({ size: 'lg' })}
                          href="https://github.com/ixartz/SaaS-Boilerplate"
                        >
                          <RocketIcon className="mr-2 size-5" />
                          {t('primary_button')}
                        </a>

                        <a
                          className={buttonVariants({ variant: 'outline', size: 'lg' })}
                          href="https://github.com/ixartz/SaaS-Boilerplate"
                        >
                          <EnvelopeClosedIcon className="mr-2 size-5" />
                          {t('secondary_button')}
                        </a>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Section>
  );
};

export { Hero };
