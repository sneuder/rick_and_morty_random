import { useQuery } from "@apollo/client";
import { CHARACTER } from "../graphql/queries";
import orderInfo from "../utils/orderInfo";

import { Container } from "../shared/Container";
import { Picture } from "../shared/Picture";
import { Title1, Title4 } from "../shared/Title";
import { Text } from "../shared/Text";

const Character = () => {
  const { loading, error, data } = useQuery(CHARACTER);

  if (loading) return <p>Loading...</p>;

  const { character } = data;
  const { name, id, image } = character;
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
              <Container flexHorizontal>
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
