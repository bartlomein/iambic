import gql from "graphql-tag";

const FETCH_POST_QUERY = gql`
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

const FETCH_POST_QUERY_SORTED_BY_LIKES = gql`
  query getPostsSortedByLikes($offset: Int, $limit: Int) {
    getPostsSortedByLikes(offset: $offset, limit: $limit) {
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
const FETCH_POST_QUERY_SORTED_BY_COMMENTS = gql`
  query getPostsSortedByComments($offset: Int, $limit: Int) {
    getPostsSortedByComments(offset: $offset, limit: $limit) {
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

export const sortMenuList = [
  {
    buttonName: "Most Recent",
    sortName: FETCH_POST_QUERY
  },
  {
    buttonName: "Most Likes",
    sortName: FETCH_POST_QUERY_SORTED_BY_LIKES
  },
  {
    buttonName: "Most Comments",
    sortName: FETCH_POST_QUERY_SORTED_BY_COMMENTS
  }
];
