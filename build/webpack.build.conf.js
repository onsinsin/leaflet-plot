/**
 * Created by onsinsin on 2018/7/26.
 */
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const mode='production'
const outDir = resolve("dist");
const externals=[];
const description='a plot plugin for leaflet';
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    'Leaflet.Plot':'./src/index.js'
  },
  output: {
    path: outDir,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {}
  },
  externals: externals,
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"'+mode+'"'
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    new webpack.BannerPlugin({
      banner: description
    })
  ]
}
