import {
  IconClock,
  LoaderSimple,
  WrapperCenter,
} from '@family-dashboard/design-system';

import { DashboardCard } from '../DashboardCard/DashboardCard';
import { useGetReminders } from './_hooks/useGetReminders';
import { DashboardRemindersList } from './DashboardRemindersList/DashboardRemindersList';

export function DashboardReminders() {
  const { isLoading } = useGetReminders();

  return (
    <DashboardCard
      title="Reminders"
      icon={<IconClock width="20px" height="20px" />}
      height="100%"
    >
      {isLoading ? (
        <WrapperCenter>
          <LoaderSimple />
        </WrapperCenter>
      ) : (
        <DashboardRemindersList />
      )}
    </DashboardCard>
  );
}
