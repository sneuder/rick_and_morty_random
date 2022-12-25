import { ContainerButton } from '../../../../shared/containers/index';

import Character from '../../../../components/character';
import Generate from '../../../../components/generate';

import { Container } from './elements';

const ViewCharacters = ({ main, history }) => {
  return (
    <Container>
      <Character main={main} />
      <ContainerButton>
        <Generate />
      </ContainerButton>
    </Container>
  );
};

export default ViewCharacters;
