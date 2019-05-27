const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Authoring Libraries"
    })
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  }
};
