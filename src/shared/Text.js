import styled from "styled-components";

export const Text = styled.p`
  ${props => props.attribute && `
    font-weight: 700;
    padding-right: 1rem;
    &::first-letter {
      text-transform: uppercase;
    }
  `}
  ${props => props.value && `
    font-weight: 400;
    width: 70%;
    text-align: right;
  `}
`;