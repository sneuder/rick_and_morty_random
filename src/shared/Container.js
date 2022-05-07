import styled from "styled-components";

export const Container = styled.div`
  ${props => props.container && `width: 100vw`}

  ${props => props.vertical && `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  `}

  ${props => props.character && `
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
    box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  `}

  ${props => props.values && `
    display: flex;
    justify-content: space-between;
  `}

  ${props => props.borderB && `border-bottom: 1px solid rgb(236, 237, 239)`}
  ${props => props.paddingG && `padding: 12px 20px`}
`