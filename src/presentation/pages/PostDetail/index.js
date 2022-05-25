import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import defaultPostImage from '../../../assets/postImageExample.jpg';

import { getRoundedStat } from '../../constants/StringFormat';

import Header from '../../components/Header';
import Divider from '../../components/Divider';
import UserSimpleCard from '../../components/UserSimpleCard';
import Field from '../../components/Field';
import Card from '../../components/Card';
import PostHeader from '../../components/PostHeader';
import PostImage from '../../components/PostImage';
import PostTags from '../../components/PostTags';

import { Container } from '../../../styles/globalStyle';
import {
  PostDetailsContainer,
  ActionsSection,
  ActionSection,
  ActionText,
  ReportText,
} from './styles';

export default function PostDetail({ navigation }) {
  const [like, setLike] = useState(false);
  const [commentField, setCommentField] = useState('');

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

  const randomText =
    'Lorem ipsum dolor sit amet consectetur, adipiscing elit at netus lobortis, conubia maecenas semper tristique. Suspendisse ac ultrices facilisi purus commodo interdum sociosqu in blandit lacus curae magna, vehicula tempus nisl felis netus ut semper eleifend sollicitudin quisque. Consequat malesuada viverra adipiscing interdum dui nostra mi ipsum, tincidunt efficitur hendrerit sit aliquet tellus.Lorem ipsum dolor sit amet consectetur, adipiscing elit at netus lobortis, conubia maecenas semper tristique. Suspendisse ac ultrices facilisi purus commodo interdum sociosqu in blandit lacus curae magna, vehicula tempus nisl felis netus ut semper eleifend sollicitudin quisque. Consequat malesuada viverra adipiscing interdum dui nostra mi ipsum, tincidunt efficitur hendrerit sit aliquet tellus.Lorem ipsum dolor sit amet consectetur, adipiscing elit at netus lobortis, conubia maecenas semper tristique. Suspendisse ac ultrices facilisi purus commodo interdum sociosqu in blandit lacus curae magna, vehicula tempus nisl felis netus ut semper eleifend sollicitudin quisque. Consequat malesuada viverra adipiscing interdum dui nostra mi ipsum, tincidunt efficitur hendrerit sit aliquet tellus.';

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#000" />
      <Header
        onPress={navigateBack}
        title="Studium"
        materialIcon="keyboard-backspace"
      />

      {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}

      <ScrollView>
        <PostImage source={defaultPostImage} />
        <PostTags />
        <PostDetailsContainer>
          {/* autor */}
          <UserSimpleCard
            onPress={() => {}}
            userImageUrl="asd"
            userName="Wilgner Ferreira Delfino"
            userLevel="10"
          />
          <Divider />

          <Card
            child={
              <View>
                <PostHeader
                  title={'Criando um app do zero com React Native para Android'}
                  date={'23/09/2020'}
                />
                <Divider />
                <Text style={{ color: '#4f4f4f' }}>{randomText}</Text>
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
                    <ActionText>{getRoundedStat(130)}</ActionText>
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
                    <ActionText>{getRoundedStat(130)}</ActionText>
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
    </Container>
  );
}
