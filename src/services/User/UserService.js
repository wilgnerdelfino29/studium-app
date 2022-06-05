import AsyncStorage from '@react-native-async-storage/async-storage';

import { basicAxios } from '../config';

export const createUser = async (username, email, password) => {
  let response = false;

  await basicAxios()
    .post('create/', {
      username: username,
      email: email,
      password: password,
    })
    .then(async function () {
      // handle success
      console.log('createUser success');
      await AsyncStorage.multiSet([
        ['username', username],
        ['password', password],
      ]);
      response = true;
    })
    .catch(function (error) {
      // handle error
      console.log('createUser error');
      response = error.message;
    });

  return response;
};
