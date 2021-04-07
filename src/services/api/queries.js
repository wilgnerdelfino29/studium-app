import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query{
  posts(pageSize: 3, after:"teste"){
    posts{
      id,
      postTitle
    }
  }
}
`;