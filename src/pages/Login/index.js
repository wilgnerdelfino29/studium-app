import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    InputArea,
    Logo,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Field from '../../components/Field';
import StudiumLogo from '../../assets/logo.png';


export default function Login() {

    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    function handleLoginButtonClick() {
        console.log("[NAVEGAÇÃO]"+"Navegando para Home");
        navigation.navigate('MainDrawer');
    }
    
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
                    placeholder="Digite seu nome de usuário"
                    value={usernameField}
                    onChangeText={t=>setUsernameField(t)}
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

            <SignMessageButton onPress={handleSignUpButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>



        </Container>
    )
}