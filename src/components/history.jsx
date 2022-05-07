import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Picture } from "../shared/Picture";
import { Title2, Title3 } from "../shared/Title";

const History = () => {
  return (
    <Container>
      <Title2>History</Title2>

      <Container flexHistory>
        <Picture history src="https://picsum.photos/id/1/300/300"/>
        
        <Container flexHorizontal>
          <Title3>Esneider</Title3>
          <Button view>View</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default History;