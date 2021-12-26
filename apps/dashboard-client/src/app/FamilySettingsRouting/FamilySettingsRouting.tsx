import { Switch } from 'react-router-dom';

import { LoaderFullContent } from '@family-dashboard/design-system';
import { fdRoutes } from '@family-dashboard/global/const';

import { FamilySettingsPage } from '../../modules/FamilySettings/FamilySettingsPage/FamilySettingsPage';
import { useGetAllFamilyMembers } from '../_dataHooks/useGetAllFamilyMembers';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

export function FamilySettingsRouting() {
  const { isLoading } = useGetAllFamilyMembers();

  if (isLoading) {
    return <LoaderFullContent />;
  }

  return (
    <Switch>
      <PrivateRoute
        exact
        path={fdRoutes.dashboard.familySettings.familySettingsRoute()}
        component={FamilySettingsPage}
      />

      <PrivateRoute
        exact
        path={fdRoutes.dashboard.familySettings.familySettingsCreateUserRoute()}
        render={() => <div>Create user</div>}
      />
    </Switch>
  );
}
