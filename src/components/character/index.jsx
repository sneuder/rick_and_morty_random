import {
  Image,
  Container,
  Card,
  ContainerHeader,
  Title,
  SubTitle,
  ContainerDetails,
  ContainerDetail,
  TitleDetail,
  TextDetail,
  Line,
} from './elements';

const Character = ({ main }) => {
  const { id, name, image, details } = main;

  return (
    <Container>
      <Image
        src={image}
        alt={name}
      />
      <Card>
        <ContainerHeader>
          <Title>{name}</Title>
          <SubTitle>character id: {id}</SubTitle>
        </ContainerHeader>
        <ContainerDetails>
          {details.map(({ title, text }, i) => (
            <>
              <ContainerDetail>
                <TitleDetail>{title}</TitleDetail>
                <TextDetail>{text}</TextDetail>
              </ContainerDetail>
              {i !== details.length - 1 && <Line />}
            </>
          ))}
        </ContainerDetails>
      </Card>
    </Container>
  );
};

export default Character;
