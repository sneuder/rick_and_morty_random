import { gql } from "@apollo/client";

export const CHARACTER = gql`
  query {
    character(id: "301") {
      name
      id
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      created
      image
    }
  }
`;
