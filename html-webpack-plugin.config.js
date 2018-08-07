const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const templateFiles = fs.readdirSync(__dirname + "/src/templates/pages");

const pluginConfig = templateFiles.map(fullName => {
	const nameWithoutExnetsion = fullName.replace(/\.[^/.]+$/, "");
	return new HtmlWebpackPlugin({
		filename: `${nameWithoutExnetsion}.html`,
		template: `./templates/pages/${fullName}`
	});
});

module.exports = pluginConfig;