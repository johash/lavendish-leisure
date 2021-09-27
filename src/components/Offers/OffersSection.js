import React from "react";

import styled from "styled-components";
import Button from "../Button/Button";
import offersBackground from "../../images/offers_background.png";

function OffersSection() {
  return (
    <Wrapper>
      <Container>
        <h2>Offers you can't Beat</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum libero,
          nec nisl, nulla consectetur. Est aliquam ut nisi laoreet ultricies
          eget.
        </p>
        <Button>view all offers</Button>
      </Container>
    </Wrapper>
  );
}

export default OffersSection;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 75%;
  height: 450px;
  background-color: #f9eff6;
  background-image: url(${offersBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 92px 240px;
  h2 {
    font-size: 42px;
  }
  p {
    max-width: 75%;
    margin-top: 20px;
    text-align: center;
  }
  button {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 50%;
    padding: 50px 20px;
    background-size: contain;
    background-position: bottom;
    h2 {
      font-size: 22px;
    }
    p {
      width: 100%;
    }
    button {
      font-size: 10px;
    }
  }
`;
