import { Container } from "../shared/Container";
import { Picture } from "../shared/Picture";
import { Title1, Title4 } from "../shared/Title";
import { Text } from "../shared/Text";

const Character = () => {
  return (
    <Container vertical>
      <Picture src="https://picsum.photos/id/1/300/300" />

      <Container character>
        <Container>
          <Title1>Esneider</Title1>
          <Title4>Id of character</Title4>
        </Container>

        <Container>
          <Container values>
            <Text attribute>asass{':'}</Text>
            <Text value>asass</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Character;
