import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';

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

export default function Ranking({ navigation }) {
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [users, setUsers] = useState([]);

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
        rightButtonOnPress={() => {}}
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
                  onPress={() => {}}
                  userName={item.username}
                  userRankPosition={index + 1}
                  userScore={item.total_posts}
                />
              </View>
            );
          }}
        />
      )}
    </Container>
  );
}
