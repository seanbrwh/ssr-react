const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/back/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.compiled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  }
};
