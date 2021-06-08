import asyncStorage from '@react-native-community/async-storage';
import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_, { headers }) => {
  const token = asyncStorage.getItem('@studium-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});