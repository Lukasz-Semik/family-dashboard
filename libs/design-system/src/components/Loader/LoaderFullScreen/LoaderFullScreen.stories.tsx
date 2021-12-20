import { Meta, Story } from '@storybook/react';

import { dsStyles } from '../../../utils/styles';
import { LoaderFullScreenProps } from '../Loader.types';
import { LoaderFullScreen as LoaderComponent } from './LoaderFullScreen';

export default {
  component: LoaderComponent,
  title: 'Loaders/LoaderFullScreen',
} as Meta;

const Template: Story<LoaderFullScreenProps> = (args) => (
  <LoaderComponent {...args} />
);

export const LoaderFullScreen = Template.bind({});
LoaderFullScreen.args = {
  size: 50,
  color: dsStyles.colors.violet2,
  content: 'Loading your app...',
};
