import { useContext } from "react";
import Context from "../../context/context";
import orderInfo from "../../utils/orderInfo";

import { Line } from "./Line";
import { Container, ContainerCharacter, ContainerDetail, ContainerDetails, ContainerName } from "./Containers";

import { Picture } from "../../shared/Picture";
import { Title1, Title4 } from "../../shared/Title";
import { Text } from "../../shared/Text";

import Message from "../message/index";

const Character = () => {
  const { information, setInformation } = useContext(Context);
  const { character } = information;

  if (!character.id) return <Message />;

  const { name, id, image } = character;
  const details = orderInfo(character);

  return (
    <Container>
      <Picture character src={image} />

      <ContainerCharacter>
        <ContainerName>
          <Title1>{name}</Title1>
          <Title4>Character Id: {id}</Title4>
        </ContainerName>

        <ContainerDetails>
          {details.map((detail, index) => (
            <>
              <ContainerDetail key={detail.key}>
                <Text attribute>
                  {detail.key}
                  {":"}
                </Text>
                <Text value>{detail.value || "unknown"}</Text>
              </ContainerDetail>
              {details.length - 1 !== index && <Line />}
            </>
          ))}
        </ContainerDetails>
      </ContainerCharacter>
    </Container>
  );
};

export default Character;
