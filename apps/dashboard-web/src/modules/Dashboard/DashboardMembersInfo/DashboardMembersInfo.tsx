import { FormattedMessage } from 'react-intl';

import { ButtonStandard, ErrorBox } from '@family-dashboard/design-system';
import { webRoutes } from '@family-dashboard/global/const';

import { useMembersInfo } from './_hooks/useMembersInfo';
import { StyledWrapper } from './DashboardMembersInfo.styled';
import {
  StyledCard,
  StyledHeader,
  StyledLink,
} from './DashboardMembersInfo.styled';

export function DashboardMembersInfo() {
  const {
    invitationsQuantity,
    shouldShowPrirityError,
    redirectToCreateMember,
  } = useMembersInfo();

  if (shouldShowPrirityError) {
    return (
      <>
        <StyledWrapper>
          <ErrorBox>
            <FormattedMessage id="dashboard.noInvitationsMembersWarning" />
          </ErrorBox>
        </StyledWrapper>

        <ButtonStandard onClick={redirectToCreateMember} maxWidth="16rem">
          <FormattedMessage id="familySettings.addMember" />
        </ButtonStandard>
      </>
    );
  }

  if (invitationsQuantity) {
    return (
      <StyledCard>
        <StyledHeader>
          <FormattedMessage
            id="familySettings.pendingInvitationsInfo"
            values={{ value: invitationsQuantity }}
          />
        </StyledHeader>
        <StyledLink
          to={webRoutes.dashboard.familySettings.familySettingsRoute.path}
        >
          <FormattedMessage id="familySettings.goToFamilySettings" />
        </StyledLink>
      </StyledCard>
    );
  }

  return null;
}
