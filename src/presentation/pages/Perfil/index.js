import React from 'react';
import { Text } from 'react-native';
import RouteNames from '../../../navigation/RouteNames';
import { Container } from '../../../styles/globalStyle';

export default function Perfil() {
  console.log(RouteNames.PERFIL);
  return (
    <Container>
      <Text>Perfil page</Text>
    </Container>
  );
}
