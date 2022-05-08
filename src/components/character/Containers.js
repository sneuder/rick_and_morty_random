import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ContainerCharacter = styled.div`
  width: 100%;
  margin-left: 20px;
  min-height: auto;
  border-radius: 0.3rem;
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
`;

export const ContainerName = styled.div`
  border-bottom: 1px solid rgb(236, 237, 239);
  padding: 12px 20px;
`;



export const ContainerDetails = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const ContainerDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;