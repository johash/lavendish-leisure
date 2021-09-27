import React from "react";

import styled from "styled-components";

import location1 from "../../images/location1.jpg";
import location2 from "../../images/location2.jpg";
import location3 from "../../images/location3.jpg";
import location4 from "../../images/location4.png";
import location5 from "../../images/location5.png";

import floral01 from "../../images/floral01.png";
import floral02 from "../../images/floral02.png";
import floral03 from "../../images/floral03.png";
import floral04 from "../../images/floral04.png";
import floral05 from "../../images/floral05.png";

function PropertiesSection() {
  return (
    <Container>
      <Floral01Image />
      <Floral02Image />
      <Floral03Image />
      <Floral04Image />
      <Floral05Image />
      <LuxuryTitleContainer>
        <h2>Indulge in Pure Luxury</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum libero,
          nec nisl, nulla consectetur. Est aliquam ut nisi laoreet ultricies
          eget.
        </p>
      </LuxuryTitleContainer>
      <LuxuryImageContainer>
        <LuxuryImage1>
          <ImageTitle>Lavendish Somewhere</ImageTitle>
        </LuxuryImage1>
        <LuxuryImage2>
          <ImageTitle>Lavendish Somewhere</ImageTitle>
        </LuxuryImage2>
      </LuxuryImageContainer>

      <ExperienceTitleContainer>
        <h2>Live for the Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum libero,
          nec nisl, nulla consectetur. Est aliquam ut nisi laoreet ultricies
          eget.
        </p>
      </ExperienceTitleContainer>
      <ExperienceImageContainer>
        <ExperienceImage1>
          <ImageTitle>Lavendish Somewhere</ImageTitle>
        </ExperienceImage1>
        <ExperienceImage2>
          <ImageTitle>Lavendish Somewhere</ImageTitle>
        </ExperienceImage2>
        <ExperienceImage3>
          <ImageTitle>Lavendish Somewhere</ImageTitle>
        </ExperienceImage3>
        <ExperienceImage4>
          <ImageTitle>Lavendish Somewhere</ImageTitle>
        </ExperienceImage4>
      </ExperienceImageContainer>
    </Container>
  );
}

export default PropertiesSection;

const Container = styled.div`
  background-color: #f9eff6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 20%;
  }
`;

const LuxuryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-top: 110px;
  padding-bottom: 40px;
  p {
    padding-top: 20px;
    width: 50%;
  }
  @media (max-width: 768px) {
    text-align: center;
    padding: 30px 20px;
    width: 100%;
    h2 {
      font-size: 22px;
    }
    p {
      width: 100%;
    }
  }
`;

const ExperienceTitleContainer = styled(LuxuryTitleContainer)`
  align-items: flex-end;
  padding-top: 200px;
  text-align: right;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 30px 20px;
    width: 100%;
    h2 {
      font-size: 22px;
    }
    p {
      width: 100%;
    }
  }
`;

const LuxuryImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: 88%;
  z-index: 120;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px 20px;
  }
`;

const ExperienceImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: 88%;
  z-index: 120;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    p {
      width: 50%;
      text-align: left;
    }
  }
`;

const LuxuryImage1 = styled.div`
  background-image: url(${location1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 49%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    height: 160px;
    margin-bottom: 20px;
  }
`;

const ExperienceImage1 = styled.div`
  background-image: url(${location3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 24%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 46%;
    height: 170px;
    margin: 5px 5px;
  }
`;

const ExperienceImage2 = styled(ExperienceImage1)`
  background-image: url(${location3});
`;
const ExperienceImage3 = styled(ExperienceImage1)`
  background-image: url(${location4});
`;
const ExperienceImage4 = styled(ExperienceImage1)`
  background-image: url(${location5});
`;

const LuxuryImage2 = styled(LuxuryImage1)`
  background-image: url(${location2});
`;

const ImageTitle = styled.p`
  color: white;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  text-align: center;
  padding-left: 52px;
  padding-bottom: 22px;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 12px;
  }
`;

const FloralImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Floral01Image = styled(FloralImage)`
  background-image: url(${floral01});
  width: 250px;
  height: 250px;
  left: 0;
  top: -110px;
`;

const Floral02Image = styled(FloralImage)`
  background-image: url(${floral02});
  width: 400px;
  height: 900px;
  right: 0;
  top: -150px;
  z-index: 100;
`;

const Floral03Image = styled(FloralImage)`
  background-image: url(${floral03});
  width: 450px;
  height: 1200px;
  left: 0;
  bottom: -310px;
  z-index: 100;
`;

const Floral04Image = styled(FloralImage)`
  background-image: url(${floral04});
  width: 95px;
  height: 130px;
  left: 200px;
  bottom: 370px;
`;

const Floral05Image = styled(FloralImage)`
  background-image: url(${floral05});
  width: 130px;
  height: 130px;
  left: 470px;
  bottom: 520px;
`;
