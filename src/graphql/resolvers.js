const path = require("path");
const { fileLoader, mergeResolvers } = require("merge-graphql-schemas");

const resolvers = fileLoader(path.join(__dirname, "./modules/**/resolvers.js"));

module.exports = mergeResolvers(resolvers);
