import { useContext } from "react";
import Context from "../../context/context";

import { Container, ContainerHistoryItem, ContainerTitle } from "./Container";

import { Button } from "../../shared/Button";
import { Picture } from "../../shared/Picture";
import { Title2, Title3 } from "../../shared/Title";

const History = () => {
  const { information, setInformation } = useContext(Context);
  const { history } = information;

  if (history.length === 0) return <></>;

  return (
    <Container>
      <ContainerTitle>
        <Title2>History</Title2>
      </ContainerTitle>

      {history.map((character) => (
        <ContainerHistoryItem key={character.id}>
          <Picture history src={character.image} />

          <ContainerHistoryItem nameButton>
            <Title3>{character.name}</Title3>
            <Button
              view
              onClick={() =>
                setInformation({ ...information, character: character })
              }
            >
              View
            </Button>
          </ContainerHistoryItem>
        </ContainerHistoryItem>
      ))}
    </Container>
  );
};

export default History;
