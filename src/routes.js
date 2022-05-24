import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './navigation/InitialStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
}
