import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.625rem 1.25rem;
  letter-spacing: 1px;

  background: ${colors.gradients.primary};
  border: none;
  padding: 0.875rem 1rem;
  color: #ffffff;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
