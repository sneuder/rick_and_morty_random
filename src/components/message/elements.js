import styled from 'styled-components';
import colors from '../../styles/colors';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${colors.primary};

  @media (max-width: 550px) {
    text-align: center;
    padding: 40px;
  }
`;
