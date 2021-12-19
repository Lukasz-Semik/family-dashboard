import { Meta, Story } from '@storybook/react';

import { dsStyles } from '../../../utils/styles';
import { LoaderProps } from '../Loader.types';
import { LoaderSimple as LoaderComponent } from './LoaderSimple';

export default {
  component: LoaderComponent,
  title: 'Loaders/LoaderSimple',
} as Meta;

const Template: Story<LoaderProps> = (args) => <LoaderComponent {...args} />;

export const LoaderSimple = Template.bind({});
LoaderSimple.args = {
  size: 50,
  color: dsStyles.colors.violet2,
};
