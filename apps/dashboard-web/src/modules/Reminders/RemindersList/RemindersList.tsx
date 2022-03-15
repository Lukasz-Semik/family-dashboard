import { FormattedMessage } from 'react-intl';

import { useSeclectReminders } from '@family-dashboard/web-libs/store';

import { StyledDescription, StyledList } from './RemindersList.styled';
import { RemindersListItem } from './RemindersListItem';

export function RemindersList() {
  const reminders = useSeclectReminders();

  return !reminders.data.length ? (
    <StyledDescription>
      <FormattedMessage id="reminders.noReminders" />
    </StyledDescription>
  ) : (
    <StyledList>
      {reminders.data.map((reminder, index) => (
        <RemindersListItem
          reminder={reminder}
          key={reminder.fullKey}
          index={index}
        />
      ))}
    </StyledList>
  );
}
