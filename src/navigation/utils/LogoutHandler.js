import React, { useEffect } from 'react';
import { View } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { logout } from '../../services/Auth/AuthService';

import RouteNames from '../constants/RouteNames';

export default ({ navigation }) => {
  useEffect(() => {
    async function doLogout() {
      await logout();
      console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.PRELOAD);
      navigation.dispatch(StackActions.replace(RouteNames.PRELOAD));
    }
    doLogout();
  }, []);

  return <View />;
};
