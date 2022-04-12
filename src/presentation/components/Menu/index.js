import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import DrawerContent from '../DrawerContent';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Ranking from '../../pages/Ranking';

export default function Menu(props) {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerType="front"
      drawerStyle={{
        width: Dimensions.get('window').width * 0.74,
      }}
      children={[
        <Drawer.Screen name="Home" component={Home} />,
        // <Drawer.Screen name="Perfil" component={Perfil} />,
        <Drawer.Screen name="Ranking" component={Ranking} />,
      ]}
      drawerContent={(props) => <DrawerContent {...props} />}
    />
  );
}
