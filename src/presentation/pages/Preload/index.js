import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container } from '../../../styles/globalStyle';
import { Logo, LoadingIcon } from './styles';

import StudiumLogo from '../../../assets/logo.png';

export default function Preload({ navigation }) {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.reset({
          routes: [{ name: 'MainDrawer' }],
        });
      } else {
        navigation.reset({
          routes: [{ name: 'Login' }],
        });
      }
    };
    checkToken();
  }, []);

  return (
    <Container center={true}>
      <Logo source={StudiumLogo} />
      <LoadingIcon size="large" color="#000000" />
    </Container>
  );
}
