import { useEffect, useContext } from 'react';
import CharactersContext from '../services/context';

import { useLazyQuery } from '@apollo/client';
import { CHARACTER } from '../services/graphql/queries';
import Character from '../models/character';

import scrollbar from '../utils/scrollbar';

const useHistory = () => {
  const { setMainCharacter, characters } = useContext(CharactersContext);
  const [getCharacter, result] = useLazyQuery(CHARACTER);
  const loadingState = result.loading;

  const handleHistory = (id) => {
    const variables = {
      variables: {
        id: id,
      },
    };

    getCharacter(variables);
  };

  useEffect(() => {
    if (result.data?.character) {
      const newCharacter = result.data.character;
      const foundCharacter = new Character(newCharacter);
      setMainCharacter(foundCharacter);
      scrollbar();
    }
  }, [result]);

  return {
    loadingState,
    handleHistory,
  };
};

export default useHistory;
