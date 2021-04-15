import React from 'react';
import { ApolloProvider } from '@apollo/client';

import Routes from './src/routes';
import { CLIENT } from './src/services/api/config'
import UserContextProvider from './src/contexts/UserContext'

export default function App() {
  console.log("Iniciando app");
  return (
    <ApolloProvider client={CLIENT}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </ApolloProvider>
  );
}
