import React from "react";

import styled from "styled-components";

function TextArea(props) {
  return <TA placeholder={props.placeholder} />;
}

export default TextArea;

const TA = styled.textarea`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 22px 20px;
  border-top: #debad8 1px solid;
  border-left: #debad8 1px solid;
  border-bottom: #debad8 1px solid;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;

  :focus {
    outline: none;
  }
`;
