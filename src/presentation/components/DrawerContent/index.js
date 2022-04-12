import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons';

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} activeBackgroundColor={'#FFF'} /> */}
      <DrawerItem
        label="Início"
        icon={() => <SimpleLineIcons name={'home'} size={24} color="black" />}
        onPress={() => {
          props.navigation.navigate('Ranking');
        }}
        activeBackgroundColor={'#4f5'}
      />
      <DrawerItem
        label="Ranking"
        icon={() => <SimpleLineIcons name={'trophy'} size={24} color="black" />}
        onPress={() => {
          navigation.navigate('Home');
        }}
        activeBackgroundColor={'#4f5'}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
