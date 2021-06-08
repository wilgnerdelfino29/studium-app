import React, { useEffect } from 'react';
import { Container, Logo, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import StudiumLogo from '../../assets/logo.png';

export default function Preload() {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('@studium-token');
            if (token) {
                navigation.navigate('MainDrawer')
            } else {
                navigation.reset({
                    routes: [{name: 'Login'}]
                })
            }
        }
        checkToken();
    }, [])

    return (
        <Container>
            <Logo source={StudiumLogo} />
            <LoadingIcon size="large" color="#000000"/>
        </Container>
    )
}