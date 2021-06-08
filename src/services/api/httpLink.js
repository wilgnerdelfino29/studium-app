import { from, HttpLink } from '@apollo/client';
import { errorHandler } from './errorHandler';

export const httpLink = from([
  errorHandler,
  new HttpLink({
    uri: 'https://studium-backend.herokuapp.com/',
    credentials: 'same-origin',
  }),
]);