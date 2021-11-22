import { ReactComponent as IconCheckmarkSVG } from './assets/icon-checkmark.svg';
import { ReactComponent as IconEmailSVG } from './assets/icon-email.svg';
import { ReactComponent as IconSecuritySVG } from './assets/icon-security.svg';
import { StyledIcon } from './Icons.styled';
import { IconProps } from './Icons.types';

export const IconEmail = ({ width, height, color }: IconProps) => {
  return (
    <StyledIcon $color={color} $width={width} $height={height}>
      <IconEmailSVG />
    </StyledIcon>
  );
};

export const IconSecurity = ({ width, height, color }: IconProps) => {
  return (
    <StyledIcon $color={color} $width={width} $height={height}>
      <IconSecuritySVG />
    </StyledIcon>
  );
};

export const IconCheckmark = ({ width, height, color }: IconProps) => {
  return (
    <StyledIcon $color={color} $width={width} $height={height}>
      <IconCheckmarkSVG />
    </StyledIcon>
  );
};
