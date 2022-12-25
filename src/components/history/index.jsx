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
        {history.map(({ id, name, image }) => (
          <Card key={id}>
            <Image
              src={image}
              alt={name}
            />
            <NameCharacter>{name}</NameCharacter>
            <ViewButton />
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default History;
