import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import GeneratedPoemCard from "./GeneratedPoemCard/GeneratedPoemCard";
import PoemsList from "./PoemsList";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  if (data) {
    console.log(data);
  }
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
