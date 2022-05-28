import AsyncStorage from '@react-native-async-storage/async-storage';

import { basicAxios } from '../config';

export const createUser = async (username, email, password) => {
  let hasSuccess = false;

  await basicAxios()
    .post('create/', {
      username: username,
      email: email,
      password: password,
    })
    .then(async function (response) {
      // handle success
      console.log('createUser success');
      await AsyncStorage.multiSet([
        ['username', username],
        ['password', password],
      ]);
      hasSuccess = true;
    })
    .catch(function (error) {
      // handle error
      console.log('createUser error');
      console.log(error);
    });

  return hasSuccess;
};
