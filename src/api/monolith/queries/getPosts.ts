import {gql} from 'graphql-request';

export default gql`
  query GetPosts($limit: Int, $offset: Int) {
    posts(limit: $limit, offset: $offset) {
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
