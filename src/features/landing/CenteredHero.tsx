import Image from 'next/image';

const CenteredHero = (props: {
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="flex flex-col gap-6 md:flex-row">
    <Image
      src="/assets/images/hero.png"
      alt={'Hero image'}
      width={0}
      height={0}
      className="size-full self-center md:size-1/2"
    />
    <div>
      <div className="text-center"></div>

      <div className="mt-3 text-center text-4xl font-bold tracking-tight">{props.title}</div>

      <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
        {props.description}
      </div>

      <div className="mt-8 flex flex-row justify-center gap-x-5">{props.buttons}</div>
    </div>
  </div>
);

export { CenteredHero };
