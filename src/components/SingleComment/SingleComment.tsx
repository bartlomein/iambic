import React from "react";
import gql from "graphql-tag";
import { SingleCommentContainer } from "./SingleCommentStyles";
import { useQuery, useMutation } from "@apollo/react-hooks";

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
};

const SingleComment = ({ id, comment }: Props) => {
  const postId = id;
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      postId,
      commentId: comment.id
    }
  });

  return (
    <SingleCommentContainer>
      <div style={{ fontWeight: "bold" }}>
        {comment.username}
        {":"}
      </div>
      <div style={{ paddingLeft: 5 }}>{comment.body}</div>
      <button onClick={() => deleteComment()}>DELETE</button>
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
