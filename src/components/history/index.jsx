import ViewButton from '../../shared/components/viewButton';

import {
  Container,
  Title,
  ContainerCards,
  Card,
  Image,
  NameCharacter,
} from './elements';

const History = ({ history }) => {
  return (
    <Container>
      <Title>history</Title>
      <ContainerCards>
        {history.map((character) => (
          <Card key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
            />
            <NameCharacter>{character.name}</NameCharacter>
            <ViewButton mainCharacter={character} />
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default History;
