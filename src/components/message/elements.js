import styled from 'styled-components';
import colors from '../../styles/colors';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: ${colors.primary};

  @media (max-width: 550px) {
    padding: 40px;
  }
`;
