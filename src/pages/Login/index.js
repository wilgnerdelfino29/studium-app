import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, ScrollView } from 'react-native';

import styles from './styles';

import Field from '../../components/Field';


export default function Login() {

    const navigation = useNavigation();

    function navigateToHome() {
        console.log("[NAVEGAÇÃO]"+"Navegando para Home");
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>

            <View style={styles.inputGroup}>
                <Field text="Usuário"/>
                <Field text="Senha"/>
            </View>

            <Button
                title="Login"
                onPress={navigateToHome}
                color="#365FB7"
            />

        </View>
    )
}