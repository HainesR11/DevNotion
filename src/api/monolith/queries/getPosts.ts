import { gql } from 'graphql-request';

export default gql`
  query getPosts($limit: Int, $offset: Int) {
    posts(limit: $limit, offset: $offset) {
      id
      title
      content
      author {
        name
        username
      }
      createdAt
      updatedAt
      commentCount
    }
  }
`;
