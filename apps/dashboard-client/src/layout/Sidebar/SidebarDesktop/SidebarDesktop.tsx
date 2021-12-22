import { Avatar } from '@family-dashboard/design-system';
import {
  useSelectFamily,
  useSelectUser,
} from '@family-dashboard/fe-libs/fd-store';

import { CurrentDate } from '../CurrentDate/CurrentDate';
import { ItemsList } from '../ItemsList/ItemsList';
import {
  StyledAvatarGroupWrapper,
  StyledAvatarWrapper,
  StyledFamilyName,
  StyledName,
  StyledWrapper,
} from './SidebarDesktop.styled';

export function SidebarDesktop() {
  const user = useSelectUser();
  const family = useSelectFamily();

  return (
    <StyledWrapper>
      <CurrentDate />
      <StyledFamilyName>{family.data.name}</StyledFamilyName>
      <StyledAvatarGroupWrapper>
        <StyledAvatarWrapper>
          <Avatar>{`${user.data.firstName.charAt(0)}${user.data.lastName.charAt(
            0
          )}`}</Avatar>
        </StyledAvatarWrapper>
        <StyledName>{user.data.firstName}</StyledName>
      </StyledAvatarGroupWrapper>

      <ItemsList />
    </StyledWrapper>
  );
}
