import { gql } from '@apollo/client';

export const LOGIN = gql`
query login($email: EmailAddress!, $password: String!) {
  login(data: { password: $password, email: $email }) {
    token
    user {
      id
      avatar_url
      name
      access_level
    }
  }
}
`;

export const GET_POSTS = gql`
query {
  posts(pageSize: 3, after:"teste") {
    posts{
      id,
      postTitle
    }
  }
}
`;