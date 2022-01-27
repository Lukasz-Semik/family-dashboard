import {
  StyledContentWrapper,
  StyledHeader,
  StyledHeaderTitle,
  StyledWrapper,
} from './AuthLayout.styled';

interface Props {
  children: React.ReactNode;
}

export function AuthLayout({ children }: Props) {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle>Family Dashboard</StyledHeaderTitle>
      </StyledHeader>

      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledWrapper>
  );
}
