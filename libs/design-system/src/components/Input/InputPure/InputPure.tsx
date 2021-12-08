import { forwardRef } from 'react';

import { InputPureProps } from '../Input.types';
import { StyledInputPure, StyledWrapper } from './InputPure.styled';

// TODO: add to storybook (create connected inputs)
export const InputPure = forwardRef<HTMLInputElement, InputPureProps>(
  ({ disabled, hasError, label, ...restProps }, ref) => {
    return (
      <StyledWrapper isDisabled={disabled} hasError={hasError}>
        <StyledInputPure
          {...restProps}
          ref={ref}
          disabled={disabled}
          aria-label={label as string}
        />
      </StyledWrapper>
    );
  }
);
