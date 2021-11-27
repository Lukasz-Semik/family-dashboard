import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';

import { Login } from '@family-dashboard/api-graphql';
import { CTLoginResponse } from '@family-dashboard/common-types';
import { FD_TOKEN_KEY } from '@family-dashboard/global-constants';
import { sdkSetToSessionStorage } from '@family-dashboard/sdk';

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
          sdkSetToSessionStorage(FD_TOKEN_KEY, data?.login?.accessToken);
          history.push('/dashboard');
        }
      },
      onError: (a) => {
        console.log(a.message);
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
