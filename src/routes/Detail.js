import React from "react";
import { useParams } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const GET_BENEFITS = gql`
  query getBenefit($id: Int!) {
    getBenefit(id: $id) {
      id
      title
      description
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_BENEFITS, {
    variables: { id: +id },
  });

  console.log(loading, data, +id);
  return (
    <div>
      <h1>{data?.getBenefit?.title}</h1>
      <h1>{data?.getBenefit?.description}</h1>
    </div>
  );
};

export default Detail;
