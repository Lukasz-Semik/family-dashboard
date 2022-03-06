import { FormattedMessage } from 'react-intl';

import {
  StyledHeader,
  StyledHeaderTitleWrapper,
  StyledHeading,
  StyledIconWrapper,
  StyledLink,
  StyledWrapper,
} from './DashboardCard.styled';

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: React.ReactNode;
  height?: string;
}

export function DashboardCard({ children, title, icon, height }: Props) {
  return (
    <StyledWrapper $height={height}>
      <StyledHeader>
        <StyledHeaderTitleWrapper>
          <StyledIconWrapper>{icon}</StyledIconWrapper>
          <StyledHeading>{title}</StyledHeading>
        </StyledHeaderTitleWrapper>

        <StyledLink to="/">
          <FormattedMessage id="shared.view" />
        </StyledLink>
      </StyledHeader>
      {children}
    </StyledWrapper>
  );
}
