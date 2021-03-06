import React, { useContext } from "react";
import gql from "graphql-tag";
import {
  SingleCommentContainer,
  DeleteCommmentButton,
  CommentTextContainer,
  CommmentAndTrashContainer,
} from "./SingleCommentStyles";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";
import { Button } from "antd";

import { FaTrash } from "react-icons/fa";

interface Comment {
  id: string;
  username: string;
  createdAt: string;
  body: string;
  __typename: string;
}

type Props = {
  id: string;
  comment: Comment;
  username: string;
};

const SingleComment = ({ id, comment, username }: Props) => {
  const postId = id;
  const { user } = useContext(AuthContext);
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      postId,
      commentId: comment.id,
    },
  });
  console.log(user);

  //@ts-ignore
  let person = user?.username;
  return (
    <SingleCommentContainer>
      <div style={{ fontWeight: "bold" }}>
        {comment.username}
        {":"}
      </div>
      <CommmentAndTrashContainer>
        <CommentTextContainer>{comment.body}</CommentTextContainer>
        {person === comment.username && (
          <DeleteCommmentButton className="delete-comment-button">
            <FaTrash size="1.2em" onClick={() => deleteComment()}>
              Delete Comment
            </FaTrash>
          </DeleteCommmentButton>
        )}
      </CommmentAndTrashContainer>
    </SingleCommentContainer>
  );
};

const DELETE_COMMENT_MUTATION = gql`
  mutation($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
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
export default SingleComment;
