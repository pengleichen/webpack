const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    polyfills: "./src/polyfills.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Shimming"
    }),
    new webpack.ProvidePlugin({
      //   _: "lodash"
      join: ["lodash", "join"]
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?this=>window"
      },
      {
        test: require.resolve("./src/globals.js"),
        use: "exports-loader?file,parse=helpers.parse"
      }
    ]
  }
};
