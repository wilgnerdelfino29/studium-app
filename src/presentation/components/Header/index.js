import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-left: 10px;
  background-color: black;
`;

const HeaderText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

const LeftButton = styled.View`
  position: absolute;
  left: 10px;
`;

const RightButton = styled.View`
  position: absolute;
  right: 10px;
`;

export default ({
  title,
  leftButtonOnPress,
  leftButtonIcon,
  rightButtonOnPress,
  rightButtonIcon,
}) => {
  return (
    <Header>
      <LeftButton>
        <TouchableOpacity onPress={leftButtonOnPress} activeOpacity={1}>
          <MaterialIcons name={leftButtonIcon} color="#FFF" size={40} />
        </TouchableOpacity>
      </LeftButton>

      <HeaderText>{title}</HeaderText>

      <RightButton>
        <TouchableOpacity onPress={rightButtonOnPress} activeOpacity={1}>
          <MaterialIcons name={rightButtonIcon} color="#FFF" size={40} />
        </TouchableOpacity>
      </RightButton>
    </Header>
  );
};
