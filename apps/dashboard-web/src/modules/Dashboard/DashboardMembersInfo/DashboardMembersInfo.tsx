import { FormattedMessage } from 'react-intl';

import {
  ButtonStandard,
  dsStyles,
  ErrorBox,
  useIsResolution,
} from '@family-dashboard/design-system';
import { webRoutes } from '@family-dashboard/global/const';

import { useMembersInfo } from './_hooks/useMembersInfo';
import { StyledWrapper } from './DashboardMembersInfo.styled';
import {
  StyledCard,
  StyledErrorWrapper,
  StyledHeader,
  StyledLink,
} from './DashboardMembersInfo.styled';

export function DashboardMembersInfo() {
  const {
    invitationsQuantity,
    shouldShowPrirityError,
    redirectToCreateMember,
  } = useMembersInfo();
  const isMobile = useIsResolution(Number(dsStyles.breakpoints.xs));

  if (shouldShowPrirityError) {
    return (
      <StyledWrapper>
        <StyledErrorWrapper>
          <ErrorBox>
            <FormattedMessage id="dashboard.noInvitationsMembersWarning" />
          </ErrorBox>
        </StyledErrorWrapper>

        <ButtonStandard
          onClick={redirectToCreateMember}
          maxWidth={isMobile ? '100%' : '238px'}
        >
          <FormattedMessage id="familySettings.addMember" />
        </ButtonStandard>
      </StyledWrapper>
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
