import { onError } from '@apollo/client/link/error';

export const errorHandler = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
      if (extensions?.code === 'GRAPHQL_VALIDATION_FAILED') {
        console.error(`Type Error: ${message}`);
      } else {
        console.error(
          `Graphql erro: ${message} in API: https://studium-backend.herokuapp.com/`,
        );
      }
    });
  }
});