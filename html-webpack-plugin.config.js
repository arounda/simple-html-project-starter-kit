const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const defaultPath = `${__dirname}/src/templates`;
const initialFolderName = "pages";

const pluginConfig = [];

const getTemplateConfigs = (folderName = initialFolderName, prevPath = defaultPath) => {
	const path = `${prevPath}/${folderName}`;

	const templateFiles = fs.readdirSync(path);

	templateFiles.forEach(fullName => {
		const stats = fs.statSync(`${path}/${fullName}`);
		if(!stats.isDirectory()) {
	
			const nameWithoutExtension = fullName.replace(/\.[^/.]+$/, "");
			const subfolders = folderName !== initialFolderName ? 
				path.substr(path.indexOf(`${initialFolderName}`) + initialFolderName.length) + "/" : "";
				
			pluginConfig.push(new HtmlWebpackPlugin({
				filename: `${subfolders}${nameWithoutExtension}.html`,
				template: `${path}/${fullName}`
			}));

		}
		else {
			getTemplateConfigs(fullName, path);
		}
	});
};

getTemplateConfigs();

module.exports = pluginConfig;