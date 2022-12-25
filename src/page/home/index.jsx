import useShowCharacters from '../../hooks/useShowCharacters';

import { Container } from './elements';
import ViewEmpty from './views/empty';
import ViewCharacters from './views/characters';

const Home = () => {
  const { main, history } = useShowCharacters();

  return (
    <Container>
      {history.length === 0 ? (
        <ViewEmpty />
      ) : (
        <ViewCharacters
          main={main}
          history={history}
        />
      )}
    </Container>
  );
};

export default Home;
