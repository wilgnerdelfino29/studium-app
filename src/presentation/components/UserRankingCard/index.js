import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Card from '../Card';

const UserRankPosition = styled.Text`
  color: #4f4f4f;
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
`;

const UserName = styled.Text`
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

export default ({
  onPress,
  userName = '',
  userRankPosition,
  userScore = 0,
}) => {
  let leftSideComponent = <View />;
  switch (userRankPosition) {
    case 1:
      leftSideComponent = (
        <FontAwesome5 name="trophy" size={20} color="#FFD700" />
      );
      break;
    case 2:
      leftSideComponent = (
        <FontAwesome5 name="trophy" size={18} color="#C0C0C0" />
      );
      break;
    case 3:
      leftSideComponent = (
        <FontAwesome5 name="trophy" size={16} color="#CD7F32" />
      );
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Card
        child={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 40,
                alignItems: 'center',
              }}
            >
              {leftSideComponent}
            </View>
            <UserRankPosition>{userRankPosition}º</UserRankPosition>
            <UserName>{userName}</UserName>
            <UserLevel>{userScore} XP</UserLevel>
          </View>
        }
      />
    </TouchableOpacity>
  );
};
