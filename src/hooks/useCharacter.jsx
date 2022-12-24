import { useEffect, useContext } from 'react';
import CharactersContext from '../services/context';

import Character from '../models/character';
import randomNumber from '../utils/randomNumber';

import { useLazyQuery } from '@apollo/client';
import { CHARACTER } from '../services/graphql/queries';

const useCharacter = () => {
  const { updateHistory, setMainCharacter } = useContext(CharactersContext);
  const [getCharacter, result] = useLazyQuery(CHARACTER);

  const handleCharacter = () => {
    const id = randomNumber();
    const variables = {
      variables: {
        id: id,
      },
    };

    getCharacter(variables);
  };

  useEffect(() => {
    if (result.data?.character) {
      const newCharacter = new Character(result.data.character);
      setMainCharacter(newCharacter);
      updateHistory();
    }
  }, [result]);

  return {
    handleCharacter,
  };
};

export default useCharacter;
