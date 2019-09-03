import React, { useContext, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../context/auth';

const CommentPost = ({ id }) => {
  const postId = id;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState('');
  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment('');
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      body: comment
    }
  });

  return (
    <div>
      <input
        type='text'
        placeholder='Comment..'
        name='comment'
        value={comment}
        onChange={event => setComment(event.target.value)}
        ref={commentInputRef}
      />
      <button onClick={submitComment}>comment</button>
    </div>
  );
};
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
export default CommentPost;
