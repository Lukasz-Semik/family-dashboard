import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../../Stories.styled';
import { ButtonProps } from '../Button.types';
import { ButtonArrowBack as ButtonArrowBackComponent } from './ButtonArrowBack';

export default {
  component: ButtonArrowBackComponent,
  title: 'Buttons/ButtonArrowBack',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <StyledWrapper>
    <ButtonArrowBackComponent {...args} />
  </StyledWrapper>
);

export const ButtonArrowBack = Template.bind({});
ButtonArrowBack.args = {
  children: 'Submit',
  disabled: false,
};
