import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import GeneratedPoemCard from '../GeneratedPoemCard/GeneratedPoemCard';
import PoemsContainer from '../PoemsContainer/PoemsContainer';
import { HomeContainer } from './styles';
import Flower from '../../components/Flower/Flower';
import WelcomeCard from '../../components/WelcomeCard/WelcomeCard';
import SecondFlower from '../../components/SecondFlower';

const Home = props => {
  return (
    <HomeContainer>
      {/* <PoemsContainer /> */}
      <Flower />
      <GeneratedPoemCard setGeneratedPoem={props.setGeneratedPoem} />
      <WelcomeCard />
      <SecondFlower />
    </HomeContainer>
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
