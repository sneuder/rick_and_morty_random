import styled from "styled-components";

export const Picture = styled.img`

  ${props => props.character && `
    width: 80%;
    min-height: 300px;
  `}

  ${props => props.history && `
    width: 80px;
    height: auto;
  `}
`