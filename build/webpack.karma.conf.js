/**
 * Created by onsinsin on 2018/7/26.
 */
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode:'development',
  resolve: {
    extensions: ['.js'],
    alias: {}
  },
  externals: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    })
  ]
}
