import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import defaultPostImage from '../../../assets/postImageExample.jpg';

//components
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import UserSimpleCard from '../../components/UserSimpleCard';
import Field from '../../components/Field';
import Card from '../../components/Card';
import PostHeader from '../../components/PostHeader';
import PostImage from '../../components/PostImage';
import PostTags from '../../components/PostTags';

//styles
import {
  PostDetailsContainer,
  ActionsSection,
  ActionSection,
  ActionText,
  ReportText,
} from './styles';
import { Container, LoadingIcon } from '../../../styles/globalStyle';

//others
import { toPostCreationDateFormat } from '../../constants/StringFormat/index';
import { getRoundedStat } from '../../constants/StringFormat';

export default function PostDetail({ route, navigation }) {
  const [post, setPost] = useState();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [like, setLike] = useState(false);
  const [commentField, setCommentField] = useState('');

  useEffect(() => {
    let _post;
    console.log(route);

    async function validatePost() {
      setPost(_post);
      setIsLoadingPage(false);
    }

    if (route.params !== undefined) {
      _post = route.params.post;
      validatePost();
    } else {
      console.log('[ERRO] PostDetail não recebeu o parâmetro post');
    }
  }, []);

  function navigateBack() {
    if (navigation.canGoBack()) {
      console.log('[NAVEGAÇÃO]' + 'Retornando a partir de PostDetail');
      navigation.goBack();
    }
  }

  function touchLikeButton() {
    like
      ? console.log('[AÇÃO DO USUÁRIO]' + 'Descurtido')
      : console.log('[AÇÃO DO USUÁRIO]' + 'Curtido');
    setLike(!like);
  }

  function touchCommentButton() {
    console.log('[AÇÃO DO USUÁRIO]' + 'Tocou em comentar');
    //open comment field
  }

  function touchReportButton() {
    console.log('[AÇÃO DO USUÁRIO]' + 'Tocou em reportar');
  }

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#000" />
      <Header
        title="Studium"
        leftButtonOnPress={navigateBack}
        leftButtonIcon="keyboard-backspace"
      />

      {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}
      {isLoadingPage && <LoadingIcon />}
      {!isLoadingPage && (
        <ScrollView>
          <PostImage source={post.images} isUri={true} />
          <PostTags tags={post.categories} />
          <PostDetailsContainer>
            {/* autor */}
            <UserSimpleCard
              onPress={() => {}}
              userName={post.owner}
              userLevel="10"
            />
            <Divider />

            <Card
              child={
                <View>
                  <PostHeader
                    title={post.title}
                    date={toPostCreationDateFormat(post.created)}
                  />
                  <Divider />
                  <Text style={{ color: '#4f4f4f' }}>{post.body}</Text>
                </View>
              }
            />
            <Divider />

            {/* interações */}
            <Card
              child={
                <ActionsSection>
                  {/* curtir */}
                  <TouchableOpacity
                    onPress={touchLikeButton}
                    style={{ justifyContent: 'center' }}
                  >
                    <ActionSection>
                      {like ? (
                        <AntDesign name="heart" size={24} color={'#f00'} />
                      ) : (
                        <AntDesign name="hearto" size={24} color={'#000'} />
                      )}
                      <ActionText>
                        {getRoundedStat(post.likes.length + (like ? 1 : 0))}
                      </ActionText>
                    </ActionSection>
                  </TouchableOpacity>
                  <View style={{ width: 30 }} />
                  {/* comentar */}
                  <TouchableOpacity
                    onPress={touchCommentButton}
                    style={{ justifyContent: 'center' }}
                  >
                    <ActionSection>
                      <AntDesign name="message1" size={24} />
                      <ActionText>
                        {getRoundedStat(post.comments.length)}
                      </ActionText>
                    </ActionSection>
                  </TouchableOpacity>
                </ActionsSection>
              }
            />
            <Divider />
            {/* Denunciar */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1 }} />
              <Card
                onPress={touchReportButton}
                child={<ReportText>Denunciar postagem</ReportText>}
              />
            </View>
            <Divider />
          </PostDetailsContainer>

          {/* Colocá-la em outra página que deve ser aberta no touchCommentButton() */}
          {/* Seção de comentários */}

          {/* <View style={styles.postInfoContainer}>
                    <Text style={styles.postCommentsHeaderText}>
                        Comentários
                    </Text>
                    <View style={styles.postCommentsContainer}>
                        <FlatList
                            style={styles.postCommentsList}
                            data={[1, 2, 3, 4, 5]}
                            // Para o key extractor deve ser passado o id do post quando integrar com a API
                            keyExtractor={comment => String(comment)}
                            showsVerticalScrollIndicator={false}
                            renderItem={() => (

                                <View style={styles.commentContainer}>
                                    <Text style={styles.commentAuthor}>
                                        Zezinho
                                    </Text>
                                    <Text style={styles.commentText}>
                                        Muito bacana o assunto, parabéns!
                                    </Text>

                                </View>
                            )}
                        />
                    </View>
                </View> */}
        </ScrollView>
      )}
    </Container>
  );
}
