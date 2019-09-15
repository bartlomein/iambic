import React, { useContext, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../../context/auth';

const SinglePoemPage = props => {
  const postId = props.match.params.poemId;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState('');

  const { loading, data } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId
    }
  });

  // const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
  //   update() {
  //     setComment('');
  //     commentInputRef.current.blur();
  //   },
  //   variables: {
  //     postId,
  //     body: comment
  //   }
  // });
  // useEffect(() => {
  //   getPost();
  // }, []);
  let postMarkup;
  // if (!getPost || getPost === undefined) {
  //   postMarkup = <p>Loading post..</p>;
  // } else {
  //   const {
  //     id,
  //     body,
  //     createdAt,
  //     username,
  //     comments,
  //     likes,
  //     likeCount,
  //     commentCount
  //   } = getPost;

  // postMarkup = <div>{getPost.id}</div>;
  if (loading) return <p>Loading ...</p>;
  return <h1>Hello {data.getPost.id}!</h1>;
};

export default SinglePoemPage;
const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
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
