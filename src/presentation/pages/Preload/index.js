import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container } from '../../../styles/globalStyle';
import { Logo, LoadingIcon } from './styles';

import StudiumLogo from '../../../assets/logo.png';
import RouteNames from '../../../navigation/RouteNames';

export default function Preload({ navigation }) {
  useEffect(() => {
    const checkUserInfo = async () => {
      await AsyncStorage.multiGet(['username', 'password'])
        .then((response) => {
          console.log('user info found');
          navigation.reset({
            routes: [{ name: RouteNames.MAIN_DRAWER }],
          });
        })
        .catch((error) => {
          console.log('user info not found');
          navigation.reset({
            routes: [{ name: RouteNames.LOGIN }],
          });
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
