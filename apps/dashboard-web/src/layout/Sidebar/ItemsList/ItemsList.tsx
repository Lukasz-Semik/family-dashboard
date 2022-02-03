import { FormattedMessage } from 'react-intl';

import {
  IconBell,
  IconDashboard,
  IconFamily,
  IconGear,
  IconOrganizer,
  IconUser,
  IconWallet,
} from '@family-dashboard/design-system';
import { webRoutes } from '@family-dashboard/global/const';

import { Item } from '../Item/Item';
import { ItemSignOut } from '../Item/ItemSignOut';

interface Props {
  closeSidebar?: () => void;
}

export function ItemsList({ closeSidebar }: Props) {
  return (
    <>
      <Item
        path={webRoutes.dashboard.dashboardRoute.path}
        isExact
        icon={<IconDashboard width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="dashboard.title" />}
      />

      <Item
        path={webRoutes.dashboard.notificationsRoute.path}
        isExact
        icon={<IconBell width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="notifications.title" />}
      />

      <Item
        path={webRoutes.dashboard.organizationRoute.path}
        icon={<IconOrganizer width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="organization.title" />}
      />

      <Item
        path={webRoutes.dashboard.financeRoute.path}
        icon={<IconWallet width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="finance.title" />}
      />

      <Item
        path={webRoutes.dashboard.familyRoute.path}
        icon={<IconFamily width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="family.title" />}
      />

      <Item
        path={webRoutes.dashboard.accountRoute.path}
        icon={<IconUser width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="account.title" />}
      />

      <Item
        path={webRoutes.dashboard.familySettings.familySettingsRoute.path}
        icon={<IconGear width="18px" height="18px" />}
        closeSidebar={closeSidebar}
        content={<FormattedMessage id="familySettings.title" />}
      />

      <ItemSignOut />
    </>
  );
}
