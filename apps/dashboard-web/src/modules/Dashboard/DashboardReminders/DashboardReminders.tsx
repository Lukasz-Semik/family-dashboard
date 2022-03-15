import {
  IconClock,
  LoaderSimple,
  WrapperCenter,
} from '@family-dashboard/design-system';

import { useReminders } from '../../Reminders/_hooks/useReminders';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { DashboardRemindersList } from './DashboardRemindersList/DashboardRemindersList';

export function DashboardReminders() {
  const { isLoading } = useReminders();

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
