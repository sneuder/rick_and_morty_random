import styled from "styled-components";

export const Title1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px;
  color: rgb(31, 38, 45);

  ${({message}) => message && `
    font-size: 30px;
    font-weight: 400;
    padding: 80px;

    @media (max-width: 550px) {
      text-align: center;
      padding: 40px;
    }
  `}
`;

export const Title2 = styled.h2`
  margin: 30px 0px;
  font-size: 25px;
`;

export const Title3 = styled.h3`
  @media (max-width: 470px) {
    margin-bottom: 10px;
  }
`;

export const Title4 = styled.h4`
  font-size: 0.625rem;
  text-transform: uppercase;
  margin: 4px 0px;
  font-weight: 600;
  color: rgb(111, 115, 122);
`;
