import React from "react";
import SingleComment from "../components/SingleComment/SingleComment";

const CommentsList = ({ comments, postId }) => {
  return (
    <div style={{ marginBottom: 10 }}>
      {comments &&
        comments
          .reverse()
          .map((comment) => (
            <SingleComment
              comment={comment}
              id={postId}
              commentId={comment.id}
            />
          ))}
    </div>
  );
};

export default CommentsList;
