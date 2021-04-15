import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
// import Menu from '../components/Menu';
import Perfil from '../pages/Perfil';
import Ranking from '../pages/Ranking';
import PostDetail from '../pages/PostDetail';

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator  initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Menu" component={Menu} /> */}
        <Drawer.Screen name="PostDetail" component={PostDetail}/>
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Ranking" component={Ranking} />
    </Drawer.Navigator>
)