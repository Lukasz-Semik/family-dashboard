import { FormattedMessage } from 'react-intl';

import {
  IconDashboard,
  IconFamily,
  IconGear,
  IconOrganizer,
  IconUser,
  IconWallet,
} from '@family-dashboard/design-system';
import { fdRoutes } from '@family-dashboard/global/const';

import { Item } from '../Item/Item';
import { ItemSignOut } from '../Item/ItemSignOut';

interface Props {
  closeSidebar?: () => void;
}

export function ItemsList({ closeSidebar }: Props) {
  return (
    <>
      <Item
        path={fdRoutes.dashboard.dashboardRoute()}
        isExact
        icon={<IconDashboard width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="dashboard.title" />}
      />

      <Item
        path={fdRoutes.dashboard.organizationRoute()}
        icon={<IconOrganizer width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="organization.title" />}
      />

      <Item
        path={fdRoutes.dashboard.financeRoute()}
        icon={<IconWallet width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="finance.title" />}
      />

      <Item
        path={fdRoutes.dashboard.familyRoute()}
        icon={<IconFamily width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="family.title" />}
      />

      <Item
        path={fdRoutes.dashboard.accountRoute()}
        icon={<IconUser width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="account.title" />}
      />

      <Item
        path={fdRoutes.dashboard.familySettingsRoute()}
        icon={<IconGear width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="familySettings.title" />}
      />

      <ItemSignOut />
    </>
  );
}
