import { RemindersList } from '../../../Reminders/RemindersList/RemindersList';
import { DashboardRemindersCreateGroup } from '../DashboardRemindersCreateGroup/DashboardRemindersCreateGroup';
import { StyledWrapper } from './DashboardRemindersList.styled';

export function DashboardRemindersList() {
  return (
    <>
      <StyledWrapper>
        <RemindersList />
      </StyledWrapper>

      <DashboardRemindersCreateGroup />
    </>
  );
}
