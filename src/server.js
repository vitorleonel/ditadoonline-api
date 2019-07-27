const { GraphQLServer } = require("graphql-yoga");

const schema = require("./graphql");
const server = new GraphQLServer({ schema });

server.start(() => {
  console.log("Server started with success!");
});
