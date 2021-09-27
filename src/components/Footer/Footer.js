import React from "react";

import styled from "styled-components";

import FooterArtwork from "../../images/FooterArtwork.jpg";
import NewsLetter from "./NewsLetter/NewsLetter";
import QuickLinks from "./QuickLinks/QuickLinks";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
  return (
    <FooterContainer>
      <FooterTop />
      <FooterBottom>
        <FooterBody>
          <TopContainer>
            <SocialMedia />
            <QuickLinks />
            <NewsLetter />
          </TopContainer>
          <BottomContainer>
            <div>
              <ul>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Cookies</a>
                </li>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <p>© Lavendish Leisure. All Rights Reserved.</p>
              <p>Site Design ed & Developed by SEVN</p>
            </div>
          </BottomContainer>
        </FooterBody>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
`;

const FooterTop = styled.div`
  background-image: url(${FooterArtwork});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 195px;
`;

const FooterBottom = styled.div`
  background-color: #f9eff6;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 700px;
  }
`;

const FooterBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: 500px;
    div {
      width: 100%;
      align-items: center;
    }
    div:nth-child(1) {
      div {
        width: 30%;
      }
    }
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  div:nth-child(1) {
    width: 55%;
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 25px;
        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 300;
          color: grey;
        }
      }
    }
  }
  div:nth-child(2) {
    width: 45%;
    display: flex;
    p:nth-child(1) {
      margin-right: 3px;
    }
    p:nth-child(2) {
      color: grey;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    div {
      ul {
        li {
          margin-right: 0 !important;
        }
      }
    }
    div {
      width: 100% !important;
      display: flex;
      justify-content: space-evenly;
    }
    div:nth-child(1) {
      justify-content: space-evenly;
      width: 100%;
    }
    div:nth-child(2) {
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      p:nth-child(2) {
        margin-top: 20px;
        margin-bottom: 100px;
      }
    }
  }
`;
