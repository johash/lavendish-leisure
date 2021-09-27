import React from "react";

import styled from "styled-components";

function BenefitItem(props) {
  return (
    <CardContainer>
      {props.icon}
      <CardBody>
        <h5>{props.title}</h5>
        <p>{props.body}</p>
      </CardBody>
    </CardContainer>
  );
}

export default BenefitItem;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  margin: 0 10px;
`;

const CardBody = styled.div`
  padding-left: 25px;
  p {
    width: 75%;
    padding-top: 10px;
  }
`;
