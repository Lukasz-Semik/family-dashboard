import { Redirect, Route, RouteProps } from 'react-router-dom';

import { FD_TOKEN_KEY } from '@family-dashboard/global-constants';
import { sdkGetFromSessionStorage } from '@family-dashboard/sdk';

export function PrivateRoute(props: RouteProps) {
  if (sdkGetFromSessionStorage(FD_TOKEN_KEY)) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
}
