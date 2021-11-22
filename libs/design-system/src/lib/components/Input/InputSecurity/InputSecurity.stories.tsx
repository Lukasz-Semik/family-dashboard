import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../../Stories.styled';
import { InputSecurityProps } from '../Input.types';
import { InputSecurity as InputSecurityComponent } from './InputSecurity';

export default {
  component: InputSecurityComponent,
  title: 'InputSecurity',
} as Meta;

const Template: Story<InputSecurityProps> = (args) => (
  <StyledWrapper>
    <InputSecurityComponent {...args} />
  </StyledWrapper>
);

export const InputSecurity = Template.bind({});
InputSecurity.args = {
  disabled: false,
  hasError: false,
  placeholder: 'Placeholder',
  label: 'Label',
  hideText: 'Hide',
  showText: 'Show',
};
