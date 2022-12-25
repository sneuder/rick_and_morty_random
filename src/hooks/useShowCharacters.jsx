import { useContext } from 'react';
import CharactersContext from '../services/context';

const useShowCharacters = () => {
  const { characters } = useContext(CharactersContext);
  const { main, history } = characters;

  return { main, history };
};

export default useShowCharacters;
