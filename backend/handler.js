const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable schema exploration in tools like GraphQL Playground
});

exports.graphqlHandler = server.createHandler();
