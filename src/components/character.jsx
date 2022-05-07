import { Container } from "../shared/Container";
import { Picture } from "../shared/Picture";
import { Title1, Title4 } from "../shared/Title";
import { Text } from "../shared/Text";

const Character = () => {
  return (
    <Container horizontal>
      <Picture src="https://picsum.photos/id/1/300/300" />

      <Container character>
        <Container borderPadding>
          <Title1>Esneider</Title1>
          <Title4>Character Id: 323</Title4>
        </Container>

        <Container padding>
          <Container flexHorizontal>
            <Text attribute>asass{':'}</Text>
            <Text value>asass</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Character;
