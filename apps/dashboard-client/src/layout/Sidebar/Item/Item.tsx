import { useHistory } from 'react-router-dom';

import { StyledContent, StyledIconWrapper, StyledWrapper } from './Item.styled';

interface Props {
  icon: React.ReactNode;
  content: React.ReactNode;
  path: string;
  isExact?: boolean;
  closeSidebar?: () => void;
}

export function Item({ icon, content, path, isExact, closeSidebar }: Props) {
  const history = useHistory();

  const isActive = isExact
    ? history.location.pathname === path
    : history.location.pathname.includes(path);

  const onClick = () => {
    closeSidebar?.();
    history.push(path);
  };

  return (
    <StyledWrapper onClick={onClick} isActive={isActive}>
      <StyledIconWrapper>{icon}</StyledIconWrapper>
      <StyledContent>{content}</StyledContent>
    </StyledWrapper>
  );
}
