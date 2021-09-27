import React from "react";

import styled from "styled-components";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function NewsLetter() {
  return (
    <Container>
      <p>Get the Latest Offers</p>
      <p>Newsletter Sign Up</p>
      <ContactField>
        <input placeholder="Contact Us" />
        <HiOutlineArrowNarrowRight
          size="50px"
          color="#a989bf"
          style={{ position: "absolute", right: 0 }}
        />
      </ContactField>
    </Container>
  );
}

export default NewsLetter;

const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p:nth-child(1) {
    color: #a989bf;
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 4px;
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 400;
  }
`;

const ContactField = styled.div`
  border: none;
  background-color: transparent;
  position: relative;
  display: flex;
  height: 50px;
  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: #828282 1px solid;
    color: grey;

    font-size: 14px;
    &:active {
      outline: none;
    }

    @media (max-width: 768px) {
      padding-bottom: 10px;
    }
  }
`;
