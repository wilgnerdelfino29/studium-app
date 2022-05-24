import { loggedAxios } from '../config';

export const getPosts = async () => {
  let hasSuccess = false;

  await loggedAxios()
    .then(async function (axios) {
      // handle success
      console.log('loggedAxios instance success');
      await axios
        .get('posts/')
        .then(async function (response) {
          // handle success
          console.log('getPosts success');
          hasSuccess = response;
        })
        .catch(function (error) {
          // handle error
          console.log('getPosts error');
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
