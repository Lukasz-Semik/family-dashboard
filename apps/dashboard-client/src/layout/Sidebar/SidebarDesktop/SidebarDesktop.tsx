import { Avatar } from '@family-dashboard/design-system';

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
  return (
    <StyledWrapper>
      <CurrentDate />
      <StyledFamilyName>Semik</StyledFamilyName>
      <StyledAvatarGroupWrapper>
        <StyledAvatarWrapper>
          <Avatar>ŁS</Avatar>
        </StyledAvatarWrapper>
        <StyledName>Łukasz</StyledName>
      </StyledAvatarGroupWrapper>

      <ItemsList />
    </StyledWrapper>
  );
}
