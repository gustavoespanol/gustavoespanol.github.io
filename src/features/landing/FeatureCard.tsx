const FeatureCard = (props: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="mt-2 text-lg font-bold text-purple-500 ">{props.title}</div>

    <div className="my-3 w-8 border border-gray-400" />

    <div className="mt-2 text-muted-foreground">{props.children}</div>
  </div>
);

export { FeatureCard };
