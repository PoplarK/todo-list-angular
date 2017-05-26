const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  styleRule: {
    test: /\.css$/,
    use: ExtractTextWebpackPlugin.extract({
      fallback: "style-loader",
      use: "css-loader?sourceMap&minimize"
    })
  },
  imageRule: {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          publicPath: '',
          limit: 8192
        }
      }
    ]
  },
  uglifyjsPlugin: new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    comments: false
  })
}