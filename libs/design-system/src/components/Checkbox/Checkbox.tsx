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
  disabled,
  ...restProps
}: CheckboxProps) => {
  return (
    <StyledLabel hasError={hasError} isDisabled={disabled}>
      <StyledDefaultCheckbox
        checked={checked}
        disabled={disabled}
        {...restProps}
      />
      <StyledCheckedMarker isVisible={Boolean(checked)} isDisabled={disabled}>
        <IconCheckmark width="16px" height="16px" />
      </StyledCheckedMarker>
      <span>{label}</span>
    </StyledLabel>
  );
};
