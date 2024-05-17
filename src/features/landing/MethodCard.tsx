import Image from 'next/image';
import React from 'react';

type Bullet = {
  title: string;
  desc: string;
  icon: any;
};

const MethodCard = (props: {
  imgPosition: 'right' | 'left';
  title: string;
  description: string;
  image: any;
  bullets: Bullet[];
}) => (
  <div className="flex flex-wrap lg:flex-nowrap lg:gap-10 ">
    <div
      className={`flex w-full items-center justify-center lg:w-1/2 ${
        props.imgPosition === 'right' ? 'lg:order-1' : ''
      }`}
    >
      <div>
        <Image
          src={props.image}
          width="521"
          alt="Benefits"
          className={'object-cover'}
          placeholder="blur"
          blurDataURL={props.image.src}
        />
      </div>
    </div>

    <div
      className={`flex w-full flex-wrap items-center lg:w-1/2 ${
        props.imgPosition === 'right' ? 'lg:justify-end' : ''
      }`}
    >
      <div>
        <div className="mt-4 flex w-full flex-col">
          <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-snug tracking-tight lg:text-3xl lg:leading-tight">
            {props.title}
          </h3>

          <span className="max-w-2xl py-4 leading-normal text-muted-foreground">
            {props.description}
          </span>
        </div>

        <div className="mt-5 w-full">
          {props.bullets.map((item, index) => (
            <Benefit key={index} title={item.title} icon={item.icon}>
              {item.desc}
            </Benefit>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Benefit = (props: { key: number; icon: any; title: string; children: React.ReactNode }) => {
  return (
    <>
      <div className="mt-8 flex items-start space-x-3">
        <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
          {React.cloneElement(props.icon, {
            className: 'w-7 h-7 text-indigo-50',
          })}
        </div>
        <div>
          <h4 className="font-medium">{props.title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{props.children}</p>
        </div>
      </div>
    </>
  );
};

export { MethodCard };
