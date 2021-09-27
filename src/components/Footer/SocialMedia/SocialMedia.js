import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  const imageStyle = {
    cursor: "pointer",
  };

  return (
    <ParentContainer>
      <p>We are Social</p>
      <p>Social Media Channels</p>
      <SocialImageContainer>
        <FaFacebookF size="19px" style={imageStyle} />

        <FaTwitter size="19px" style={imageStyle} />

        <FaInstagram size="19px" style={imageStyle} />
      </SocialImageContainer>

      {/* <BottomContainer>
       
      </BottomContainer> */}
    </ParentContainer>
  );
};

export default SocialMedia;

const ParentContainer = styled.div`
  width: 25%;
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

const SocialImageContainer = styled.div`
  display: flex;
  width: 32%;
  justify-content: space-between;
  margin-top: 16px;
`;
