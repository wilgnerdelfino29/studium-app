import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../styles/globalStyle';
import { Logo, LoadingIcon } from './styles';

import StudiumLogo from '../../assets/logo.png';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                //validar o token
            } else {
                navigation.reset({
                    routes: [{name: 'Login'}]
                })
            }
        }
        checkToken();
    }, [])

    return (
        <Container center={true}>
            <Logo source={StudiumLogo} />
            <LoadingIcon size="large" color="#000000"/>
        </Container>
    )
}