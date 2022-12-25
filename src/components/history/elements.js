import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const Title = styled.h2`
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-colums: 1fr;
  gap: 1rem;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: center;
  gap: 1rem;
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  padding-right: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.3rem 0 0 0.3rem;
`;

export const NameCharacter = styled.h3``;
