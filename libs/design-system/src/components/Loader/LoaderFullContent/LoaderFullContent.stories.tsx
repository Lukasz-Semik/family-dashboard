import { Meta, Story } from '@storybook/react';

import { dsStyles } from '../../../utils/styles';
import { LoaderProps } from '../Loader.types';
import { LoaderFullContent as LoaderComponent } from './LoaderFullContent';

export default {
  component: LoaderComponent,
  title: 'Loaders/LoaderFullContent',
} as Meta;

const Template: Story<LoaderProps> = (args) => <LoaderComponent {...args} />;

export const LoaderFullContent = Template.bind({});
LoaderFullContent.args = {
  size: 50,
  color: dsStyles.colors.violet2,
};
