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

const MenuButton = styled.View`
  position: absolute;
  left: 10px;
`;

export default ({ onPress, title, materialIcon }) => {
  return (
    <Header>
      <HeaderText>{title}</HeaderText>
      <MenuButton>
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <MaterialIcons name={materialIcon} color="#FFF" size={40} />
        </TouchableOpacity>
      </MenuButton>
    </Header>
  );
};
