import { gql } from "@apollo/client";

export const CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
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
