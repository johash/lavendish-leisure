import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import logo from "../../images/lavendish-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ transparent, setShow, show }) => {
  let styles = null;

  if (!transparent) {
    styles = {
      backgroundColor: "white",
      height: "12vh",
      transition: "0.5s",
      boxShadow: "0px 10px 31px -13px rgba(0,0,0,0.75)",
    };
  }

  return (
    <ParentContainer style={styles}>
      <LeftContainer>
        <LeftContainerList>
          <li>
            <a href="/">OUR PROPERTIES</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">EXPLORE</a>
          </li>
        </LeftContainerList>
      </LeftContainer>
      <MiddleContainer>
        <img src={logo} alt="logo" />
      </MiddleContainer>
      <RightContainer>
        <RightContainerList>
          <li>
            <a href="/">CONTACT US</a>
          </li>
          <GiHamburgerMenu size="50px" onClick={() => setShow(!show)} />
          <Button primary>Book Now</Button>
        </RightContainerList>
      </RightContainer>
    </ParentContainer>
  );
};

export default Header;

const ParentContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  height: 14vh;
  transition: 0.5s;
  @media (max-width: 768px) {
    justify-content: space-evenly;
    height: 12vh;
  }
`;

const LeftContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MiddleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 50%;
    img {
      width: 150px;
    }
  }
`;
const RightContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const LeftContainerList = styled.ul`
  list-style: none;
  display: flex;
  width: 85%;
  justify-content: space-evenly;
  align-items: center;

  li {
    a {
      text-decoration: none;
      color: black;
      font-weight: 300;
      font-size: 14px;
    }
  }
`;
const RightContainerList = styled.ul`
  list-style: none;
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;

  li {
    a {
      text-decoration: none;
      color: black;
      font-weight: 300;
      font-size: 14px;
    }
  }
  svg {
    display: none;
  }
  @media (max-width: 768px) {
    li {
      display: none;
    }
    svg {
      display: block;
      color: #a989bf;
      transform: scale(0.6);
    }
    button {
      padding: 10px;
      font-size: 12px;
    }
  }
`;
