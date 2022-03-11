import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';

import {
  BadgeSmall,
  dsStyles,
  IconClock,
} from '@family-dashboard/design-system';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { WSReminder } from '@family-dashboard/web-libs/store';

import {
  StyledBadgeWrapper,
  StyledDate,
  StyledFlexWrapper,
  StyledIconWrapper,
  StyledListItem,
  StyledTitle,
} from './DashboardRemindersList.styled';

interface Props {
  reminder: WSReminder;
}

export function DashboardRemindersListItem({ reminder }: Props) {
  return (
    <StyledListItem>
      <StyledFlexWrapper>
        <StyledIconWrapper>
          <IconClock
            width="18px"
            height="18px"
            color={dsStyles.colors.orange2}
          />
        </StyledIconWrapper>

        <StyledTitle hasBadge={Boolean(reminder.isNew)}>
          {reminder.text}
        </StyledTitle>
      </StyledFlexWrapper>

      <StyledFlexWrapper>
        {reminder.isNew && (
          <StyledBadgeWrapper>
            <BadgeSmall>
              <FormattedMessage id="shared.new" />
            </BadgeSmall>
          </StyledBadgeWrapper>
        )}
        <StyledDate>{dayjs(reminder.date).format(FULL_DATE_FORMAT)}</StyledDate>
      </StyledFlexWrapper>
    </StyledListItem>
  );
}
