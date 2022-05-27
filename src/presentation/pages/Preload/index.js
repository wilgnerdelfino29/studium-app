import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

//styles
import { Container, LoadingIcon } from '../../../styles/globalStyle';
import { Logo } from './styles';

//others
import StudiumLogo from '../../../assets/logo.png';
import RouteNames from '../../../navigation/RouteNames';

export default function Preload({ navigation }) {
  useEffect(() => {
    const checkUserInfo = async () => {
      await AsyncStorage.multiGet(['username', 'password'])
        .then((response) => {
          if (response.at(0).at(1) !== null && response.at(1).at(1) !== null) {
            console.log('user info found');
            navigation.dispatch(StackActions.replace(RouteNames.MAIN_DRAWER));
          } else {
            console.log('user info not found');
            navigation.dispatch(StackActions.replace(RouteNames.LOGIN));
          }
        })
        .catch((error) => {
          console.log('error to get user info, error:');
          console.log(error);
          navigation.dispatch(StackActions.replace(RouteNames.LOGIN));
        });
    };
    checkUserInfo();
  }, []);

  return (
    <Container center={true}>
      <Logo source={StudiumLogo} />
      <LoadingIcon size="large" color="#000000" />
    </Container>
  );
}
