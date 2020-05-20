import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import {
  HeartContainer,
  LikeAreaContainer,
  LikesCountContainer,
} from "./LikeStyles";

// interfaces
interface User {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  token: string;
  __typename: string;
}
export interface Likes {
  username: string;
  __typename: string;
}

type Props = {
  user: User;
  id: string;
  likesCount: number;
  likes: [Likes];
};

const Like = ({ user, id, likesCount, likes }: Props) => {
  console.log(user);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  });
  return (
    <div>
      <div>
        {!user ? (
          `Please Login or Register to like or comment on this poem`
        ) : (
          <LikeAreaContainer>
            <LikesCountContainer>{likesCount + " Likes"}</LikesCountContainer>
            <HeartContainer>
              {!liked ? (
                // @ts-ignore
                <AiOutlineHeart onClick={likePost} size="2em">
                  {" "}
                  {!liked ? "Like Post" : "unlike"}
                </AiOutlineHeart>
              ) : (
                // @ts-ignore
                <AiFillHeart onClick={likePost} fill={"red"} size="2em">
                  {" "}
                  {!liked ? "Like Post" : "unlike"}
                </AiFillHeart>
              )}
            </HeartContainer>
          </LikeAreaContainer>
        )}
      </div>
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
