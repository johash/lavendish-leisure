import React from "react";
import styled from "styled-components";
import waterColor01 from "../../images/Watercolour-003-Edit-1.png";
import waterColor02 from "../../images/Watercolour-003-Edit2.png";
import heroImage from "../../images/hero-image.png";
import heroMob from "../../images/Lavendish-Hero-Mobile.png";

const Hero = () => {
  return (
    <ParentContainer>
      <LeftContainer>
        <img src={waterColor02} alt="" />
      </LeftContainer>
      <MiddleContainer>
        <img src={heroImage} alt="" />
      </MiddleContainer>
      <RightContainer>
        <img src={waterColor01} alt="" />
      </RightContainer>
      <HeroMob />
    </ParentContainer>
  );
};

export default Hero;

const ParentContainer = styled.div`
  display: flex;
  height: 360px;
  margin-bottom: 70px;
`;

const LeftContainer = styled.div`
  position: relative;
  z-index: 50;
  top: 180px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MiddleContainer = styled.div`
  margin-top: 100px;
  position: absolute;
  z-index: 100;
  img {
    width: 100%;
  }

  img:nth-child(2) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  position: relative;
  right: 130px;
  z-index: 50;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroMob = styled.div`
  background-image: url(${heroMob});
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
