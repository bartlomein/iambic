import gql from "graphql-tag";

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      title
      createdAt
      username
      type
      likesCount
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
  {
    getPostsSortedByLikes {
      id
      body
      title
      createdAt
      username
      type
      likesCount
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
  {
    getPostsSortedByComments {
      id
      body
      title
      createdAt
      username
      type
      likesCount
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
