import React, { useState } from 'react';

//services
import { login } from '../../../services/Auth/AuthService';

//components
import Field from '../../components/Field';
import StudiumLogo from '../../../assets/logo.png';
import Divider from '../../components/Divider';

//styles
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
} from '../../../styles/globalStyle';
import {
  Logo,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

//others
import RouteNames from '../../../navigation/RouteNames';

export default function Login({ navigation }) {
  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const [isUsernameFieldValid, setUsernameFieldValidation] = useState(true);
  const [isPasswordFieldValid, setPasswordFieldValidation] = useState(true);

  const fieldsAreValids = () => {
    setUsernameFieldValidation(true);
    setPasswordFieldValidation(true);
    if (usernameField === '' || passwordField === '') {
      if (usernameField === '') {
        setUsernameFieldValidation(false);
      }
      if (passwordField === '') {
        setPasswordFieldValidation(false);
      }
      return false;
    }
    return true;
  };

  const handleLoginButtonClick = async () => {
    if (!fieldsAreValids()) {
      return;
    }
    const hasSuccess = await login(usernameField, passwordField);
    if (hasSuccess) {
      console.log(
        '[NAVEGAÇÃO] Navegando para ' +
          RouteNames.HOME +
          ', com o parâmetro posts:'
      );
      console.log(hasSuccess.data);

      navigation.navigate(RouteNames.MAIN_DRAWER, {
        posts: hasSuccess.data,
      });
    }
  };

  const handleSignUpButtonClick = () => {
    console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.SIGNUP);
    navigation.navigate(RouteNames.SIGNUP);
  };

  return (
    <Container center={true}>
      <Logo source={StudiumLogo} />
      <InputArea>
        <Field
          iconName={'user'}
          placeholder="Digite seu nome de usuário"
          value={usernameField}
          onChangeText={(t) => setUsernameField(t)}
          valid={isUsernameFieldValid}
        />
        <Divider />
        <Field
          iconName={'lock'}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
          valid={isPasswordFieldValid}
        />
        <Divider />
        <CustomButton onPress={handleLoginButtonClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
        <SignMessageButton onPress={handleSignUpButtonClick}>
          <SignMessageButtonText>
            Ainda não possui uma conta?
          </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
      </InputArea>
    </Container>
  );
}
