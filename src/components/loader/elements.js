import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  border-radius: 0.3rem;
  background-color: #d0d0d0;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
