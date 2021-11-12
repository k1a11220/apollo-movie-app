import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 366px;
  height: 92px;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin-bottom: 16px;
`;

const TextArea = styled.div`
  margin-left: 26px;

  & h3 {
    font-size: 14px;
    margin-bottom: 8px;
    color: #717989;
  }

  & h2 {
    font-size: 16px;
    font-weight: 600;
    color: #4191fd;
  }
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 60px;
  background-color: teal;
  border-radius: 10px;
  margin-right: 16px;
`;

const Card = ({ title, benefit }) => {
  return (
    <Container>
      <TextArea>
        <h3>{title}</h3>
        <h2>{benefit}</h2>
      </TextArea>
      <Thumbnail />
    </Container>
  );
};

export default Card;
