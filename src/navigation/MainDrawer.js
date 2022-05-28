import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import Perfil from '../presentation/pages/Perfil';
import Ranking from '../presentation/pages/Ranking';
import PostCreation from '../presentation/pages/PostCreation';
import RouteNames from './RouteNames';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        style: {
          backgroundColor: '#fff',
        },
        activeBackgroundColor: '#000',
        activeTintColor: '#FFF',
        inactiveTintColor: '#000',
        itemStyle: { marginVertical: 5 },
      }}
      initialRouteName={RouteNames.HOME}
    >
      <Drawer.Screen name={RouteNames.HOME} component={HomeStack} />
      <Drawer.Screen name={RouteNames.POST_CREATION} component={PostCreation} />
      <Drawer.Screen name={RouteNames.PERFIL} component={Perfil} />
      <Drawer.Screen name={RouteNames.RANKING} component={Ranking} />
    </Drawer.Navigator>
  );
};
