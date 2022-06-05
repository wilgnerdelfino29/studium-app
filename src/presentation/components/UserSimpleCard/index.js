import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import userImageExample from '../../../assets/postImageExample.jpg';

import Card from '../Card';

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserImage = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 1;
  border-radius: 30px;
`;

const ImageSection = styled.View`
  width: 50px;
`;

const UserName = styled.Text`
  padding-left: 15px;
  color: #4f4f4f;
  font-size: 15px;
  flex: 1;
`;

const UserLevel = styled.Text`
  padding-left: 10px;
  color: #0b0;
  font-size: 14px;
  font-weight: bold;
`;

const LevelSection = styled.View`
  width: 90px;
  align-items: center;
`;

export default ({
  onPress,
  userImageUrl = '',
  userName = '',
  userLevel = null,
}) => {
  return (
    userName !== '' && (
      <Card
        onPress={onPress}
        child={
          <UserInfo>
            <ImageSection>
              {userImageUrl === '' ? (
                <FontAwesome name="user-circle" size={48} color="#4f4f4f" />
              ) : (
                <UserImage source={userImageExample} />
              )}
            </ImageSection>

            <UserName numberOfLines={2}>{userName}</UserName>

            {userLevel !== null && (
              <LevelSection>
                <UserLevel>Nível {userLevel}</UserLevel>
              </LevelSection>
            )}
          </UserInfo>
        }
      />
    )
  );
};
