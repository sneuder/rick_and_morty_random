import useHistory from '../../../hooks/useHistory';
import Loader from '../loader';
import { Button, EyeIcon, TextButton } from './elements';

const ViewButton = ({ mainCharacter }) => {
  const { handleHistory, loadingState } = useHistory();
  if (loadingState) return <Loader />;
  return (
    <Button onClick={() => handleHistory(mainCharacter)}>
      <TextButton>view</TextButton>
      <EyeIcon />
    </Button>
  );
};

export default ViewButton;
