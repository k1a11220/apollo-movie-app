import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div``;

const CardList = ({ data }) => {
  return (
    <Container>
      {data.map((posts) => {
        <Card title={posts.title} benefit={posts.benefit} />;
      })}
    </Container>
  );
};

export default CardList;
