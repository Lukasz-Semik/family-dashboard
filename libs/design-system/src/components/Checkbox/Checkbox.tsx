import { IconCheckmark } from '../../icons/Icons';
import {
  StyledCheckedMarker,
  StyledDefaultCheckbox,
  StyledLabel,
} from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({
  hasError,
  label,
  checked,
  ...restProps
}: CheckboxProps) => {
  return (
    <StyledLabel hasError={hasError}>
      <StyledDefaultCheckbox checked={checked} {...restProps} />
      <StyledCheckedMarker isVisible={Boolean(checked)}>
        <IconCheckmark width="16px" height="16px" />
      </StyledCheckedMarker>
      <span>{label}</span>
    </StyledLabel>
  );
};
