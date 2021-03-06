import React, { useContext, useState, useRef } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";
import { FormTextarea } from "shards-react";
import { Button } from "antd";

import {
  CommentPostContainer,
  CommentPostButtonsContainer,
} from "./CommentPostStyles";

const CommentPost = ({ id, username, deletePost }) => {
  const postId = id;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState("");
  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment("");
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      body: comment,
    },
  });

  return (
    <CommentPostContainer>
      <FormTextarea
        type="text"
        placeholder="Comment.."
        name="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        ref={commentInputRef}
      />
      <CommentPostButtonsContainer>
        <Button type="primary" onClick={submitComment}>
          Post Comment
        </Button>
        {user && user.username && username === user.username && (
          <Button type="danger" onClick={() => deletePost()}>
            Delete Post
          </Button>
        )}
      </CommentPostButtonsContainer>
    </CommentPostContainer>
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
      commentsCount
    }
  }
`;
export default CommentPost;
