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
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  return hasSuccess;
};

// export const getUsers = async () => {
//   axios
//     .get('users/')
//     .then(function (response) {
//       // handle success
//       alert(JSON.stringify(response.data));
//       console.log('SUCESSO na chamada do getUsers !!!!!! ');
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       // handle error
//       alert(error.message);
//       console.log('ERRO na chamada do getUsers XXXXXX, error: ');
//       console.log(error);
//     });
// };
