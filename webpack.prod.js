const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "",
	},
	plugins: [
		new BundleAnalyzerPlugin({analyzerMode: process.env.ANALYZE_BUNDLE ? "server" : "disabled"}),
		new CleanWebpackPlugin(["dist"]),
		new CopyWebpackPlugin([{from: path.join(__dirname, "src/static"), to: path.join(__dirname, "dist")}])
	]
};