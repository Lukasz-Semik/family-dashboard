import { useState } from 'react';

import { dsStyles } from '../../../utils/styles';
import { ElementCloseAnimated } from '../../Elements/ElementCloseAnimated/ElementCloseAnimated';
import { ButtonProps } from '../Button.types';
import { StyledCloseButton } from './ButtonCloseAnimated.styled';

export function ButtonCloseAnimated(props: ButtonProps) {
  const [isMarked, setIsMarked] = useState(false);
  return (
    <StyledCloseButton
      {...props}
      onBlur={(e) => {
        setIsMarked(false);
        props.onBlur?.(e);
      }}
      onMouseLeave={(e) => {
        setIsMarked(false);
        props.onMouseLeave?.(e);
      }}
      onFocus={(e) => {
        setIsMarked(true);
        props.onFocus?.(e);
      }}
      onMouseEnter={(e) => {
        setIsMarked(true);
        props.onMouseEnter?.(e);
      }}
    >
      <ElementCloseAnimated
        bgColor="transparent"
        barColor={isMarked ? dsStyles.colors.orange4 : dsStyles.colors.grey1}
        size={30}
        strokeWidth={3}
        iconColor={isMarked ? dsStyles.colors.orange4 : dsStyles.colors.grey1}
        iconSize="15px"
      />
    </StyledCloseButton>
  );
}
