import React from 'react';
import SingleComment from '../components/SingleComment';

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments && comments.map(comment => <SingleComment comment={comment} />)}
    </div>
  );
};

export default CommentsList;
