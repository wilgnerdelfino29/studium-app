import AsyncStorage from '@react-native-async-storage/async-storage';

import { getPosts } from '../Post/PostService';

export const login = async (username, password) => {
  await AsyncStorage.multiSet([
    ['username', username],
    ['password', password],
  ]);

  console.log('trying to login');
  const hasSuccess = await getPosts();

  if (hasSuccess) {
    console.log('login success');
    return hasSuccess.data;
  }

  console.log('login error');
  await AsyncStorage.multiRemove(['username', 'password']);
  return false;
};

export const logout = async () => {
  await AsyncStorage.multiRemove(['username', 'password'])
    .then((response) => {
      console.log('logout success');
    })
    .catch((error) => {
      console.log('logout error');
      console.log(error);
    });
};
