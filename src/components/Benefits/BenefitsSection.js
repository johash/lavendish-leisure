import React from "react";

import styled from "styled-components";

import BenefitItem from "./BenefitItem/BenefitItem";

import { ReactComponent as RatesIcon } from "../../icons/best-rates-icon.svg";
import { ReactComponent as CheckinIcon } from "../../icons/checkin-icon.svg";
import { ReactComponent as PrivacyIcon } from "../../icons/privacy-icon.svg";

function BenefitsSection() {
  const benefits = [
    {
      icon: <RatesIcon />,
      title: "Rates no one can beat",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: <CheckinIcon />,
      title: "Flexible check-in",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: <PrivacyIcon />,
      title: "Your private haven",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <Container>
      <h2>Benefits you can expect</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum libero,
        nec nisl, nulla consectetur. Est aliquam ut nisi laoreet ultricies eget.
      </p>
      <BenefitsContainer>
        {benefits.map((benefit) => {
          return (
            <BenefitItem
              icon={benefit.icon}
              title={benefit.title}
              body={benefit.body}
            />
          );
        })}
      </BenefitsContainer>
    </Container>
  );
}

export default BenefitsSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 400px;
  p {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin: 0;
    text-align: center;
    h2 {
      font-size: 22px;
    }
    p {
      margin-top: 20px;
    }
  }
`;

const BenefitsContainer = styled.div`
  display: flex;
  width: 80%;
  padding-top: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    div {
      width: 100%;
      text-align: left;
    }
    p {
      width: 100%;
    }
  }
`;
