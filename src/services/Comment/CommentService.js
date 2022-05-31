import { basicAxios } from '../config';

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

export const getComments = async (commentIds) =>
  await Promise.all(
    commentIds.map(async (commentId) => await getCommentById(commentId))
  );
