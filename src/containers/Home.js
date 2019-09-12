import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import GeneratedPoemCard from "./GeneratedPoemCard/GeneratedPoemCard";

const Home = () => {

  return (
    <div className="home-container">
      {/* <GeneratedPoemCard />

      <PoemsList data={data && data.getPosts} /> */}
    </div>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      title
      createdAt
      username
      type
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
