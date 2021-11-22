import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../../Stories.styled';
import { ButtonProps } from '../Button.types';
import { ButtonSecondary as ButtonSecondaryComponent } from './ButtonSecondary';

export default {
  component: ButtonSecondaryComponent,
  title: 'ButtonSecondary',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <StyledWrapper>
    <ButtonSecondaryComponent {...args} />
  </StyledWrapper>
);

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  children: 'Submit',
  disabled: false,
  isLoading: false,
};
