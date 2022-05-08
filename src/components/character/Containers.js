import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerCharacter = styled.div`
  width: 100%;
  margin-left: 20px;
  min-height: auto;
  border-radius: 0.3rem;
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;

  @media (max-width: 820px) {
    margin: 2rem 0 0 0;
  }
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