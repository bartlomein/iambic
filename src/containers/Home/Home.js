import React from "react";

import GeneratedPoemCard from "../GeneratedPoemCard/GeneratedPoemCard";

import {
  HomeContainer,
  TopLeftTriangle,
  TopRightTriangle,
  RightTriangle,
} from "./HomeStyles";
import Flower from "../../components/Flower/Flower";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
// import SecondFlower from '../../components/SecondFlower';

const Home = (props) => {
  return (
    <HomeContainer className="home-container">
      {/* <PoemsContainer /> */}
      <TopLeftTriangle />
      <TopRightTriangle />
      <RightTriangle />
      <Flower />
      <GeneratedPoemCard setGeneratedPoem={props.setGeneratedPoem} />
      <WelcomeCard />
      {/* <SecondFlower /> */}
    </HomeContainer>
  );
};

export default Home;
