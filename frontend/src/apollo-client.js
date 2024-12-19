import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://x2d6c4ro68.execute-api.us-east-1.amazonaws.com/dev/graphql', // Use your deployed API URL here
    // uri: 'http://localhost:3001/dev/graphql', // Use your deployed API URL here

  }),
  cache: new InMemoryCache(),
});

export default client;
