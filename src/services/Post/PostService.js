import { loggedAxios, basicAxios } from '../config';

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

export const getPostById = async (postId) => {
  let hasSuccess = false;

  await basicAxios()
    .get('posts/' + postId)
    .then(async function (response) {
      // handle success
      console.log('getPostById success');
      hasSuccess = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log('getPostById error');
      console.log(error);
    });

  return hasSuccess;
};
