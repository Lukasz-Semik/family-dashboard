import { StyledIcon } from './Icons.styled';
import { IconWrapperProps } from './Icons.types';

export function IconWrapper({
  width,
  height,
  color,
  children,
  ...restProps
}: IconWrapperProps) {
  return (
    <StyledIcon $color={color} $width={width} $height={height} {...restProps}>
      {children}
    </StyledIcon>
  );
}
