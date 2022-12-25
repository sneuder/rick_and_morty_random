import { useState } from 'react';

const useSetContext = () => {
  const [characters, setCharacters] = useState({
    main: undefined,
    history: [],
  });

  const setMainCharacter = (newCharacter) => {
    setCharacters((prev) => ({
      ...prev,
      main: undefined,
    }));

    setCharacters((prev) => ({
      ...prev,
      main: newCharacter,
    }));
  };

  const updateHistory = () => {
    setCharacters((prev) => ({
      ...prev,
      history: [prev.main, ...prev.history],
    }));
  };

  return {
    characters,
    setMainCharacter,
    updateHistory,
  };
};

export default useSetContext;
