import { ContainerMessage } from './elements';
import { ContainerButton } from '../../../../shared/containers';

import Message from '../../../../components/message';
import Generate from '../../../../components/generate';

const ViewEmpty = () => {
  return (
    <>
      <ContainerMessage>
        <Message />
      </ContainerMessage>
      <ContainerButton>
        <Generate />
      </ContainerButton>
    </>
  );
};

export default ViewEmpty;
