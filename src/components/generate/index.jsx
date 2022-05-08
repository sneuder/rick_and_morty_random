import { useContext } from "react";
import Context from "../../context/context";

import { useLazyQuery } from "@apollo/client";
import { CHARACTER } from "../../graphql/queries";
import randomNumber from "../../utils/randomNumber";
import scrollbar from "../../utils/scrollbar";

import Loading from "../loading/index";

import { Container } from "./Containers";
import { Button } from "../../shared/Button";

const Generate = () => {
  const [getCharacter, { loading, error, data }] = useLazyQuery(CHARACTER);
  const { information, setInformation } = useContext(Context);

  if (loading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  return (
    <Container>
      <Button
        generate
        onClick={() =>
          getCharacter({ variables: { id: randomNumber() } }).then((r) => {
            setInformation({
              character: r.data.character,
              history: [r.data.character, ...information.history],
            });
            scrollbar();
          })
        }
      >
        Generate
      </Button>
    </Container>
  );
};

export default Generate;
