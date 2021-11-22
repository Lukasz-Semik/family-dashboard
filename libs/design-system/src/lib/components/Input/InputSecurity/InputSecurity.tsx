import { useState } from 'react';

import { IconSecurity } from '../../../icons/Icons';
import { WrapperIconFormControl } from '../../Wrappers/Wrappers';
import { InputSecurityProps } from '../Input.types';
import { InputStandard } from '../InputStandard/InputStandard';
import { StyledToggleTypeButton } from './InputSecurity.styled';

export const InputSecurity = ({
  showText,
  hideText,
  ...restProps
}: InputSecurityProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonText = isVisible ? hideText : showText;

  return (
    <InputStandard
      type={isVisible ? 'text' : 'password'}
      renderLeftControls={(renderProps) => (
        <WrapperIconFormControl {...renderProps}>
          <IconSecurity />
        </WrapperIconFormControl>
      )}
      renderRightControls={() => (
        <StyledToggleTypeButton
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {buttonText}
        </StyledToggleTypeButton>
      )}
      {...restProps}
    />
  );
};
