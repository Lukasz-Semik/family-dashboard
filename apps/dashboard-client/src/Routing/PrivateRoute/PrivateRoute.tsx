import { Redirect, Route, RouteProps } from 'react-router-dom';

import { FD_TOKEN_KEY } from '@dashboard-client/constants/sessionStorageKeys';
import { getFromSessionStorage } from '@dashboard-client/tempSessionStorage/tempSessionStorage';

export function PrivateRoute(props: RouteProps) {
  if (getFromSessionStorage(FD_TOKEN_KEY)) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
}
