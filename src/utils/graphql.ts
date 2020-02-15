import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  query getPosts($offset: Int, $limit: Int) {
    getPosts(offset: $offset, limit: $limit) {
      id
      body
      createdAt
      username
      likesCount
      title
      likes {
        username
      }
      commentsCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
