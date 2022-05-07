import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  ${props => props.generate && `
    background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));
  `}

  ${props => props.view && `
    border: 1px solid rgb(130, 101, 252);
    font-size: 12px;
    border-radius: 0.3rem;
    padding: 0.625rem 1.25rem;
    background-color: transparent;
    color: rgb(130, 101, 252);
    font-weight: 600;
    text-transform: uppercase;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgb(130, 101, 252);
      color: #ffffff;
    }
  `}
`;