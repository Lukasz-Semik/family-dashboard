import React from 'react';
import { SafeAreaView } from 'react-native';

import { SignIn } from '../modules/Auth/SignIn/SignIn';

export function App() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}
