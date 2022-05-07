import styled from "styled-components";

export const Text = styled.p`
  ${props => props.attribute && `font-weight: 700`}
  ${props => props.value && `font-weight: 400`}
`;