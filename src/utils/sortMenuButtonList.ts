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
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

const FETCH_POST_QUERY_SORTED = gql`
  {
    getPostsSorted {
      id
      body
      title
      createdAt
      username
      type
      likeCount
      likes {
        username
      }
      commentCount
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
    buttonName: "Most Likes",
    sortName: FETCH_POST_QUERY_SORTED
  },
  {
    buttonName: "Most Recent",
    sortName: FETCH_POST_QUERY
  }
];
