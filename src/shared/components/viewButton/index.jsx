import useHistory from '../../../hooks/useHistory';
import { Button } from './elements';

const ViewButton = ({ idCharacter }) => {
  const { handleHistory } = useHistory();
  return <Button onClick={() => handleHistory(idCharacter)}>view</Button>;
};

export default ViewButton;
