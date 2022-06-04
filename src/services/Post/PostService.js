import { loggedAxios, basicAxios } from '../config';
import { getTagById } from '../Tag/TagService';
import { validatePostsUris } from '../Uri/UriService';

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
          hasSuccess = await validatePosts(response.data);
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
      const posts = await validatePosts([response.data]);
      hasSuccess = posts[0];
    })
    .catch(function (error) {
      // handle error
      console.log('getPostById error');
      console.log(error);
    });

  return hasSuccess;
};

const validatePosts = async (posts) => {
  posts = await filterPostsWithNeededInfo(posts);
  posts = await validateImagesRemotely(posts);
  posts = await filterPostsWithImage(posts);
  posts = await validateTagsRemotely(posts);
  return posts;
};

const filterPostsWithNeededInfo = async (posts) => {
  return posts.filter((post) => {
    const hasTitle = post.title !== null && post.title !== '';
    const hasBody = post.body !== null && post.body !== '';
    const hasImage = post.images !== null && post.images !== '';
    return hasTitle && hasBody && hasImage;
  });
};

const validateImagesRemotely = async (posts) => {
  console.log('validating images');
  return await validatePostsUris(posts);
};

const filterPostsWithImage = async (posts) => {
  return posts.filter((post) => post.images !== null && post.images !== '');
};

const validateTagsRemotely = async (posts) => {
  console.log('validating tags');

  const tags = new Map();

  //getting unique tag ids
  posts.forEach((post) =>
    post.categories.forEach((category) => {
      if (!tags.has(category)) {
        tags.set(category, '');
      }
    })
  );

  //getting tags remotely by id
  for (let tagId of tags.keys()) {
    const response = await getTagById(tagId);
    tags.set(tagId, response.data.name);
  }

  //returning posts with tags adjusted
  return posts.map((post) => {
    post.categories = post.categories.map((category) => tags.get(category));
    return post;
  });
};
