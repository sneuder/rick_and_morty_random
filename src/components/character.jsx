import { useContext } from 'react';
import Context from "../context/context";
import orderInfo from "../utils/orderInfo";

import { Container } from "../shared/Container";
import { Picture } from "../shared/Picture";
import { Title1, Title4 } from "../shared/Title";
import { Text } from "../shared/Text";

import Message from "./message";

const Character = () => {
  const {information, setInformation} = useContext(Context);
  const { character } = information;

  if(!character.id) return <Message />;

  const {name, id, image} = character;
  const details = orderInfo(character);

  return (
    <Container horizontal>
      <Picture character src={image} />

      <Container character>
        <Container borderPadding>
          <Title1>{name}</Title1>
          <Title4>Character Id: {id}</Title4>
        </Container>

        <Container padding>
          {
            details.map((detail) => (
              <Container flexHorizontal key={detail.key}>
                <Text attribute>{detail.key}{':'}</Text>
                <Text value>{detail.value || "unknown"}</Text>
              </Container>
            ))
          }
        </Container>
      </Container>
    </Container>
  );
};

export default Character;
