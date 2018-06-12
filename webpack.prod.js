const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
  context: path.resolve(__dirname, "./src"),
  entry: ["./index.js"],
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
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
  target: "web",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin([{from: path.join(__dirname, "/src/public"), to: path.join(__dirname, "dist")}]),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new BundleAnalyzerPlugin({analyzerMode: env.ANALYZE_BUNDLE ? "server" : "disabled"})
  ]
});