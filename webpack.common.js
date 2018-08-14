const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLPluginConfig = require("./html-webpack-plugin.config");

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: {
		index: "./index.js"
	},
	output: {
		filename: "[name].js"
	},
	target: "web",
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader",
			include: [path.resolve(__dirname, "src")],
			exclude: /node_modules/
		},
		{
			test: /\.scss|css$/,
			exclude: /node_modules/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
		},
		{
			test: /\.(jpe?g|png|gif)$/i,
			use: [{
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					outputPath: "./",
					context: path.resolve(__dirname, "src")          
				}
			}]
		},
		{
			test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [{
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					outputPath: "./",
					context: path.resolve(__dirname, "src")   
				}
			}]
		},
		{
			test: /\.(html|ejs)$/,
			use:[
				{
					loader:"html-loader",
					options: {
						attrs: ["img:src", "object:data"]
					}
				},
				{ loader: "ejs-html-loader", 
					options: { htmlWebpackPlugin: HtmlWebpackPlugin }
				}
			]
		}
		]
	},
	plugins: [
		...HTMLPluginConfig,
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		}),
		new MiniCssExtractPlugin({
			filename: "styles.css"
		})
	],
};