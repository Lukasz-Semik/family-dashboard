import { Meta, Story } from '@storybook/react';

import { StyledWrapper } from '../../Stories.styled';
import { ButtonProps } from '../Button.types';
import { ButtonStandard as ButtonStandardComponent } from './ButtonStandard';

export default {
  component: ButtonStandardComponent,
  title: 'Buttons/uttonStandard',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <StyledWrapper>
    <ButtonStandardComponent {...args} />
  </StyledWrapper>
);

export const ButtonStandard = Template.bind({});
ButtonStandard.args = {
  children: 'Submit',
  disabled: false,
  isLoading: false,
};
