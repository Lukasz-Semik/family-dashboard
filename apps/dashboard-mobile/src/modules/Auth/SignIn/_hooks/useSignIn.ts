import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Login } from '@family-dashboard/fe-libs/api-graphql';
import {
  FD_TOKEN_KEY,
  MobileStackParamList,
} from '@family-dashboard/global/const';
import { CTLoginResponse } from '@family-dashboard/global/types';

export interface Values {
  email: string;
  password: string;
}

export function useSignIn() {
  const navigation =
    useNavigation<NativeStackNavigationProp<MobileStackParamList, 'SignIn'>>();
  const [login, { loading }] = useMutation<{ login: CTLoginResponse }, Values>(
    Login,
    {
      onCompleted: async (data) => {
        await AsyncStorage.setItem(FD_TOKEN_KEY, data.login.accessToken);
        navigation.navigate('Dashboard');
      },
      onError: (e) => {
        console.log({ e });
      },
    }
  );

  const onSubmit = useCallback(
    (values: Values) => {
      login({
        variables: {
          email: values.email.toLocaleLowerCase(),
          password: values.password,
        },
      });
    },
    [login]
  );

  return {
    onSubmit,
    isLoading: loading,
  };
}
