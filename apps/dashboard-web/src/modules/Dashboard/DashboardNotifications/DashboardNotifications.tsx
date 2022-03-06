import { FormattedMessage } from 'react-intl';

import { IconBell } from '@family-dashboard/design-system';

import { DashboardCard } from '../DashboardCard/DashboardCard';
import { StyledEmptyMessage } from './DashboardNotifications.styled';

export function DashboardNotifications() {
  return (
    <DashboardCard
      title={<FormattedMessage id="notifications.title" />}
      icon={<IconBell />}
    >
      <StyledEmptyMessage>
        <FormattedMessage id="notifications.allSeen" />
      </StyledEmptyMessage>
    </DashboardCard>
  );
}
