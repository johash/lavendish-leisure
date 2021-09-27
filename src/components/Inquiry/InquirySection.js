import React from "react";

import styled from "styled-components";
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";

import Button from "../Button/Button";

function InquirySection() {
  return (
    <Wrapper>
      <InquiryContainer>
        <div>
          <span>Have a Question?</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
            libero, nec nisl, nulla consectetur. Est aliquam ut nisi laoreet
            ultricies eget.
          </p>
        </div>
        <FormContainer>
          <WrapperLeft>
            <TextField type="text" placeholder="Your Name*" />
            <TextField type="email" placeholder="Email*" />
            <TextField type="number" placeholder="Contact Number" />
          </WrapperLeft>
          <WrapperRight>
            <TextArea placeholder="Your Message" />
          </WrapperRight>
        </FormContainer>
        <Button>send message</Button>
      </InquiryContainer>
    </Wrapper>
  );
}

export default InquirySection;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const InquiryContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    font-weight: 300;
    font-size: 42px;
  }

  p {
    padding-top: 32px;
    display: block;
    width: 70%;
    margin: auto;
    line-height: 20px;
  }

  button {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    width: 100%;
    span {
      font-size: 22px;
    }
  }
`;

const FormContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 95%;
    align-items: center;
    flex-direction: column;
    input {
      border-bottom: none;
      border-right: none;
    }
    textarea {
      border-left: none;
      padding-left: 0;
    }
  }
`;

const WrapperLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperRight = styled.div`
  width: 50%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;
