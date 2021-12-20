import { Avatar } from '@family-dashboard/design-system';
import {
  useSelectFamilyData,
  useSelectUserData,
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
  const user = useSelectUserData();
  const family = useSelectFamilyData();

  return (
    <StyledWrapper>
      <CurrentDate />
      <StyledFamilyName>{family.name}</StyledFamilyName>
      <StyledAvatarGroupWrapper>
        <StyledAvatarWrapper>
          <Avatar>{`${user.firstName.charAt(0)}${user.lastName.charAt(
            0
          )}`}</Avatar>
        </StyledAvatarWrapper>
        <StyledName>{user.firstName}</StyledName>
      </StyledAvatarGroupWrapper>

      <ItemsList />
    </StyledWrapper>
  );
}
