import { basicAxios, loggedAxios } from '../config';

export const getCommentById = async (commentId) => {
  let hasSuccess = false;

  await basicAxios()
    .get('comments/' + commentId)
    .then(function (response) {
      // handle success
      console.log('getCommentById success');
      hasSuccess = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log('getCommentById error');
      console.log(error);
    });

  return hasSuccess;
};

export const getComments = async (commentIds) => {
  return await Promise.all(
    commentIds.map(async (commentId) => await getCommentById(commentId))
  );
};

export const createComment = async (comment, postId) => {
  let hasSuccess = false;

  const data = {
    body: comment,
    post: postId,
  };

  await loggedAxios()
    .then(async function (axios) {
      // handle success
      console.log('loggedAxios instance success');
      await axios
        .post('comments/', data)
        .then(async function (response) {
          // handle success
          console.log('createComment success');
          hasSuccess = response;
        })
        .catch(function (error) {
          // handle error
          console.log('createComment error');
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
