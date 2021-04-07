import { ApolloClient, InMemoryCache } from '@apollo/client';

export const CLIENT = new ApolloClient({
    uri: 'https://archetypeofficial.herokuapp.com/graphql',
    cache: new InMemoryCache()
});