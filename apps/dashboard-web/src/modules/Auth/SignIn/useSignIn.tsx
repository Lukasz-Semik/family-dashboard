import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import { Login } from '@family-dashboard/fe-libs/api-graphql';
import { FD_TOKEN_KEY, webRoutes } from '@family-dashboard/global/const';
import { sdkSetToSessionStorage } from '@family-dashboard/global/sdk';
import { CTLoginResponse } from '@family-dashboard/global/types';

interface Values {
  email: string;
  password: string;
}

export function useSignIn() {
  const history = useHistory();

  const [login, { loading }] = useMutation<{ login: CTLoginResponse }, Values>(
    Login,
    {
      onCompleted: (data) => {
        if (data?.login?.accessToken) {
          sdkSetToSessionStorage(FD_TOKEN_KEY, data.login.accessToken);
          history.push(webRoutes.dashboard.dashboardRoute.path);
        }
      },
      onError: () => {
        showErrorToast(<FormattedMessage id="errors.wrongSignIn" />);
      },
    }
  );

  const onSubmit = (values: Values) => {
    login({
      variables: { email: values.email, password: values.password },
    });
  };

  return {
    onSubmit,
    isLoading: loading,
  };
}
