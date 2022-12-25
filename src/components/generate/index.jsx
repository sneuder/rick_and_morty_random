import useCharacter from '../../hooks/useCharacter';

import Loader from '../../shared/components/loader';
import { Button } from './element';

const Generate = () => {
  const { handleCharacter, loadingState } = useCharacter();
  if (loadingState) return <Loader />;
  return <Button onClick={() => handleCharacter()}>Generate</Button>;
};

export default Generate;
