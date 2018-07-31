const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: ["./index.js"],
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "./serve"),
    filename: "main.js",
    hotUpdateChunkFilename: "../hot/hot-update.js",
    hotUpdateMainFilename: "../hot/hot-update.json"
  },
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
          name: "./[path][name].[ext]",
          context: path.resolve(__dirname, "src/public")          
        }
      }]
    },
    {
      test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "./[path][name].[ext]",
          context: path.resolve(__dirname, "src/public")   
        }
      }]
    },
    {
      test: /\.html$/,
      use: {
        loader:"html-loader",
        options: {
          attrs: ["img:src", "object:data"]
        }
      }
    },
    ]
  },
  devtool: "source-map",
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
  serve: {
    port: 9000,
    content: [path.join(__dirname, "./serve")],
    hot: {
      hot: true
    }
  }
};