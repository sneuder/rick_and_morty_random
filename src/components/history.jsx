import { useContext } from "react";
import Context from "../context/context";

import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Picture } from "../shared/Picture";
import { Title2, Title3 } from "../shared/Title";

const History = () => {
  const { information, setInformation } = useContext(Context);
  const { history } = information;

  if (history.length === 0) return <></>;

  return (
    <Container>
      <Container center>
        <Title2>History</Title2>
      </Container>

      {history.map((character) => (
        <Container flexHistory key={character.id}>
          <Picture history src={character.image} />

          <Container flexHorizontal>
            <Title3>{character.name}</Title3>
            <Button
              view
              onClick={() =>
                setInformation({ ...information, character: character })
              }
            >
              View
            </Button>
          </Container>
        </Container>
      ))}
    </Container>
  );
};

export default History;
