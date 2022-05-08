import { useState } from "react";
import Context from "./context/context";

import Character from "./components/character/index";
import Generate from "./components/generate/index";
import History from "./components/history/index";

import { Main } from "./styles";

function App() {
  if (typeof document !== "undefined") {
    const [information, setInformation] = useState({
      character: {},
      history: [],
    });

    return (
      <Context.Provider value={{ information, setInformation }}>
        <Main>
          <Character />
          <Generate />
          <History />
        </Main>
      </Context.Provider>
    );
  }
}

export default App;
