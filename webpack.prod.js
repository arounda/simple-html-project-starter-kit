const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  plugins: [
    new BundleAnalyzerPlugin({analyzerMode: process.env.ANALYZE_BUNDLE ? "server" : "disabled"}),
    new CleanWebpackPlugin(["dist"])
  ]
};