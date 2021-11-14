import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Card from "../components/Card";

const GET_BENEFIT = gql`
  {
    benefits {
      id
      title
      description
      category
      location
      address
      thumbnail
      benefit
      benefits
      conditions
      others
      images
      links
      call
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_BENEFIT);

  return (
    <div>
      <header>군복무 가이드</header>
      {loading && "Loading"}
      {!loading &&
        data.benefits &&
        data.benefits.map((m) => (
          <Card key={m.id} id={m.id} title={m.title} benefit={m.benefit} />
        ))}
    </div>
  );
};

export default Home;
