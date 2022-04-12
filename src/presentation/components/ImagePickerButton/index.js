import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  /* height: 30px; */
  background-color: #eee;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 1px;
`;

const Text = styled.Text`
  color: black;
  font-size: 15px;
`;

export default ({ onPress, text }) => {
  return (
    <Button onPress={onPress}>
      <Text>{text}</Text>
    </Button>
  );
};
