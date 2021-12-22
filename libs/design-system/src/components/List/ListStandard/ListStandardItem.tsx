import { useState } from 'react';

import { ListItemProps } from '../List.types';
import { StyledListStandardItem } from './ListStandard.styled';

export function ListStandardItem({
  isInteractive,
  children,
  onClick,
}: ListItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledListStandardItem
      tabIndex={isInteractive ? 0 : -1}
      isInteractive={isInteractive}
      onClick={onClick}
      onMouseEnter={isInteractive ? () => setIsHovered(true) : undefined}
      onMouseLeave={isInteractive ? () => setIsHovered(false) : undefined}
      onFocus={isInteractive ? () => setIsFocused(true) : undefined}
      onBlur={isInteractive ? () => setIsFocused(false) : undefined}
    >
      {children({ isHovered, isFocused })}
    </StyledListStandardItem>
  );
}
