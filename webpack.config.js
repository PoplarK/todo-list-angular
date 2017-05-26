const path = require('path');
const webpack = require('webpack');
// const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

const webpackConfig = {
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
      },
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
    })
  ]
}

if(config.styleRule) {
  webpackConfig.module.rules.push(config.styleRule);
}

if(config.imageRule) {
  webpackConfig.module.rules.push(config.imageRule);
}

if(config.uglifyjsPlugin) {
  webpackConfig.plugins.push(config.uglifyjsPlugin);
}

module.exports = webpackConfig;