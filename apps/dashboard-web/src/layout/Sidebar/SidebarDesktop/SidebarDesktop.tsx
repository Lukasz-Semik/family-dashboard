import { Avatar } from '@family-dashboard/design-system';
import {
  useSelectFamily,
  useSelectUser,
} from '@family-dashboard/web-libs/store';

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
      <StyledFamilyName>{family.data.details.name}</StyledFamilyName>
      <StyledAvatarGroupWrapper>
        <StyledAvatarWrapper>
          <Avatar>{`${user.data.personalDetails.firstName.charAt(
            0
          )}${user.data.personalDetails.lastName.charAt(0)}`}</Avatar>
        </StyledAvatarWrapper>
        <StyledName>{user.data.personalDetails.firstName}</StyledName>
      </StyledAvatarGroupWrapper>

      <ItemsList />
    </StyledWrapper>
  );
}
