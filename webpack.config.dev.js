var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')],
  output: {
    path: '/',
    publicPath: '/',
    // filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: ['react-hot','babel-loader'],
        exclude: /node_modules/u
      }
    ]
   },
  resolve: {
    extensions: ["", ".js"]
  }
}