const CenteredHero = (props: {
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    <div className="mt-3 text-center text-5xl font-bold tracking-tight">{props.title}</div>

    <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
      {props.description}
    </div>

    <div className="mt-8 flex flex-row justify-center gap-x-5">{props.buttons}</div>
  </>
);

export { CenteredHero };
