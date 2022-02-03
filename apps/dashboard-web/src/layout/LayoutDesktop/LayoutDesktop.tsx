import { useHeaderText } from '../hooks/useHeaderText';
import { SidebarDesktop } from '../Sidebar/SidebarDesktop/SidebarDesktop';
import {
  StyledContentWrapper,
  StyledTitle,
  StyledWraper,
} from './LayoutDesktop.styled';

interface Props {
  children: React.ReactNode;
}

export const LayoutDesktop = ({ children }: Props) => {
  const { headerText } = useHeaderText();

  return (
    <>
      <SidebarDesktop />
      <StyledWraper>
        <StyledContentWrapper>
          <StyledTitle>{headerText}</StyledTitle>
          {children}
        </StyledContentWrapper>
      </StyledWraper>
    </>
  );
};
