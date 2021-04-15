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


export default function SingUp() {

    const [emailField, setEmailField] = useState('');
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    function handleLoginButtonClick() {
        console.log("[NAVEGAÇÃO]"+"Navegando para SignUp");
        navigation.navigate("Login")
    }
    
    function handleSignUpButtonClick() {
        
    }

    return(
        <Container>
            <Logo source={StudiumLogo} />

            <InputArea>
                <Field 
                    iconName={"mail"} 
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
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
                
                <CustomButton onPress={handleSignUpButtonClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleLoginButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>



        </Container>
    )
}