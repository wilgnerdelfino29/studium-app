import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../presentation/pages/Home';
import Perfil from '../presentation/pages/Perfil';
import Ranking from '../presentation/pages/Ranking';
import PostDetail from '../presentation/pages/PostDetail';
import PostCreation from '../presentation/pages/PostCreation';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ route }) => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      initialParams={route.params}
    />
    <HomeStack.Screen name="PostDetail" component={PostDetail} />
  </HomeStack.Navigator>
);

export default ({ route }) => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={HomeStackScreen}
      initialParams={route.params}
    />
    <Drawer.Screen name="Criar Post" component={PostCreation} />
    <Drawer.Screen name="Perfil" component={Perfil} />
    <Drawer.Screen name="Ranking" component={Ranking} />
  </Drawer.Navigator>
);
