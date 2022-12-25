import useSetContext from './hooks/useSetContext';
import CharactersContext from './services/context';

import Home from './page/home';

const App = () => {
  const toolsContext = useSetContext();

  return (
    <CharactersContext.Provider value={toolsContext}>
      <Home />
    </CharactersContext.Provider>
  );
};

export default App;
