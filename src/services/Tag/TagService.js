import { basicAxios } from '../config';

export const getTagById = async (tagId) => {
  let hasSuccess = false;

  await basicAxios()
    .get('categories/' + tagId)
    .then(function (response) {
      // handle success
      console.log('getTagById success');
      hasSuccess = response;
    })
    .catch(function (error) {
      // handle error
      console.log('getTagById error');
      console.log(error);
    });

  return hasSuccess;
};
