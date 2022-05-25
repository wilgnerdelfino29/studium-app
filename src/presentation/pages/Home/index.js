import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View, StatusBar } from 'react-native';

//services
import { validateUri } from '../../../services/Uri/UriService';
import { getPosts } from '../../../services/Post/PostService';

//components
import Header from '../../components/Header';
import Post from '../../components/Post';
import Divider from '../../components/Divider';

//styles
import { Container } from '../../../styles/globalStyle';
import { getTagById } from '../../../services/Tag/TagService';
import RouteNames from '../../../navigation/RouteNames';

export default function Home({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  console.log('Home, route: ');
  console.log(route);

  useEffect(() => {
    let _posts;

    async function getPostsRemotely() {
      const hasSuccess = await getPosts();
      if (hasSuccess) {
        _posts = hasSuccess.data;
        validatePosts();
      }
    }

    function filterPostsWithNeededInfo() {
      _posts = _posts.filter((post) => {
        const hasTitle = post.title !== null && post.title !== '';
        const hasBody = post.body !== null && post.body !== '';
        const hasImage = post.images !== null && post.images !== '';
        return hasTitle && hasBody && hasImage;
      });
    }

    function filterPostsWithImage() {
      _posts = _posts.filter(
        (post) => post.images !== null && post.images !== ''
      );
    }

    async function validateImagesRemotely() {
      console.log('validating images');
      _posts = await Promise.all(
        _posts.map(async (post) => {
          const imageIsValid = await validateUri(post.images);
          if (!imageIsValid) {
            post.images = '';
          }
          return post;
        })
      );
    }

    async function validateTagsRemotely() {
      console.log('validating tags');

      const tags = new Map();

      //getting unique tag ids
      _posts.forEach((post) =>
        post.categories.forEach((category) => {
          if (!tags.has(category)) {
            tags.set(category, '');
          }
        })
      );

      //getting tags remotely by id
      for (let tagId of tags.keys()) {
        console.log(tagId);
        const response = await getTagById(tagId);
        tags.set(tagId, response.data.name);
      }

      //returning posts with tags adjusted
      _posts = _posts.map((post) => {
        post.categories = post.categories.map((category) => tags.get(category));
        return post;
      });
    }

    async function validatePosts() {
      filterPostsWithNeededInfo();

      await validateImagesRemotely();
      filterPostsWithImage();

      await validateTagsRemotely();

      setPosts(_posts.reverse());
    }

    if (route.params !== undefined) {
      _posts = route.params.posts;
      validatePosts();
      console.log('Recebeu posts por parâmetro');
    } else {
      getPostsRemotely();
      console.log('Buscou posts remotamente');
    }
  }, []);

  function navigateToPostDetail() {
    console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.POST_DETAIL);
    navigation.navigate(RouteNames.POST_DETAIL);
  }

  function openMenu() {
    console.log('[NAVEGAÇÃO] Abrindo Drawer (Menu)');
    navigation.openDrawer();
  }

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#000" />
      <Header onPress={openMenu} title="Studium" materialIcon="menu" />
      {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={navigateToPostDetail}
                activeOpacity={1}
              >
                <Post data={item} />
              </TouchableOpacity>
              <Divider />
            </View>
          );
        }}
      />
    </Container>
  );
}
