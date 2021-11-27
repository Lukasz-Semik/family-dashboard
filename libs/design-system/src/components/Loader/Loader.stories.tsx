import { Meta, Story } from '@storybook/react';

import { dsStyles } from '../../utils/styles';
import { Loader as LoaderComponent } from './Loader';
import { LoaderProps } from './Loader.types';

export default {
  component: LoaderComponent,
  title: 'Loader',
} as Meta;

const Template: Story<LoaderProps> = (args) => <LoaderComponent {...args} />;

export const Loader = Template.bind({});
Loader.args = {
  size: 50,
  color: dsStyles.colors.violet2,
};
