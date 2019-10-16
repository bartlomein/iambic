import React from 'react';
import SingleComment from '../components/SingleComment/SingleComment';

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments &&
        comments.reverse().map(comment => <SingleComment comment={comment} />)}
    </div>
  );
};

export default CommentsList;
