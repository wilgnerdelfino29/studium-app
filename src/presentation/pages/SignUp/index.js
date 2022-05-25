import React, { useState } from 'react';

//services
import { createUser } from '../../../services/User/UserService';

//components
import Field from '../../components/Field';
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
import StudiumLogo from '../../../assets/logo.png';
import RouteNames from '../../../navigation/RouteNames';

export default function SignUp({ navigation }) {
  const [emailField, setEmailField] = useState('');
  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const [isUsernameFieldValid, setUsernameFieldValidation] = useState(true);
  const [isPasswordFieldValid, setPasswordFieldValidation] = useState(true);
  const [isEmailFieldValid, setEmailFieldValidation] = useState(true);

  const handleLoginButtonClick = () => {
    console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.LOGIN);
    navigation.navigate(RouteNames.LOGIN);
  };

  const fieldsAreValids = () => {
    setUsernameFieldValidation(true);
    setPasswordFieldValidation(true);
    setEmailFieldValidation(true);
    if (emailField === '' || usernameField === '' || passwordField === '') {
      if (usernameField === '') {
        setUsernameFieldValidation(false);
      }
      if (passwordField === '') {
        setPasswordFieldValidation(false);
      }
      if (emailField === '') {
        setEmailFieldValidation(false);
      }
      return false;
    }
    return true;
  };

  const handleSignUpButtonClick = async () => {
    if (!fieldsAreValids()) {
      return;
    }
    const hasSuccess = await createUser(
      usernameField,
      emailField,
      passwordField
    );
    console.log('hasSuccess: ' + hasSuccess);
    if (hasSuccess) {
      console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.HOME);
      navigation.navigate(RouteNames.MAIN_DRAWER);
    }
  };

  return (
    <Container center={true}>
      <Logo source={StudiumLogo} />

      <InputArea>
        <Field
          iconName={'mail'}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          valid={isEmailFieldValid}
        />
        <Divider />
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
        <CustomButton onPress={handleSignUpButtonClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
        <SignMessageButton onPress={handleLoginButtonClick}>
          <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
        </SignMessageButton>
      </InputArea>
    </Container>
  );
}
