import Image from 'next/image';

import LogoImg from '@/public/assets/images/logo.png';

const Logo = () => (
  <Image
    src={LogoImg}
    width="250"
    alt="Gustavo Oyoqui - Profesor de Español"
    className={'object-cover'}
    placeholder="blur"
    blurDataURL={LogoImg.src}
  />
);

export { Logo };
