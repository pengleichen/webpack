const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Lazy Loading"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
