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

export default function Home({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let _posts;

    async function getPostsRemotely() {
      const hasSuccess = await getPosts();
      console.log('hasSuccess = ' + hasSuccess);
      if (hasSuccess) {
        _posts = hasSuccess.data.posts;
        validatePosts();
      }
    }
    async function validatePosts() {
      let validatedPosts = await Promise.all(
        _posts.map(async (post) => {
          const imageIsValid = await validateUri(post.images);
          if (!imageIsValid) {
            post.images = '';
          }
          return post;
        })
      );
      validatedPosts = validatedPosts
        .filter((post) => {
          const hasTitle = post.title !== null && post.title !== '';
          const hasBody = post.body !== null && post.body !== '';
          return hasTitle && hasBody;
        })
        .reverse();
      setPosts(validatedPosts);
    }

    if (route.params !== undefined) {
      _posts = route.params.posts;
      validatePosts();
      console.log('Recebeu posts por parêmetro');
    } else {
      getPostsRemotely();
      console.log('Buscou posts remotamente');
    }
  }, []);

  function navigateToPostDetail() {
    console.log('[NAVEGAÇÃO]' + 'Navegando para PostDetail');
    navigation.navigate('PostDetail');
  }

  function openMenu() {
    console.log('[NAVEGAÇÃO]' + 'Abrindo Drawer (Menu)');
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
        keyExtractor={(post) => post.id.toString()}
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
