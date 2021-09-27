import React from "react";
import styled from "styled-components";

const Backdrop = ({ setShow }) => {
  return <Container onClick={() => setShow(false)}></Container>;
};

export default Backdrop;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 250;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;
