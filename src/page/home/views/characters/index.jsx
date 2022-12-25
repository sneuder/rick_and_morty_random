import { ContainerButton } from '../../../../shared/containers/index';

import Character from '../../../../components/character';
import Generate from '../../../../components/generate';
import History from '../../../../components/history';

import { Container } from './elements';

const ViewCharacters = ({ main, history }) => {
  return (
    <Container>
      <Character main={main} />
      <ContainerButton>
        <Generate />
      </ContainerButton>
      <History history={history} />
    </Container>
  );
};

export default ViewCharacters;
