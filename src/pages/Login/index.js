import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import asyncStorage from '@react-native-community/async-storage';

import { LOGIN } from '../../services/api/queries';


import { 
    Container,
    Logo,
    InputArea,
    StatusField,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Field from '../../components/Field';
import StudiumLogo from '../../assets/logo.png';


export default function Login() {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [statusField, setStatusfield] = useState('');
    const [isErrorStatus, setErrorStatus] = useState(false);

    const navigation = useNavigation();

    const [doLogin, { data, error }] = useLazyQuery(LOGIN);

    const handleLoginButtonClick = useCallback(async () => {
        try{
            console.log("[EVENTO]"+"Clicou no botão de login");
            if(emailField != '' && passwordField != '') {

                console.log("[CHAMADA]"+"Fazendo chamada na API");
                await doLogin({variables: { email: emailField, password: passwordField }});
                if(error) throw `[CHAMADA] erro na chamada na API: ${error}`
                console.log(`[CHAMADA]Sucesso!`);
                asyncStorage.setItem('@studium-token',data.login.token)
                console.log("[NAVEGAÇÃO]"+"Navegando para Home");
                navigation.navigate("MainDrawer");
            
            } else {
                console.log("Email e senha necessários");
                setErrorStatus(true);
                setStatusfield('Email e senha necessários');
            }
        } catch(_err) {
            console.log(_err);
            return
        }

    },[emailField, passwordField, data, error]);
    
    function handleSignUpButtonClick() {
        console.log("[NAVEGAÇÃO]"+"Navegando para SignUp");
        navigation.navigate('SignUp')
    }

    return(
        <Container>
            <Logo source={StudiumLogo} />

            <InputArea>
                <Field 
                    iconName={"user"} 
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <Field 
                    iconName={"lock"} 
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                
                <CustomButton onPress={handleLoginButtonClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>
            
            <StatusField error={isErrorStatus}> {statusField} </StatusField>

            <SignMessageButton onPress={handleSignUpButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>



        </Container>
    )
}