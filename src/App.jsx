import { useState } from "react";
import Context from "./context/context";

import Character from "./components/character/index";
import Generate from "./components/generate";
import History from "./components/history";

import { Main } from "./global";

function App() {
  const [information, setInformation] = useState({
    character: {},
    history: [],
  });

  return (
    <Context.Provider value={{information, setInformation}}>
      <Main>
        <Character />
        <Generate />
        <History />
      </Main>
    </Context.Provider>
  );
}

export default App;
