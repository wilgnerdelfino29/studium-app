import AsyncStorage from '@react-native-async-storage/async-storage';

import { customAxios } from '../config';

export const login = async (username, password) => {
  let hasSuccess = false;

  await customAxios(username, password)
    .get('posts/', {
      body: {
        username: username,
        password: password,
      },
    })
    .then(async function (response) {
      // handle success
      console.log('login success');
      await AsyncStorage.multiSet([
        ['username', username],
        ['password', password],
      ]);
      hasSuccess = response;
    })
    .catch(function (error) {
      // handle error
      console.log('login error');
      console.log(error);
    });
  return hasSuccess;
};

export const logout = async () => {
  axios
    .post('api-auth/logout/')
    .then(async function (response) {
      // handle success
      console.log('logout success');
    })
    .catch(function (error) {
      // handle error
      console.log('logout error');
    });

  await AsyncStorage.multiRemove(['username', 'password']);
};
