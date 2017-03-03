var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: path.join(__dirname, '../client/vendor.js'),
    application: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    path: path.resolve(path.join(__dirname, '..', 'public'))
  },
  resolve: {
    modules: ['client', 'node_modules'],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: [ path.join(__dirname, "..", "client")],
        options: { cacheDirectory: true }
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader:"url-loader", 
        query: { 
          limit: 10000, 
          mimetype: "application/font-woff" 
        }
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.css$/, loader: "css-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  devtool: 'source-map'
};
