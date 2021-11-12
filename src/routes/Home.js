import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Card from "../components/Card";

const GET_BENEFITS = gql`
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
  const { loading, error, data } = useQuery(GET_BENEFITS);

  if (loading) {
    return "Loading...";
  }
  if (data && data.benefits) {
    return data.benefits.map((m) => {
      return <Card title={m.title} benefit={m.benefit} />;
    });
  }
};

export default Home;
