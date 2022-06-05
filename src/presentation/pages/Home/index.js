import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View, StatusBar } from 'react-native';

//services
import { getPosts } from '../../../services/Post/PostService';

//components
import Header from '../../components/Header';
import Post from '../../components/Post';
import Divider from '../../components/Divider';

//styles
import { Container, LoadingIcon } from '../../../styles/globalStyle';

//others
import RouteNames from '../../../navigation/constants/RouteNames';
import { openMenu } from '../../../navigation/utils/CommonActions';

export default function Home({ route, navigation }) {
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPostsRemotely() {
      const posts = await getPosts();
      if (posts) {
        setIsLoadingPage(false);
        setPosts(posts.reverse());
      }
    }

    setIsLoadingPage(true);
    if (route.params !== undefined) {
      setPosts(route.params.posts);
      console.log('Recebeu posts por parâmetro');
    } else {
      getPostsRemotely();
      console.log('Buscou posts remotamente');
    }
  }, []);

  function navigateToPostDetail(post) {
    console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.POST_DETAIL);
    navigation.navigate(RouteNames.POST_DETAIL, {
      post: post,
    });
  }

  function createPostHandler() {
    console.log('[NAVEGAÇÃO] Navegando para ' + RouteNames.POST_CREATION);
    navigation.navigate(RouteNames.POST_CREATION);
  }

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        title="Studium"
        leftButtonOnPress={() => openMenu(navigation)}
        leftButtonIcon="menu"
        rightButtonIcon="add"
        rightButtonOnPress={createPostHandler}
      />
      {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}
      {isLoadingPage ? (
        <LoadingIcon size="large" color="#000000" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(post) => post.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <Divider />}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => <Divider />}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigateToPostDetail(item)}
                activeOpacity={1}
              >
                <Post data={item} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </Container>
  );
}
