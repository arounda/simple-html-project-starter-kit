const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: ["./index.js"],
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "./src/public"),
    filename: "main.js",
    publicPath: "",
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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "./[path][name].[ext]"          
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "./[path][name].[ext]"
          }
        }]
      }
    ]
  },
  devtool: "source-map",
  target: "web",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
  serve: {
    port: 9000,
    content: [path.join(__dirname, "./src/public")],
    hot: {
      hot: true
    }
  }
};