import Character from "./components/character";
import Generate from "./components/generate";
import History from "./components/history";

import { Main } from "./global";

function App() {
  return (
    <Main>
      <Character />
      <Generate />
      <History />
    </Main>
  );
}

export default App;
