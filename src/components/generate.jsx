import { useContext } from "react";
import Context from "../context/context";

import { useLazyQuery } from "@apollo/client";
import { CHARACTER } from "../graphql/queries";
import randomNumber from "../utils/randomNumber";

import Loading from "./loading/index";

import { Container } from "../shared/Container";
import { Button } from "../shared/Button";

const Generate = () => {
  const [getCharacter, { loading, error, data }] = useLazyQuery(CHARACTER);
  const { information, setInformation } = useContext(Context);

  if(loading) return (
    <Container generate>
      <Loading />
    </Container>
  );

  return (
    <Container generate>
      <Button
        generate
        onClick={() =>
          getCharacter({ variables: { id: randomNumber() } }).then((r) =>
            setInformation({
              character: r.data.character,
              history: [r.data.character, ...information.history],
            })
          )
        }
      >
        Generate
      </Button>
    </Container>
  );
};

export default Generate;
