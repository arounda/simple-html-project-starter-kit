const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./serve"),
    hotUpdateChunkFilename: "../hot/hot-update.js",
    hotUpdateMainFilename: "../hot/hot-update.json"
  },
  devtool: "source-map",
  serve: {
    port: 9000,
    content: [path.join(__dirname, "./serve")],
    hot: {
      hot: true
    }
  }
};