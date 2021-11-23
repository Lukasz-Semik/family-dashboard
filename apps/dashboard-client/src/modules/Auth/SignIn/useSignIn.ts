import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { CTLoginResponse } from '@family-dashboard/common-types';

import { Login } from '@dashboard-client/api/mutations/login';
import { FD_TOKEN_KEY } from '@dashboard-client/constants/sessionStorageKeys';
import { setToSessionStorage } from '@dashboard-client/tempSessionStorage/tempSessionStorage';

interface Values {
  email: string;
  password: string;
}

export function useSignIn() {
  const history = useHistory();

  const [login] = useMutation<{ login: CTLoginResponse }, Values>(Login, {
    onCompleted: (data) => {
      if (data?.login?.accessToken) {
        setToSessionStorage(FD_TOKEN_KEY, data?.login?.accessToken);
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
