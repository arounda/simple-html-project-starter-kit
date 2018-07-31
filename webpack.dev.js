const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "serve"),
		hotUpdateChunkFilename: "../hot/hot-update.js",
		hotUpdateMainFilename: "../hot/hot-update.json"
	},
	devtool: "source-map",
	plugins: [
		new CopyWebpackPlugin([{
			from: path.join(__dirname, "src/static"),
			to: path.join(__dirname, "serve")
		}]),
		new BrowserSyncPlugin({
			host: "localhost",
			port: 3000,
			proxy: "http://localhost:9000/"
		})
	],
	serve: {
		port: 9000,
		content: [path.join(__dirname, "serve")]
	}
};