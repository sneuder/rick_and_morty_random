import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${props => props.horizontal && `
    display: flex;
    align-items: flex-start;

  `}

  ${props => props.flexHorizontal && `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  `}

  ${({center}) => center && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ${({character}) => character && `
    margin-left: 20px;
    min-height: auto;
    border-radius: 0.3rem;
    box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  `}

  ${({flexHistory}) => flexHistory && `
    height: auto;
    border-radius: 0.3rem;
    margin-bottom: 20px;
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

  ${props => props.generate && `
    padding: 12px 0;
    display: flex;
    justify-content: flex-end;
  `}
`