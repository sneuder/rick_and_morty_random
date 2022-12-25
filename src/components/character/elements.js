import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 2rem;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`;

export const Card = styled.div`
  border-radius: 0.3rem;
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  align-self: start;
`;

export const ContainerHeader = styled.div`
  padding: 12px 20px;
  display: grid;
  gap: 0.5rem;
  border-bottom: 1px solid ${colors.whiteGrey};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const SubTitle = styled.h3`
  color: ${colors.lightGrey};
  font-size: 0.65rem;
  text-transform: uppercase;
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  padding: 12px 20px;
`;

export const ContainerDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleDetail = styled.h4`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TextDetail = styled.p`
  text-align: right;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #e5e5e5;
`;
