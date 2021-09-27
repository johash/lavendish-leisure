import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const SideNav = ({ show, setShow }) => {
  let styles = null;

  if (show) {
    styles = {
      left: 0,
      transition: "0.5s",
    };
  }

  return (
    <Drawer style={styles}>
      <div>
        <p>MENU</p>
        <GrClose size="20px" onClick={() => setShow(false)} />
      </div>
      <div>
        <ul>
          <li>
            <a href="/">OUR PROPERTIES</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">EXPLORE</a>
          </li>
          <li>
            <a href="/">CONTACT US</a>
          </li>
        </ul>
      </div>
    </Drawer>
  );
};

export default SideNav;

const Drawer = styled.div`
  position: fixed;
  left: -70vw;
  z-index: 260;
  width: 70vw;
  height: 100vh;
  background-color: #292929;
  transition: 0.5s;
  border-bottom-right-radius: 10px;
  div:nth-child(1) {
    border-bottom-right-radius: 10px;

    height: 10vh;
    background-color: #a989bf;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    p {
      font-size: 20px;
      color: white;
    }
  }
  div:nth-child(2) {
    height: 50vh;
    ul {
      height: 100%;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      list-style: none;
      li {
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;
