import AsyncStorage from '@react-native-async-storage/async-storage';

import { basicAxios, loggedAxios } from '../config';

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

export const getUsers = async () => {
  let hasSuccess = false;

  await loggedAxios()
    .then(async function (axios) {
      // handle success
      console.log('loggedAxios instance success');
      await axios
        .get('users/')
        .then(async function (response) {
          // handle success
          console.log('getUsers success');
          hasSuccess = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log('getUsers error');
          console.log(error);
        });
    })
    .catch(function (error) {
      // handle error
      console.log('loggedAxios instance error');
      console.log(error);
    });

  return hasSuccess;
};
