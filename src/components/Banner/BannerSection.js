import React from "react";

import styled from "styled-components";

import ctaBanner from "../../images/CTA-banner.jpg";
import Button from "../Button/Button";

function BannerSection() {
  return (
    <BannerContainer>
      <Banner>
        <ContentWrapper>
          <div>
            <span>Your dream getaway, at hand.</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              libero, nec nisl, nulla consectetur. Est aliquam ut nisi laoreet
              ultricies eget. Sagittis arcu malesuada orci, semper scelerisque
              eget.
            </p>
          </div>
          <Button>Book Now</Button>
        </ContentWrapper>
      </Banner>
    </BannerContainer>
  );
}

export default BannerSection;

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Banner = styled.div`
  background-image: url(${ctaBanner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 245px;
  span {
    font-size: 42px;
    color: white;
    font-weight: 300;
  }
  p {
    width: 50%;
    color: white;
    font-weight: 400;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    height: 400px;
    background-size: cover;
    span {
      font-size: 22px;
    }
    p {
      width: 100%;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10%;
  div {
    width: 75%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    button {
      font-size: 10px;
      margin-top: 30%;
    }
    div {
      width: 90%;
    }
  }
`;
