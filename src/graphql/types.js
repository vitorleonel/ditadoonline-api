const path = require("path");
const { fileLoader, mergeTypes } = require("merge-graphql-schemas");

const types = fileLoader(path.join(__dirname, "./modules/**/schema.gql"));

module.exports = mergeTypes(types, { all: true });
