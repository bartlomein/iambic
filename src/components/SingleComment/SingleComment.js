import React from 'react';
import { SingleCommentContainer } from './SingleCommentStyles';

const SingleComment = ({ comment }) => {
  console.log(comment);
  return (
    <SingleCommentContainer>
      <div style={{ fontWeight: 'bold' }}>
        {comment.username}
        {':'}
      </div>
      <div style={{ paddingLeft: 5 }}>{comment.body}</div>
    </SingleCommentContainer>
  );
};

export default SingleComment;
