import { Switch } from 'react-router-dom';

import { webRoutes } from '@family-dashboard/global/const';

// import { FamilySettingsCreateMemberPage } from '../../modules/FamilySettings/FamilySettingsCreateMemberPage/FamilySettingsCreateMemberPage';
import { FamilySettingsPage } from '../../modules/FamilySettings/FamilySettingsPage/FamilySettingsPage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

export function FamilySettingsRouting() {
  return (
    <Switch>
      <PrivateRoute
        exact
        path={webRoutes.dashboard.familySettings.familySettingsRoute.path}
        component={FamilySettingsPage}
      />

      {/* <PrivateRoute
        exact
        path={
          webRoutes.dashboard.familySettings.familySettingsCreateUserRoute.path
        }
        component={FamilySettingsCreateMemberPage}
      /> */}
    </Switch>
  );
}
