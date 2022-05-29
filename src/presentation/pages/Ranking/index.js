import React from 'react';
import { Text } from 'react-native';
import RouteNames from '../../../navigation/constants/RouteNames';
import { Container } from '../../../styles/globalStyle';

export default function Ranking() {
  console.log(RouteNames.RANKING);
  return (
    <Container>
      <Text>RouteNames.RANKING</Text>
    </Container>
  );
}
