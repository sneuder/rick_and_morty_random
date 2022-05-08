import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.625rem 1.25rem;
  letter-spacing: 1px;

  ${props => props.generate && `
    background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));
    border: none;
    padding: 0.875rem 1rem;
    color: #ffffff;

    @media (max-width: 550px) {
      width: 100%;
    }
  `}

  ${props => props.view && `
    border: 1px solid rgb(130, 101, 252);
    background-color: transparent;
    color: rgb(130, 101, 252);

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgb(130, 101, 252);
      color: #ffffff;
    }
  `}
`;