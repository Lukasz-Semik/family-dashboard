import { Redirect, Route, RouteProps } from 'react-router-dom';

import { sdkGetFromSessionStorage } from '@family-dashboard/sdk';

import { FD_TOKEN_KEY } from '../../constants/sessionStorageKeys';

export function PrivateRoute(props: RouteProps) {
  if (sdkGetFromSessionStorage(FD_TOKEN_KEY)) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
}
