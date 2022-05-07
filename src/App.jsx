import Character from "./components/character";

import { Main } from "./global";
import { Container } from "./shared/Container";

function App() {
  return (
    <Main>
      <Container>
        <Character />
      </Container>
      <Container></Container>
      <Container></Container>
    </Main>
  );
}

export default App;
