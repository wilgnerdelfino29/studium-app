import React from 'react';
import { ApolloProvider } from '@apollo/client';

import Routes from './src/routes';
import { CLIENT } from './src/services/api/config'

export default function App() {
  console.log("Iniciando app");
  return (
    <ApolloProvider client={CLIENT}>
      <Routes />
    </ApolloProvider>
  );
}
