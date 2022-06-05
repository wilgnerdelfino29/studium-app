import React, { useEffect, useState, useRef } from 'react';
import { FlatList, StatusBar, View, Text } from 'react-native';

//services
import { getUsers } from '../../../services/User/UserService';

//components
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import UserRankingCard from '../../components/UserRankingCard';

//styles
import { Container, LoadingIcon } from '../../../styles/globalStyle';

//others
import { openMenu } from '../../../navigation/utils/CommonActions';
import { sortUsersByScore } from '../../utils/SortUsersByScore';
import ModalView from '../../components/ModalView';

export default function Ranking({ navigation }) {
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [users, setUsers] = useState([]);
  const modalizeRef = useRef(null);

  useEffect(() => {
    async function getUsersRemotely() {
      const users = await getUsers();
      if (users) {
        setIsLoadingPage(false);
        setUsers(sortUsersByScore(users));
      }
    }

    setIsLoadingPage(true);
    getUsersRemotely();
  }, []);

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        title="Ranking"
        leftButtonOnPress={() => openMenu(navigation)}
        leftButtonIcon="menu"
        rightButtonIcon="info-outline"
        rightButtonOnPress={() => {
          console.log('[AÇÃO DO USUÁRIO] Tocou em informções de ranking');
          modalizeRef.current?.open();
        }}
      />
      {isLoadingPage ? (
        <LoadingIcon size="large" color="#000000" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <Divider />}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => <Divider />}
          renderItem={({ item, index }) => {
            return (
              <View style={{ paddingHorizontal: 10 }}>
                <UserRankingCard
                  onPress={() => {
                    console.log(
                      '[AÇÃO DO USUÁRIO] Tocou em informções de ranking'
                    );
                    modalizeRef.current?.open();
                  }}
                  userName={item.username}
                  userRankPosition={index + 1}
                  userScore={item.total_posts}
                />
              </View>
            );
          }}
        />
      )}

      <ModalView
        modalizeRef={modalizeRef}
        data={[{ id: -1 }]}
        headerComponent={
          <View
            style={{
              padding: 10,
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#cfcfcf',
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#4f4f4f' }}
            >
              Sobre o ranking
            </Text>
          </View>
        }
        renderItem={() => {
          return (
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: '#4f4f4f', fontSize: 18, fontFamily: '' }}>
                O ranking mostra os usuários que mais contribuiram com a
                comunidade do
                <Text style={{ color: '#4f4f4f', fontWeight: 'bold' }}>
                  {' '}
                  Studium
                </Text>
                .
              </Text>

              <Text
                style={{
                  color: '#4f4f4f',
                  fontSize: 18,
                  fontFamily: '',
                  paddingTop: 20,
                }}
              >
                Quanto mais publicações feitas, mais
                <Text style={{ color: '#0b0', fontWeight: 'bold' }}> XP</Text>!
              </Text>
            </View>
          );
        }}
      />
    </Container>
  );
}
