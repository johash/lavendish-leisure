import React from "react";

import styled from "styled-components";

function TextField(props) {
  return <Inp placeholder={props.placeholder} type={props.type} />;
}

export default TextField;

const Inp = styled.input`
  border: none;
  padding: 22px 0;
  border-top: #debad8 1px solid;
  border-right: #debad8 1px solid;
  border-bottom: #debad8 1px solid;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding-left: -100px;
  font-weight: 300;
  font-size: 14px;

  :focus {
    outline: none;
  }
`;
