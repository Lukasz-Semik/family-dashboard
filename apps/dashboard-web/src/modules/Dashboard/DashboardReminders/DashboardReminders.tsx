import { IconClock } from '@family-dashboard/design-system';

import { DashboardCard } from '../DashboardCard/DashboardCard';
import { StyledDescription } from './DashboardReminders.styled';
import { DashboardRemindersCreateGroup } from './DashboardRemindersCreateGroup/DashboardRemindersCreateGroup';

export function DashboardReminders() {
  return (
    <DashboardCard
      title="Reminders"
      icon={<IconClock width="20px" height="20px" />}
      height="100%"
    >
      <StyledDescription>14 reminders within next 30 days</StyledDescription>
      <DashboardRemindersCreateGroup />
    </DashboardCard>
  );
}
