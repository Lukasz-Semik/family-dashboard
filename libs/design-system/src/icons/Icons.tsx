import { ReactComponent as IconCheckmarkSVG } from './assets/icon-checkmark.svg';
import { ReactComponent as IconChevronSVG } from './assets/icon-chevron.svg';
import { ReactComponent as IconCrossmarkSVG } from './assets/icon-crossmark.svg';
import { ReactComponent as IconCrossmarkCircleSVG } from './assets/icon-crossmark-circle.svg';
import { ReactComponent as IconEmailSVG } from './assets/icon-email.svg';
import { ReactComponent as IconSecuritySVG } from './assets/icon-security.svg';
import { IconProps } from './Icons.types';
import { IconWrapper } from './IconWrapper';

export const IconEmail = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <IconEmailSVG />
    </IconWrapper>
  );
};

export const IconSecurity = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <IconSecuritySVG />
    </IconWrapper>
  );
};

export const IconCheckmark = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <IconCheckmarkSVG />
    </IconWrapper>
  );
};

export const IconCrossmark = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <IconCrossmarkSVG />
    </IconWrapper>
  );
};

export const IconChevron = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <IconChevronSVG />
    </IconWrapper>
  );
};

export const IconCrossmarkCircle = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <IconCrossmarkCircleSVG />
    </IconWrapper>
  );
};
