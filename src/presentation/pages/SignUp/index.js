import React, { useState } from 'react';
import { Text } from 'react-native';
import { StackActions } from '@react-navigation/native';

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
  LoadingIcon,
} from '../../../styles/globalStyle';
import {
  Logo,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

//others
import StudiumLogo from '../../../assets/logo.png';
import RouteNames from '../../../navigation/constants/RouteNames';
import Validators from '../../constants/Validators';

export default function SignUp({ navigation }) {
  const [emailField, setEmailField] = useState('');
  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [isUsernameFieldValid, setUsernameFieldValidation] = useState(true);
  const [isPasswordFieldValid, setPasswordFieldValidation] = useState(true);
  const [isEmailFieldValid, setEmailFieldValidation] = useState(true);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [createUserErrorOccurred, setCreateUserErrorOccurred] = useState(false);

  const handleLoginButtonClick = () => {
    console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.LOGIN);
    navigation.navigate(RouteNames.LOGIN);
  };

  const fieldsAreValids = () => {
    let allFieldsAreValids = true;
    setUsernameFieldValidation(true);
    setPasswordFieldValidation(true);
    setEmailFieldValidation(true);

    if (emailField === '' || !Validators.isEmail(emailField)) {
      setEmailFieldValidation(false);
      allFieldsAreValids = false;
    }
    if (usernameField === '' || !Validators.isUsername(usernameField)) {
      setUsernameFieldValidation(false);
      allFieldsAreValids = false;
    }
    if (passwordField === '' || !Validators.isPassword(passwordField)) {
      setPasswordFieldValidation(false);
      allFieldsAreValids = false;
    }

    return allFieldsAreValids;
  };

  const handleSignUpButtonClick = async () => {
    setCreateUserErrorOccurred(false);
    if (!fieldsAreValids()) {
      return;
    }
    setIsLoadingPage(true);
    const response = await createUser(usernameField, emailField, passwordField);
    setIsLoadingPage(false);
    if (response === 'Request failed with status code 400') {
      setCreateUserErrorOccurred(true);
    }
    if (response === true) {
      console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.HOME);
      navigation.dispatch(StackActions.replace(RouteNames.MAIN_DRAWER));
    }
  };

  return (
    <Container center={true}>
      <Logo source={StudiumLogo} />

      <InputArea>
        {isLoadingPage && (
          <LoadingIcon
            style={{ paddingVertical: 30 }}
            size="large"
            color="#000000"
            margin={0}
          />
        )}
        {createUserErrorOccurred && (
          <Text
            style={{
              paddingVertical: 30,
              color: 'black',
              textAlign: 'center',
            }}
          >
            Erro ao tentar criar o usuário. Tente outro nome de usuário.
          </Text>
        )}
        {!isEmailFieldValid && (
          <Text
            style={{
              paddingBottom: 10,
              color: 'black',
            }}
          >
            Email inválido
          </Text>
        )}
        <Field
          iconName={'mail'}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(t) => {
            setEmailFieldValidation(true);
            setEmailField(t);
          }}
          valid={isEmailFieldValid}
          onEndEditing={(t) => {
            setEmailFieldValidation(Validators.isEmail(t.nativeEvent.text));
          }}
          maxLength={75}
        />
        <Divider />
        {!isUsernameFieldValid && (
          <Text
            style={{
              paddingBottom: 10,
              color: 'black',
            }}
          >
            Seu nome de usuário deve ter de 4 a 25 caracteres e conter somente
            letras, números ou os caracteres @.+-_
          </Text>
        )}
        <Field
          iconName={'user'}
          placeholder="Digite seu nome de usuário"
          value={usernameField}
          onChangeText={(t) => {
            setUsernameFieldValidation(true);
            setUsernameField(t);
          }}
          onEndEditing={(t) => {
            setUsernameFieldValidation(
              Validators.isUsername(t.nativeEvent.text)
            );
          }}
          valid={isUsernameFieldValid}
          isEmail={true}
          maxLength={25}
        />
        <Divider />
        {!isPasswordFieldValid && (
          <Text
            style={{
              paddingBottom: 10,
              color: 'black',
            }}
          >
            Sua senha deve ter de 6 a 30 caracteres
          </Text>
        )}
        <Field
          iconName={'lock'}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => {
            setPasswordFieldValidation(true);
            setPasswordField(t);
          }}
          password={true}
          valid={isPasswordFieldValid}
          onEndEditing={(t) => {
            setPasswordFieldValidation(
              Validators.isPassword(t.nativeEvent.text)
            );
          }}
          maxLength={30}
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
