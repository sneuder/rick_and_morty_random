import useHistory from '../../../hooks/useHistory';
import Loader from '../loader';
import { Button } from './elements';

const ViewButton = ({ idCharacter }) => {
  const { handleHistory, loadingState } = useHistory();
  if (loadingState) return <Loader />;
  return <Button onClick={() => handleHistory(idCharacter)}>view</Button>;
};

export default ViewButton;
