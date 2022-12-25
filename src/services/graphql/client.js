import { ApolloClient, InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: cache,
  useGETForQueries: true,
});

export default client;
