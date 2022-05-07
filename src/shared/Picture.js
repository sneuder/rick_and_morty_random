import styled from "styled-components";

export const Picture = styled.img`
  width: 100%;

  ${props => props.history && `
    width: 80px;
    height: auto;
  `}
`