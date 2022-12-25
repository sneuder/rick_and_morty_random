import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.purple};
  height: 2.5rem;
  padding: 0 1.5rem;
  border: 1px solid ${colors.purple};
  border-radius: 0.3rem;
  background: transparent;

  transition: background 0.3s ease-in-out 0s;

  &:hover {
    color: ${colors.secondary};
    background: ${colors.purple};
  }
`;
