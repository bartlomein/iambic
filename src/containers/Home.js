import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import GeneratedPoemCard from './GeneratedPoemCard';

const Home = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  if (data) {
    console.log(data);
  }
  return (
    <div>
      HOME
      <GeneratedPoemCard />
    </div>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
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
