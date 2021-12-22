import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { ButtonStandard } from '@family-dashboard/design-system';
import { useSelectFamily } from '@family-dashboard/fe-libs/fd-store';
import { fdRoutes } from '@family-dashboard/global/const';

import { FamilySettingsInvitationsList } from './FamilySettingsInvitationsList/FamilySettingsInvitationsList';
import { FamilySettingsMembersList } from './FamilySettingsMembersList/FamilySettingsMembersList';
import {
  StyledAddMemberButtonWrapper,
  StyledListsWrapper,
  StyledListWrapper,
} from './FamilySettingsPage.styled';

export function FamilySettingsPage() {
  const history = useHistory();
  const family = useSelectFamily();
  console.log(family);
  return (
    <StyledListsWrapper>
      <StyledAddMemberButtonWrapper>
        <ButtonStandard
          onClick={() =>
            history.push(
              fdRoutes.dashboard.familySettings.familySettingsCreateUserRoute()
            )
          }
        >
          <FormattedMessage id="familySettings.addMember" />
        </ButtonStandard>
      </StyledAddMemberButtonWrapper>

      <StyledListWrapper>
        <FamilySettingsInvitationsList />
      </StyledListWrapper>

      <FamilySettingsMembersList />
    </StyledListsWrapper>
  );
}
