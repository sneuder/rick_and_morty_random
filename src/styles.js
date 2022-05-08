import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Play, sans-serif;
    letter-spacing: 1px;
  }
`;
 

export const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 40px 90px;

  @media (max-width: 820px) {
    padding: 30px 2rem;

  }
`;