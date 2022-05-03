import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  import { GET_RESOURCES } from './queries'

  const client = new ApolloClient({
    uri: `/graphql`,
    cache: new InMemoryCache()
  });

  export { client, ApolloProvider, useQuery, gql, GET_RESOURCES }