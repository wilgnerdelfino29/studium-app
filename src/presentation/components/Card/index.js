import React from 'react';
import styled from 'styled-components/native';

const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TouchableCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default ({ onPress = null, child }) => {
  return onPress === null ? (
    <Card>{child}</Card>
  ) : (
    <TouchableCard onPress={onPress}>{child}</TouchableCard>
  );
};
