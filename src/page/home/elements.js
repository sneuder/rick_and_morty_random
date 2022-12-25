import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 40px 90px;
  margin: auto;

  @media (max-width: 1040px) {
    padding: 40px 60px;
  }

  @media (max-width: 760px) {
    padding: 2rem 2rem;
  }
`;
