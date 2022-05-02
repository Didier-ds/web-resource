import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: process.env.APP_URL + '/graphql',
    cache: new InMemoryCache()
  });

  export {client, ApolloProvider}