const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config");

const options = {
  contentBase: path.resolve(__dirname, "dist"),
  hot: true,
  host: "localhost"
};

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, () => console.log("dev server listening on port 5000"));
