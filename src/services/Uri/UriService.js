import axios from 'axios';

const uriServiceAxios = (url) =>
  axios.create({
    baseURL: url,
    timeout: 15000,
  });

export const validateUri = async (uri) => {
  let hasSuccess = false;

  await uriServiceAxios(uri)
    .get('')
    .then(function (response) {
      // handle success
      console.log('validateUri success');
      hasSuccess = true;
    })
    .catch(function (error) {
      // handle error
      console.log('validateUri error');
      console.log(error);
    });

  return hasSuccess;
};
