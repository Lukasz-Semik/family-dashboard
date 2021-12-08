import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../../Stories.styled';
import { InputProps } from '../Input.types';
import { InputPure as InputPureComponent } from './InputPure';

export default {
  component: InputPureComponent,
  title: 'Inputs/InputPure',
} as Meta;

const Template: Story<InputProps> = (args) => (
  <StyledWrapper>
    <InputPureComponent {...args} />
  </StyledWrapper>
);

export const InputPure = Template.bind({});
InputPure.args = {
  disabled: false,
  hasError: false,
  placeholder: 'Placeholder',
  label: 'Label',
};
