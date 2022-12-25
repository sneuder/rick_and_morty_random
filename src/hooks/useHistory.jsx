import { useEffect, useContext } from 'react';
import CharactersContext from '../services/context';

import { useLazyQuery } from '@apollo/client';
import { CHARACTER } from '../services/graphql/queries';
import Character from '../models/character';

import scrollbar from '../utils/scrollbar';

const useHistory = () => {
  const { setMainCharacter } = useContext(CharactersContext);
  const [getCharacter, result] = useLazyQuery(CHARACTER);

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
      const foundCharacter = new Character(result.data.character);
      setMainCharacter(foundCharacter);
      scrollbar();
    }
  }, [result]);

  return {
    handleHistory,
  };
};

export default useHistory;
