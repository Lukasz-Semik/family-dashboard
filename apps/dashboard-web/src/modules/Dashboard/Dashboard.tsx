import { FormattedMessage } from 'react-intl';

import {
  ButtonSecondary,
  dsStyles,
  useIsResolution,
} from '@family-dashboard/design-system';

import {
  StyledContentWrapper,
  StyledLeftColumn,
  StyledMarginWrapper,
  StyledRightColumn,
  StyledWrapper,
} from './Dashboard.styled';
import { DashboardCalendar } from './DashboardCalendar/DashboardCalendar';
import { DashboardMembersInfo } from './DashboardMembersInfo/DashboardMembersInfo';
import { DashboardNotifications } from './DashboardNotifications/DashboardNotifications';
import { DashboardReminders } from './DashboardReminders/DashboardReminders';

export function Dashboard() {
  const isMobile = useIsResolution(Number(dsStyles.breakpoints.xs));

  return (
    <StyledWrapper>
      <StyledMarginWrapper>
        <ButtonSecondary
          maxWidth={isMobile ? '100%' : '238px'}
          minHeight="40px"
        >
          <FormattedMessage id="shared.create" />
        </ButtonSecondary>
      </StyledMarginWrapper>

      <DashboardMembersInfo />

      <StyledContentWrapper>
        <StyledLeftColumn>
          <StyledMarginWrapper>
            <DashboardCalendar />
          </StyledMarginWrapper>
          <DashboardNotifications />
        </StyledLeftColumn>

        <StyledRightColumn>
          <DashboardReminders />
        </StyledRightColumn>
      </StyledContentWrapper>
    </StyledWrapper>
  );
}
