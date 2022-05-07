import Character from "./components/character";
import History from "./components/history";

import { Main } from "./global";
import { Container } from "./shared/Container";

function App() {
  return (
    <Main>
      <Character />
      <History />
    </Main>
  );
}

export default App;
