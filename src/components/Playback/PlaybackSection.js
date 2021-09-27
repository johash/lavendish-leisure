import React from "react";

import styled from "styled-components";

import location6 from "../../images/location6.png";

function PlaybackSection() {
  return <VideoContainer></VideoContainer>;
}

export default PlaybackSection;

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  background-image: url(${location6});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 120;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;
