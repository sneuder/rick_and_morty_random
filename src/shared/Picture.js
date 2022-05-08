import styled from "styled-components";

export const Picture = styled.img`

  ${props => props.character && `
    width: 60%;
    min-height: 300px;
    border-radius: 0.3rem;

    @media (max-width: 820px) {
      width: 100%;
    }
  `}

  ${props => props.history && `
    width: 80px;
    height: auto;
    border-radius: 0.3rem 0 0 0.3rem;
  `}
`