import { useSeclectReminders } from '@family-dashboard/web-libs/store';

import { DashboardRemindersCreateGroup } from '../DashboardRemindersCreateGroup/DashboardRemindersCreateGroup';
import { StyledDescription, StyledList } from './DashboardRemindersList.styled';
import { DashboardRemindersListItem } from './DashboardRemindersListItem';

export function DashboardRemindersList() {
  const reminders = useSeclectReminders();

  return (
    <>
      {!reminders.data.length ? (
        <StyledDescription>No reminders. All good :) </StyledDescription>
      ) : (
        <StyledList>
          {reminders.data.map((reminder) => (
            <DashboardRemindersListItem
              reminder={reminder}
              key={reminder.fullKey}
            />
          ))}
        </StyledList>
      )}

      <DashboardRemindersCreateGroup />
    </>
  );
}
