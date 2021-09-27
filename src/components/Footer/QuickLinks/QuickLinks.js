import React from "react";
import styled from "styled-components";

const QuickLinks = () => {
  return (
    <ParentContainer>
      <p>We can Help</p>
      <p>Quick Links</p>
      <LinkList>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Media</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </LinkList>
    </ParentContainer>
  );
};

export default QuickLinks;

const ParentContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 83px;
  p:nth-child(1) {
    color: #a989bf;
    font-weight: 300;
    font-size: 12px;
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 400;
  }
`;

const LinkList = styled.ul`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-top: 16px;
  list-style: none;
  li {
    a {
      font-size: 14px;
      text-decoration: none;
      color: black;
      font-weight: 300;
    }
  }
`;
