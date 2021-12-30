import { useState } from 'react';

import { dsStyles } from '../../../utils/styles';
import {
  StyledInput,
  StyledLabel,
  StyledLabelContent,
  StyledWrapper,
} from '../Input.styled';
import { InputProps } from '../Input.types';

export const InputStandard = ({
  hasError,
  label,
  disabled,
  renderLeftControls,
  renderRightControls,
  renderError,
  labelBgColor = dsStyles.colors.orange1,
  ...restProps
}: InputProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledWrapper>
      <StyledLabel
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isDisabled={disabled}
        hasError={hasError}
      >
        <StyledLabelContent bgColor={labelBgColor}>{label}</StyledLabelContent>
        {renderLeftControls?.({
          isFocused,
          isHovered,
          hasError,
          isDisabled: disabled,
        })}
        <StyledInput
          {...restProps}
          onFocus={(event) => {
            setIsFocused(true);
            restProps.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            restProps.onBlur?.(event);
          }}
          disabled={disabled}
        />
        {renderRightControls?.({
          isFocused,
          isHovered,
          hasError,
          isDisabled: disabled,
        })}
      </StyledLabel>
      {renderError?.({ isFocused, isHovered, hasError, isDisabled: disabled })}
    </StyledWrapper>
  );
};
