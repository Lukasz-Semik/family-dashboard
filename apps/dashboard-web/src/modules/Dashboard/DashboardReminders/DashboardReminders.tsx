import { FormattedMessage } from 'react-intl';

import { IconClock } from '@family-dashboard/design-system';

import { DashboardCard } from '../DashboardCard/DashboardCard';
import { StyledButton, StyledDescription } from './DashboardReminders.styled';

export function DashboardReminders() {
  return (
    <DashboardCard
      title="Reminders"
      icon={<IconClock width="20px" height="20px" />}
      height="100%"
    >
      <StyledDescription>14 reminders within next 30 days</StyledDescription>
      <StyledButton>
        <FormattedMessage id="reminders.create" />
      </StyledButton>
    </DashboardCard>
  );
}
