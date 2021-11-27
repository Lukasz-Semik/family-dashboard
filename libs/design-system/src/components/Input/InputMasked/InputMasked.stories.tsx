import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../../Stories.styled';
import { InputMaskedProps } from '../Input.types';
import { InputMasked as InputMaskedComponent } from './InputMasked';

export default {
  component: InputMaskedComponent,
  title: 'Inputs/InputMasked',
} as Meta;

const Template: Story<InputMaskedProps> = (args) => (
  <StyledWrapper>
    <InputMaskedComponent {...args} />
  </StyledWrapper>
);

export const InputMasked = Template.bind({});
InputMasked.args = {
  disabled: false,
  hasError: false,
  placeholder: '__-__-____',
  label: 'Label',
};
