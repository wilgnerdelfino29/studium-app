import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// import CustomDrawer from './components/CustomDrawer';

import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Ranking from '../../pages/Ranking';


export default function Menu() {

    return (

        <Drawer.Navigator 
        drawerType="slide" 
        // drawerStyle={{ backgroundColor: '#365FB7', }}
        // drawerPosition="right"
        // drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Ranking" component={Ranking} />
        </Drawer.Navigator>

    );
}