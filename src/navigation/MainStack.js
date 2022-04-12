import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Preload from '../presentation/pages/Preload';
import Login from '../presentation/pages/Login';
import SignUp from '../presentation/pages/SignUp';
import MainDrawer from './MainDrawer';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainDrawer" component={MainDrawer} />
    {/* <Stack.Screen name="Menu" component={Menu} /> */}
  </Stack.Navigator>
);
