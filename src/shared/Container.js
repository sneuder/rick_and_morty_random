import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${props => props.horizontal && `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  `}

  ${props => props.flexHorizontal && `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  ${({character}) => character && `
    height: auto;
    border-radius: 0.3rem;
    box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  `}

  ${({flexHistory}) => flexHistory && `
    height: auto;
    border-radius: 0.3rem;
    box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
    display: flex;
  `}

  ${props => props.values && `
    display: flex;
    justify-content: space-between;
  `}

  ${props => props.borderPadding && `
    border-bottom: 1px solid rgb(236, 237, 239);
    padding: 12px 20px;
  `}

  ${props => props.padding && `
    padding: 12px 20px;
  `}
`