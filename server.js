"use strict";
const { buildTree } = require("./build");
const express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(`
type TreeNode {
    path: String,
    extension: String,
    fileSizeInBytes: String,
    children: [TreeNode],
}
  type Query {
    directory(url: String): TreeNode
  }
`);

var root = {
  directory: ({ url }) => {
    const files = buildTree(url);
    console.log(files);
    return files;
  },
};

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.post("/directory-tree", (req, res) => {
  const testFolder = req.body.path;
  console.log(req.body);
  const directory = buildTree(testFolder);
  res.send({ directory });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
