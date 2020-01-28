import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import GeneratedPoemCard from "../GeneratedPoemCard/GeneratedPoemCard";
import PoemsList from "../PoemsListContainer/PoemsListContainer";
import {
  HomeContainer,
  TopLeftTriangle,
  TopRightTriangle,
  RightTriangle
} from "./HomeStyles";
import Flower from "../../components/Flower/Flower";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
// import SecondFlower from '../../components/SecondFlower';

const Home = props => {
  return (
    <HomeContainer>
      {/* <PoemsContainer /> */}
      <TopLeftTriangle />
      <TopRightTriangle />
      <RightTriangle />
      {/*<Flower />*/}
      <GeneratedPoemCard setGeneratedPoem={props.setGeneratedPoem} />
      <WelcomeCard />
      {/* <SecondFlower /> */}
    </HomeContainer>
  );
};

export default Home;
