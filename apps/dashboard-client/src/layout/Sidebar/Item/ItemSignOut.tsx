import { useHistory } from 'react-router-dom';

import { IconSignOut } from '@family-dashboard/design-system';
import { fdRoutes } from '@family-dashboard/global/const';

import {
  StyledContent,
  StyledIconWrapper,
  StyledSignOutWrapper,
  StyledWrapper,
} from './Item.styled';

export function ItemSignOut() {
  const history = useHistory();

  const onClick = () => {
    sessionStorage.clear();
    history.push(fdRoutes.auth.signInRoute.path);
  };

  return (
    <StyledSignOutWrapper>
      <StyledWrapper onClick={onClick}>
        <StyledIconWrapper>
          <IconSignOut width="22px" height="22px" />
        </StyledIconWrapper>
        <StyledContent>
          {/* TODO: translations */}
          Sign Out
        </StyledContent>
      </StyledWrapper>
    </StyledSignOutWrapper>
  );
}
