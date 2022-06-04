import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//services
import {
  getComments,
  createComment,
} from '../../../services/Comment/CommentService';

//components
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import UserSimpleCard from '../../components/UserSimpleCard';
import Card from '../../components/Card';
import PostHeader from '../../components/PostHeader';
import PostImage from '../../components/PostImage';
import PostTags from '../../components/PostTags';
import PostCommentsModal from '../../components/PostCommentsModal';

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
import {
  getRoundedStat,
  toPostCreationDateFormat,
} from '../../constants/StringFormat';
import { navigateBack } from '../../../navigation/utils/CommonActions';
import { getPostById } from '../../../services/Post/PostService';

export default function PostDetail({ route, navigation }) {
  const [post, setPost] = useState();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const modalizeRef = useRef(null);

  useEffect(() => {
    console.log(route);

    if (route.params !== undefined) {
      setPost(route.params.post);
      setIsLoadingPage(false);
      validatePost(route.params.post);
    } else {
      console.log('[ERRO] PostDetail não recebeu o parâmetro post');
    }
  }, []);

  async function validatePost(post) {
    await getCommentsRemotely(post);
  }

  async function getCommentsRemotely(post) {
    setIsLoadingComments(true);
    if (postHasComments(post) && typeof post.comments[0] === 'number') {
      const comments = await getComments(post.comments);
      post.comments = comments;
    }
    setPost(post);
    setIsLoadingComments(false);
  }

  function postHasComments(post) {
    return (
      typeof post !== 'undefined' &&
      typeof post.comments !== 'undefined' &&
      post.comments.length > 0
    );
  }

  function touchLikeButton() {
    liked
      ? console.log('[AÇÃO DO USUÁRIO]' + 'Descurtido')
      : console.log('[AÇÃO DO USUÁRIO]' + 'Curtido');
    setLiked(!liked);
  }

  function touchSeeCommentsButton() {
    console.log('[AÇÃO DO USUÁRIO]' + 'Tocou em comentar');
    //open comments modal
    modalizeRef.current?.open();
  }

  function touchReportButton() {
    console.log('[AÇÃO DO USUÁRIO]' + 'Tocou em reportar');
  }

  async function touchDoCommentButton() {
    console.log('[AÇÃO DO USUÁRIO] ' + 'Tocou em enviar comentário');
    if (comment !== '') {
      setIsLoadingComments(true);
      const createdComment = await createComment(comment, post.id);
      if (createdComment) {
        const updatedPost = await getPostById(post.id);
        if (updatedPost) {
          await validatePost(updatedPost);
          setComment('');
        } else {
          setIsLoadingComments(false);
        }
      } else {
        setIsLoadingComments(false);
      }
    }
  }

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        leftButtonOnPress={() => navigateBack(navigation)}
        leftButtonIcon="keyboard-backspace"
      />

      {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}
      {typeof post === 'undefined' || isLoadingPage ? (
        <LoadingIcon size="large" color="#000000" />
      ) : (
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
            {isLoadingComments ? (
              <LoadingIcon size="large" color="#000000" margin={0} />
            ) : (
              <View>
                <Card
                  child={
                    <ActionsSection>
                      {/* curtir */}
                      <TouchableOpacity
                        onPress={touchLikeButton}
                        style={{ justifyContent: 'center' }}
                      >
                        <ActionSection>
                          {liked ? (
                            <AntDesign name="heart" size={24} color={'#f00'} />
                          ) : (
                            <AntDesign name="hearto" size={24} color={'#000'} />
                          )}
                          <ActionText>
                            {getRoundedStat(
                              post.likes.length + (liked ? 1 : 0)
                            )}
                          </ActionText>
                        </ActionSection>
                      </TouchableOpacity>
                      <View style={{ width: 30 }} />
                      {/* comentar */}
                      <TouchableOpacity
                        onPress={touchSeeCommentsButton}
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
              </View>
            )}
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
            {/* <Divider /> */}
          </PostDetailsContainer>
        </ScrollView>
      )}

      <PostCommentsModal
        modalizeRef={modalizeRef}
        data={postHasComments(post) ? post.comments : []}
        fieldValue={comment}
        fieldOnChangeText={(t) => setComment(t)}
        onPress={touchDoCommentButton}
        isLoadingComments={isLoadingComments}
      />
    </Container>
  );
}
