import styled from "styled-components";

export const Container = styled.div`
  
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerHistoryItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;;

  @media (max-width: 470px) {
    align-items: stretch;
  }

  ${({nameButton}) => nameButton && `
    margin-bottom: 0px;
    box-shadow: none;
    padding: 0px 20px;

    @media (max-width: 470px){
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem 20px;
    }
  `}
`;

