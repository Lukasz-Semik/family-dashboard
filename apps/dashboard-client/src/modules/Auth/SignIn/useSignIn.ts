import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';

import { CTLoginResponse } from '@family-dashboard/common-types';
import { sdkSetToSessionStorage } from '@family-dashboard/sdk';

import { Login } from '../../../api/mutations/login';
import { FD_TOKEN_KEY } from '../../../constants/sessionStorageKeys';

interface Values {
  email: string;
  password: string;
}

export function useSignIn() {
  const history = useHistory();

  const [login] = useMutation<{ login: CTLoginResponse }, Values>(Login, {
    onCompleted: (data) => {
      if (data?.login?.accessToken) {
        sdkSetToSessionStorage(FD_TOKEN_KEY, data?.login?.accessToken);
        history.push('/dashboard');
      }
    },
    onError: (a) => {
      console.log(a);
    },
  });

  const onSubmit = (values: Values) => {
    login({
      variables: { email: values.email, password: values.password },
    });
  };

  return {
    onSubmit,
  };
}
