import { gql } from "@apollo/client";

export const CHARACTER = gql`
  query findCharacterById($id: ID!) {
    character(id: $id) {
      name
      id
      status
      species
      type
      gender
      image
      origin {
        name
      }
      location {
        name
      }
      created
    }
  }
`;
