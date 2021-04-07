import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

// import CustomDrawer from './components/CustomDrawer';
import Home from './pages/Home';
import Menu from './components/Menu';
import Perfil from './pages/Perfil';
import Ranking from './pages/Ranking';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';

const Drawer = createDrawerNavigator();

export default function Routes() {

    return (

        <NavigationContainer>
            <Drawer.Navigator  initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Menu" component={Menu} />
                <Drawer.Screen name="PostDetail" component={PostDetail}/>
                <Drawer.Screen name="Perfil" component={Perfil} />
                <Drawer.Screen name="Ranking" component={Ranking} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}