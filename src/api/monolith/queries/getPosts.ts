import { gql } from 'graphql-request';

export default gql`
  query GetPosts($limit: Int, $offset: Int) {
    getPosts(limit: $limit, offset: $offset) {
      id
      title
      content
      author {
        name
      }
      createdAt
      updatedAt
    }
  }
`;
