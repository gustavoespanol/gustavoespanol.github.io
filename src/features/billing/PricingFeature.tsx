import { CheckIcon } from '@radix-ui/react-icons';

const PricingFeature = (props: { children: React.ReactNode }) => (
  <li className="flex text-left text-muted-foreground">
    <CheckIcon className="size-6 text-purple-400" />
    {props.children}
  </li>
);

export { PricingFeature };
