import React from "react";

import styled from "styled-components";

import image from "../../images/Sri-Lankan-Map.png";
import Button from "../Button/Button";

function AboutSection() {
  return (
    <Container>
      <Image />
      <AboutContainer>
        <AboutContent>
          <h2>The Lavendish Way</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
            libero, nec nisl, nulla consectetur. Est aliquam ut nisi laoreet
            ultricies eget. Sagittis arcu malesuada orci, semper scelerisque
            eget. Praesent enim cursus nullam interdum odio leo nulla ultricies
            elit. Ut auctor aliquet facilisis pulvinar mauris malesuada. Non
            vehicula nisi, egestas tortor, adipiscing placerat. Sit aenean massa
            duis vitae sed dignissim vel.
          </p>
          <p>
            Vitae feugiat consectetur eget tempor. Netus platea amet nunc quis
            aliquet. Quam consequat sit aliquet nam pretium at sollicitudin
            proin gravida. Netus aliquet ut viverra massa ornare arcu pharetra.
            Leo nunc nunc ac nam posuere diam scelerisque. Sed sit lectus libero
            risus, sed mattis sit. Leo pretium lobortis suspendisse egestas.
            Nibh eget eu, ipsum consequat ut eu eros, pellentesque. Augue leo
            egestas neque libero.
          </p>
          <ButtonContainer>
            <Button>Learn More</Button>
            <Button primary>Book Now</Button>
          </ButtonContainer>
        </AboutContent>
      </AboutContainer>
    </Container>
  );
}

export default AboutSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 400px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
    top: 30px;
    h2 {
      font-size: 22px;
    }
  }
`;

const Image = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  width: 45%;
  height: 900px;
  position: relative;
  @media (max-width: 768px) {
    width: 90%;
    height: 523px;
    margin-top: -150px;
  }
`;

const AboutContainer = styled.div`
  background-color: #f8f6f9;
  width: 60%;
  height: fit-content;
  margin-left: -25%;
  display: flex;
  place-content: end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-left: 0;
    place-content: start;
  }
`;

const AboutContent = styled.div`
  background-color: #f8f6f9;
  width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 40px 70px;
  p {
    padding-top: 32px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    padding: 20px;
    justify-content: center;

    button {
      font-size: 10px;
    }

    h2 {
      padding-top: 30px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 50px;
  button {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    align-items: center;
    justify-content: space-evenly;
    button {
      margin-right: 0;
    }
    padding-bottom: 150px;
  }
`;
