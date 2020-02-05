import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button } from "shards-react";
import { AiOutlineHeart } from "react-icons/ai";
const Like = ({ user, id, likesCount, likes }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && likes.find(like => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id }
  });
  return (
    <div>
      {likesCount + " Likes"}
      {!user ? (
        "Please Login or Register to like this poem "
      ) : (
        <div>
          <AiOutlineHeart onClick={likePost}>
            {" "}
            {!liked ? "Like Post" : "unlike"}
          </AiOutlineHeart>
        </div>
      )}
    </div>
  );
};

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likesCount
    }
  }
`;
export default Like;
