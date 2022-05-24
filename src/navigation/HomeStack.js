import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../presentation/pages/Home';
import PostDetail from '../presentation/pages/PostDetail';
import RouteNames from './RouteNames';

const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <HomeStack.Screen name={RouteNames.HOME} component={Home} />
      <HomeStack.Screen name={RouteNames.POST_DETAIL} component={PostDetail} />
    </HomeStack.Navigator>
  );
};
