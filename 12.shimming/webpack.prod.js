const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    port: 80
  },
  mode: "production"
});
