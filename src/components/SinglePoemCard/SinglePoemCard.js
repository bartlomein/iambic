import React, { useContext } from "react";
import { Card, CardBody } from "shards-react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Like from "../Like/Like";
import { AuthContext } from "../../context/auth";
import CommentPost from "../CommentPost";
import { useMutation } from "@apollo/react-hooks";
import CommentList from "../../containers/CommentsList";
import gql from "graphql-tag";

import {
  SinglePoemContainer,
  DeletePoemContainerDiv,
  PoemsButtonsContainerDiv,
} from "./SinglePoemCardStyles";

function SinglePoemCard({
  body,
  date,
  likes,
  likesCount,
  id,
  comments,
  username,
  title,
}) {
  const { user } = useContext(AuthContext);
  const singlePoemContainerProps = {
    backgroundImage:
      "radial-gradient( circle 274px at 7.4% 17.9%,  rgba(82,107,248,1) 0.3%, rgba(167,139,252,1) 90.5%",
  };
  let postId = id;

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    variables: {
      postId,
    },
  });

  return (
    <SinglePoemContainer>
      <div style={{ marginTop: 20 }}>
        <Card>
          <CardBody>
            <Link to={`/poems/${id}`}>
              <h3>{title && title}</h3>
            </Link>
            {body.map((line) => (
              <div style={{ fontSize: 22 }}>{line}</div>
            ))}
            <div
              style={{
                textAlign: "right",
                fontSize: 16,
                fontStyle: "italic",
                marginRight: 30,
              }}
            >
              {" - "} {username}
            </div>
            <Like user={user} id={id} likesCount={likesCount} likes={likes} />
            <CommentList comments={comments} postId={id} username={username} />
            <PoemsButtonsContainerDiv>
              {user && (
                <CommentPost
                  id={id}
                  deletePost={deletePost}
                  username={username}
                />
              )}
            </PoemsButtonsContainerDiv>
          </CardBody>
        </Card>
      </div>
    </SinglePoemContainer>
  );
}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;
export default SinglePoemCard;
