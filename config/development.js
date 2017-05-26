const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  styleRule: {
    test: /\.css$/,
    use: ExtractTextWebpackPlugin.extract({
      fallback: "style-loader",
      use: "css-loader?sourceMap"
    })
  },
  imageRule: {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
}