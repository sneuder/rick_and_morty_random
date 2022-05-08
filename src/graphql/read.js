import client from "./client";
import { CHARACTER } from "./queries";

export const characterCache = () => {
  return client.readQuery({
    query: CHARACTER,
    variables: {
      id: 600
    }
  });
}