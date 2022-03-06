import { FormattedMessage } from 'react-intl';

import { IconCalendar } from '@family-dashboard/design-system';

import { DashboardCard } from '../DashboardCard/DashboardCard';
import {
  StyledEmptyMessage,
  StyledTimesWrapper,
  StyledWrapper,
} from './DashboardCalendar.styled';

export function DashboardCalendar() {
  return (
    <DashboardCard
      icon={<IconCalendar width="20px" height="20px" />}
      title={<FormattedMessage id="dates.today" />}
    >
      <StyledWrapper>
        <StyledTimesWrapper />
        <StyledEmptyMessage>
          <FormattedMessage id="calendar.nothingPlannedToday" />
        </StyledEmptyMessage>
      </StyledWrapper>
    </DashboardCard>
  );
}
