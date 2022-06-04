import axios from 'axios';

const uriServiceAxios = (url) =>
  axios.create({
    baseURL: url,
    timeout: 2000,
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
    });
  return hasSuccess;
};

export const validatePostsUris = async (posts) => {
  return await Promise.all(
    posts.map(async (post) => {
      const imageIsValid = await validateUri(post.images);
      if (!imageIsValid) {
        post.images = '';
      }
      return post;
    })
  );
};
