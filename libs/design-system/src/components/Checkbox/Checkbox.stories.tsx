import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../Stories.styled';
import { Checkbox as CheckboxComponent } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  component: CheckboxComponent,
  title: 'Checkbox',
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <StyledWrapper>
    <CheckboxComponent {...args} />
  </StyledWrapper>
);

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Are you agreed?',
  hasError: false,
  checked: false,
};
