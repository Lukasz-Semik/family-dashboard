import { GlobalStylesDefault } from '../src/components/GlobalStylesDefault/GlobalStylesDefault';

export const decorators = [
  (Story) => (
    <>
      <GlobalStylesDefault />
      <Story />
    </>
  ),
];
