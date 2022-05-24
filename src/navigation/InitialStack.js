import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Preload from '../presentation/pages/Preload';
import Login from '../presentation/pages/Login';
import SignUp from '../presentation/pages/SignUp';
import HomeStack from './HomeStack';
import MainDrawer from './MainDrawer';
import RouteNames from './RouteNames';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName={RouteNames.PRELOAD}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={RouteNames.PRELOAD} component={Preload} />
    <Stack.Screen name={RouteNames.LOGIN} component={Login} />
    <Stack.Screen name={RouteNames.SIGNUP} component={SignUp} />
    {/* TO FIX: Temporally going to HomeStack to avoid Drawer problem */}
    <Stack.Screen name={RouteNames.MAIN_DRAWER} component={HomeStack} />
  </Stack.Navigator>
);