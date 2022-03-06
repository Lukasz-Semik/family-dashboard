import { Meta, Story } from '@storybook/react';

import { IconEmail } from '../../../icons/Icons';
import { ErrorMessage } from '../../Errors/ErrorMessage/ErrorMessage';
import { StyledWrapper } from '../../Stories.styled';
import { WrapperIconFormControl } from '../../Wrappers/Wrappers';
import { InputProps } from '../Input.types';
import { InputStandard as InputStandardComponent } from './InputStandard';

export default {
  component: InputStandardComponent,
  title: 'Inputs/InputStandard',
} as Meta;

const Template: Story<InputProps> = (args) => (
  <StyledWrapper>
    <InputStandardComponent {...args} />
  </StyledWrapper>
);

export const InputStandard = Template.bind({});
InputStandard.args = {
  disabled: false,
  hasError: false,
  placeholder: 'Placeholder',
  label: 'Label',
};

export const InputStandardWithLeftIcon = Template.bind({});
InputStandardWithLeftIcon.args = {
  disabled: false,
  hasError: false,
  placeholder: 'Placeholder',
  label: 'Label',
  renderLeftControls: (renderProps) => (
    <WrapperIconFormControl {...renderProps}>
      <IconEmail />
    </WrapperIconFormControl>
  ),
};

export const InputStandardWithIconAndError = Template.bind({});
InputStandardWithIconAndError.args = {
  disabled: false,
  hasError: false,
  placeholder: 'Placeholder',
  label: 'Label',
  renderLeftControls: (renderProps) => (
    <WrapperIconFormControl {...renderProps}>
      <IconEmail />
    </WrapperIconFormControl>
  ),
  renderError: (renderProps) => (
    <ErrorMessage isVisible={renderProps.hasError}>Error</ErrorMessage>
  ),
};
