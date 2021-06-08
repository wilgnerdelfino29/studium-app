import { ApolloClient, InMemoryCache } from '@apollo/client';
import { httpLink } from './httpLink';
import { authLink } from './authLink';

export const CLIENT = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
});