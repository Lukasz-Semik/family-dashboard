import { StyledWrapper } from './Avatar.styled';
import { AvatarProps } from './Avatar.types';

export function Avatar({ children, size = '2rem' }: AvatarProps) {
  return <StyledWrapper $size={size}>{children}</StyledWrapper>;
}
