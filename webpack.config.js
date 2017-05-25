const path = require('path');
const webpack = require('webpack');
// const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: './main.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            // options: {
            //   configFileName: path.resolve(__dirname, 'tsconfig.json')
            // }
          },
          'angular2-template-loader'
        ]
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }, {
        test: /\.css$/,
        use: 'raw-loader'
      }, {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?sourceMap&minimize"
        })
      }, {
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name].css'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
}